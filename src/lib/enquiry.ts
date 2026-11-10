export const enquiryRecipient = 'info@eliteproksa.com';
import type { SiteCopy } from '../data/site-copy';

export interface Enquiry {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

function oneLine(value: string) {
  return value.replace(/[\r\n\u0000-\u001f\u007f]/g, ' ').trim();
}

/** Prepare a customer-reviewed message; this function does not send email. */
export function prepareEnquiryEmail(enquiry: Enquiry, copy: SiteCopy['mail']) {
  const subject = `${copy.subjectPrefix} — ${oneLine(enquiry.company || enquiry.name)}`;
  const details = [
    `${copy.nameLabel}: ${oneLine(enquiry.name)}`,
    enquiry.company.trim() ? `${copy.companyLabel}: ${oneLine(enquiry.company)}` : '',
    enquiry.email.trim() ? `${copy.emailLabel}: ${oneLine(enquiry.email)}` : '',
    enquiry.phone.trim() ? `${copy.phoneLabel}: ${oneLine(enquiry.phone)}` : '',
    `${copy.servicesLabel}: ${enquiry.services.length ? enquiry.services.map(oneLine).join(copy.serviceSeparator) : copy.unsure}`,
  ].filter(Boolean);
  const body = [copy.greeting, '', ...details, '', `${copy.projectLabel}:`, enquiry.message.trim()].join('\r\n');
  return `mailto:${enquiryRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
