import { prepareEnquiryEmail } from './enquiry';
import type { Locale, SiteCopy } from '../data/site-copy';
type Film = { title: string; subtitle: string; source: string; poster: string; portrait: boolean; description: string };
declare global { interface Window { eliteContent: { films: Record<string, Film>; serviceNames: Record<string, string>; language: Locale; ui: Pick<SiteCopy, 'form'|'validation'|'hero'|'mail'> } } }
const {ui} = window.eliteContent;
function updateLanguageLinks() {
  document.querySelectorAll<HTMLAnchorElement>('[data-language-link]').forEach(link => {
    const target = new URL(link.href); target.search = location.search; target.hash = location.hash; link.href = target.href;
  });
}
updateLanguageLinks(); window.addEventListener('hashchange', updateLanguageLinks); window.addEventListener('pageshow', updateLanguageLinks);
const menu = document.querySelector<HTMLDialogElement>('#mobile-menu')!;
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const brief = document.querySelector<HTMLDialogElement>('#brief-dialog')!;
const filmDialog = document.querySelector<HTMLDialogElement>('#film-dialog')!;
const player = document.querySelector<HTMLVideoElement>('#film-player')!;
const heroVideo = document.querySelector<HTMLVideoElement>('#hero-video')!;
const toggle = document.querySelector<HTMLButtonElement>('.loop-toggle')!;
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lastTrigger: HTMLElement | null = null;
function closeDialog(dialog: HTMLDialogElement) { dialog.close(); }
function openDialog(dialog: HTMLDialogElement, trigger: HTMLElement) {
  const returnTarget = menu.contains(trigger) ? menuToggle : trigger;
  document.querySelectorAll<HTMLDialogElement>('dialog[open]').forEach(d => d.close());
  lastTrigger = returnTarget;
  dialog.showModal();
  menuToggle.setAttribute('aria-expanded', String(menu.open));
  document.body.classList.add('dialog-open');
  heroVideo.pause();
}
menuToggle.addEventListener('click', e => openDialog(menu, e.currentTarget as HTMLElement));
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-dialog-close]').forEach(button => button.addEventListener('click', () => closeDialog(dialog)));
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDialog(dialog); } });
  dialog.addEventListener('close', () => {
    menuToggle.setAttribute('aria-expanded', String(menu.open));
    if (dialog === filmDialog) { player.pause(); player.removeAttribute('src'); player.load(); }
    if (!document.querySelector('dialog[open]')) {
      document.body.classList.remove('dialog-open'); resumeHero();
      const target = lastTrigger?.getClientRects().length ? lastTrigger : document.querySelector<HTMLElement>('.brand');
      target?.focus({ preventScroll: true });
    }
  });
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  const section = document.querySelector<HTMLElement>(link.hash);
  if (section) { section.tabIndex = -1; lastTrigger = section; }
  closeDialog(menu);
}));
document.querySelectorAll<HTMLButtonElement>('[data-brief-open]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.service) {
    brief.querySelectorAll<HTMLInputElement>('input[name="service"]').forEach(input => input.checked = input.value === button.dataset.service);
  }
  document.querySelector('#brief-status')!.textContent = '';
  document.querySelector<HTMLAnchorElement>('#prepared-email')!.hidden = true;
  openDialog(brief, button);
}));
document.querySelectorAll<HTMLButtonElement>('[data-film]').forEach(button => button.addEventListener('click', () => {
  const film = window.eliteContent.films[button.dataset.film!];
  document.querySelector('#film-title')!.textContent = film.title;
  document.querySelector('#film-subtitle')!.textContent = film.subtitle;
  document.querySelector('#film-description')!.textContent = film.description;
  player.src = film.source; player.poster = film.poster;
  player.setAttribute('aria-label', film.title);
  filmDialog.classList.toggle('portrait-film', film.portrait);
  openDialog(filmDialog, button);
  player.load();
}));
function updateHeroControl() {
  const playing = !heroVideo.paused;
  toggle.setAttribute('aria-pressed', String(playing));
  toggle.setAttribute('aria-label', playing ? ui.hero.pausePreview : ui.hero.playPreview);
  toggle.classList.toggle('is-playing', playing);
}
heroVideo.addEventListener('playing', () => { heroVideo.classList.add('is-visible'); updateHeroControl(); });
heroVideo.addEventListener('pause', updateHeroControl);
heroVideo.addEventListener('error', () => { heroVideo.classList.remove('is-visible'); updateHeroControl(); });
const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
function loadHero() { if (!heroVideo.getAttribute('src')) heroVideo.src = heroVideo.dataset.src!; }
let manuallyPaused = false;
let heroInView = false;
function resumeHero() { if (!motion.matches && !connection?.saveData && !manuallyPaused && heroInView && !document.hidden && !document.querySelector('dialog[open]') && !document.querySelector('[data-opening-signal]:not([hidden])')) { loadHero(); heroVideo.play().catch(() => updateHeroControl()); } }
document.addEventListener('elite:opening-end', resumeHero);
toggle.addEventListener('click', () => { loadHero(); manuallyPaused = !heroVideo.paused; if (heroVideo.paused) heroVideo.play().catch(() => updateHeroControl()); else heroVideo.pause(); });
motion.addEventListener('change', () => { if (motion.matches) { heroVideo.pause(); heroVideo.classList.remove('is-visible'); } else resumeHero(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) heroVideo.pause(); else resumeHero(); });
new IntersectionObserver(entries => { heroInView = entries[0].isIntersecting; if (!heroInView) heroVideo.pause(); else resumeHero(); }, { threshold: .1 }).observe(heroVideo);
const form = document.querySelector<HTMLFormElement>('#brief-form')!;
const fields = {
  name: form.elements.namedItem('name') as HTMLInputElement,
  company: form.elements.namedItem('company') as HTMLInputElement,
  email: form.elements.namedItem('email') as HTMLInputElement,
  phone: form.elements.namedItem('phone') as HTMLInputElement,
  message: form.elements.namedItem('message') as HTMLTextAreaElement,
};
Object.values(fields).forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
form.addEventListener('submit', event => {
  event.preventDefault(); Object.values(fields).forEach(field => field.setCustomValidity(''));
  const v = ui.validation;
  fields.name.setCustomValidity(!fields.name.value.trim() ? v.nameRequired : fields.name.value.trim().length < 2 ? v.nameTooShort : fields.name.value.length > 80 ? v.nameTooLong : '');
  fields.company.setCustomValidity(fields.company.value.length > 120 ? v.companyTooLong : '');
  fields.email.setCustomValidity(fields.email.validity.typeMismatch ? v.emailInvalid : fields.email.value.length > 120 ? v.emailTooLong : '');
  fields.phone.setCustomValidity(fields.phone.value.length > 30 ? v.phoneTooLong : '');
  fields.message.setCustomValidity(!fields.message.value.trim() ? v.messageRequired : fields.message.value.trim().length < 10 ? v.messageTooShort : fields.message.value.length > 1000 ? v.messageTooLong : '');
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const field = (name: string) => String(data.get(name) || '').trim();
  const selected = [...brief.querySelectorAll<HTMLInputElement>('input[name="service"]:checked')].map(input => window.eliteContent.serviceNames[input.value] || ui.form.unsure);
  const status = document.querySelector<HTMLElement>('#brief-status')!;
  const mailto = prepareEnquiryEmail({name:field('name'),company:field('company'),email:field('email'),phone:field('phone'),services:selected,message:field('message')},ui.mail);
  const prepared = document.querySelector<HTMLAnchorElement>('#prepared-email')!;
  prepared.href = mailto; prepared.hidden = false; status.textContent = ui.form.ready;
  window.location.assign(mailto);
});
