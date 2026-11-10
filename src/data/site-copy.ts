export type Locale = 'ar' | 'en';

type ServiceId = 'film' | 'campaigns' | 'events' | 'identity' | 'interactive' | 'ai';
type FilmCopy = { title: string; subtitle: string; description: string };
type FormFieldCopy = { label: string; placeholder: string };

/** All customer-facing copy lives here; media and canonical IDs remain in home.ts. */
export interface SiteCopy {
  page: {
    title: string;
    description: string;
    skipToContent: string;
    brandHomeLabel: string;
    brandImageAlt: string;
    languageSwitchLabel: string;
    switchLanguageLabel: string;
    languageName: string;
    alternateLanguageName: string;
  };
  nav: {
    ariaLabel: string;
    services: string;
    work: string;
    about: string;
    process: string;
    contact: string;
    startProject: string;
  };
  hero: {
    eyebrowBrand: string;
    location: string;
    headingLead: string;
    headingLink: string;
    headingAccent: string;
    description: string;
    workLink: string;
    imageAlt: string;
    agencyLine: string;
    mediaCaption: string;
    playPreview: string;
    pausePreview: string;
    footline: string;
    servicesLink: string;
    tagline: string;
  };
  servicesIntro: {
    eyebrow: string;
    heading: string;
    description: string;
    workLink: string;
    multipleServices: string;
    discussProject: string;
    discussServicePrefix: string;
    indexLabel: string;
    requestService: string;
  };
  serviceCopy: Record<ServiceId, { title: string; description: string; imageAlt: string }>;
  work: {
    eyebrow: string;
    heading: string;
    descriptionLines: string[];
    watchVideo: string;
    noor: { title: string; category: string; imageAlt: string; watchLabel: string; indexLabel: string };
    confex: { title: string; category: string; imageAlt: string; watchLabel: string; indexLabel: string };
  };
  about: {
    eyebrow: string;
    headingLead: string;
    headingLink: string;
    headingAccent: string;
    description: string;
    imageAlt: string;
    imageCaption: string;
    signatureLines: string[];
  };
  process: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    descriptionLines: string[];
  };
  processSteps: { title: string; description: string }[];
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    projectLink: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappAriaLabel: string;
    location: string;
  };
  footer: {
    statementLines: string[];
    tagline: string;
    navigationLabel: string;
    navigationAriaLabel: string;
    socialLabel: string;
    socialAriaLabels: { instagram: string; linkedin: string; vimeo: string };
    copyright: string;
    location: string;
  };
  menu: { heading: string; open: string; close: string; ariaLabel: string };
  film: { close: string; playbackError: string; identity: FilmCopy; noor: FilmCopy; confex: FilmCopy };
  form: {
    eyebrow: string;
    close: string;
    title: string;
    intro: string;
    required: string;
    optional: string;
    fields: { name: FormFieldCopy; company: FormFieldCopy; email: FormFieldCopy; phone: FormFieldCopy; message: FormFieldCopy };
    servicesLabel: string;
    servicesHelp: string;
    unsure: string;
    messageHelp: string;
    submit: string;
    sendNote: string;
    preparing: string;
    ready: string;
    preparationError: string;
    openPreparedEmail: string;
    directEmailLabel: string;
  };
  validation: {
    nameRequired: string;
    nameTooShort: string;
    nameTooLong: string;
    companyTooLong: string;
    emailInvalid: string;
    emailTooLong: string;
    phoneTooLong: string;
    messageRequired: string;
    messageTooShort: string;
    messageTooLong: string;
    invalidForm: string;
  };
  intro: { ariaLabel: string; skip: string; tagline: string };
  mail: {
    subjectPrefix: string;
    greeting: string;
    nameLabel: string;
    companyLabel: string;
    emailLabel: string;
    phoneLabel: string;
    servicesLabel: string;
    unsure: string;
    projectLabel: string;
    serviceSeparator: string;
  };
}

export const siteCopy: Record<Locale, SiteCopy> = {
  ar: {
    page: {
      title: 'إيليت برو | أفكار تتحوّل إلى محتوى وتجارب',
      description: 'إيليت برو في الرياض. إنتاج مرئي، حملات إعلامية، هوية وتصميم، فعاليات ومؤتمرات، وتجارب تفاعلية وإنتاج بالذكاء الاصطناعي.',
      skipToContent: 'انتقل إلى المحتوى',
      brandHomeLabel: 'إيليت برو — الرئيسية',
      brandImageAlt: 'إيليت برو',
      languageSwitchLabel: 'اختيار اللغة',
      switchLanguageLabel: 'عرض الموقع بالإنجليزية',
      languageName: 'العربية',
      alternateLanguageName: 'English',
    },
    nav: {
      ariaLabel: 'التنقل الرئيسي',
      services: 'خدماتنا',
      work: 'أعمالنا',
      about: 'عن إيليت برو',
      process: 'كيف نعمل',
      contact: 'تواصل معنا',
      startProject: 'ابدأ مشروعك',
    },
    hero: {
      eyebrowBrand: 'إيليت برو',
      location: 'الرياض',
      headingLead: 'أفكار تتحوّل',
      headingLink: 'إلى',
      headingAccent: 'محتوى وتجارب.',
      description: 'أفلام ومحتوى مرئي، حملات وهويات، وفعاليات وتجارب تفاعلية. مسارات إبداعية تتكامل لتأخذ فكرتك شكلها.',
      workLink: 'استكشف أعمالنا',
      imageAlt: 'كاميرا سينمائية من لقطات إيليت برو في منتدى الأفلام السعودي',
      agencyLine: 'A 360° CREATIVE AGENCY',
      mediaCaption: 'من مشاركات إيليت برو',
      playPreview: 'تشغيل الفيديو',
      pausePreview: 'إيقاف الفيديو',
      footline: 'من الفكرة إلى المشهد.',
      servicesLink: 'اكتشف المسارات',
      tagline: 'ESTABLISH TO END.',
    },
    servicesIntro: {
      eyebrow: 'مجالات عملنا',
      heading: 'خدمات إيليت برو',
      description: 'اختر الخدمة الأقرب لمشروعك، أو اجمع أكثر من خدمة ضمن نطاق واحد.',
      workLink: 'تعرّف علينا من أعمالنا',
      multipleServices: 'هل يجمع مشروعك أكثر من خدمة؟',
      discussProject: 'ناقش المشروع معنا',
      discussServicePrefix: 'ناقش مشروع',
      indexLabel: 'انتقل إلى الخدمة',
      requestService: 'ناقش هذه الخدمة',
    },
    serviceCopy: {
      film: { title: 'الأفلام والمحتوى المرئي', description: 'تصوير وإنتاج أفلام ومحتوى مرئي، مع المونتاج والموشن جرافيك.', imageAlt: 'كاميرا سينمائية من لقطات إيليت برو' },
      campaigns: { title: 'الحملات الإعلامية', description: 'تطوير فكرة الحملة ورسائلها، وصناعة المحتوى الذي يقدّمها للجمهور.', imageAlt: 'تصور توضيحي لمراجعة صورة حملة عبر نسخ مطبوعة وشاشة' },
      events: { title: 'الفعاليات والمؤتمرات', description: 'تنظيم الفعاليات والمؤتمرات، والإنتاج والتغطية المرئية المصاحبة لها.', imageAlt: 'حضور وقاعة عرض في منتدى الأفلام السعودي' },
      identity: { title: 'الهوية والتصميم', description: 'تصميم الهوية البصرية وتطبيقاتها، ومحتوى يحافظ على حضور العلامة.', imageAlt: 'بطاقة تحمل هوية إيليت برو' },
      interactive: { title: 'التجارب التفاعلية', description: 'تصميم تجارب تدعو الجمهور إلى المشاركة والتفاعل مع الفكرة.', imageAlt: 'تصور توضيحي لمشارك تلتقي يده باستجابة ضوئية على جدار إسقاط' },
      ai: { title: 'الإنتاج بالذكاء الاصطناعي', description: 'إنتاج محتوى بصري باستخدام أدوات الذكاء الاصطناعي، بإشراف إبداعي ومراجعة للمخرجات.', imageAlt: 'تصور توضيحي لفنان يراجع بدائل صورة مستوحاة من مجسم طيني' },
    },
    work: {
      eyebrow: 'الفكرة حين تصبح واقعًا',
      heading: 'من أعمالنا',
      descriptionLines: ['لقطات تختصر الحكاية.', 'ومشاهد تحمل تفاصيلها.'],
      watchVideo: 'شاهد الفيديو',
      noor: { title: 'نور', category: 'من الأرشيف المرئي', imageAlt: 'صورة من الملصق الرسمي لفيلم نور', watchLabel: 'شاهد فيديو نور', indexLabel: '01 / NOOR' },
      confex: { title: 'منتدى الأفلام السعودي', category: 'مشاركات إيليت برو', imageAlt: 'لقاء عدد من الحضور داخل منتدى الأفلام السعودي', watchLabel: 'شاهد فيديو منتدى الأفلام السعودي', indexLabel: '02 / SAUDI FILM CONFEX' },
    },
    about: {
      eyebrow: 'عن إيليت برو',
      headingLead: 'الفكرة أوسع',
      headingLink: 'من',
      headingAccent: 'قالب واحد.',
      description: 'نحن شركة سعودية للإنتاج والإبداع في الرياض. نجمع الصورة والتصميم والحملات والفعاليات والتجارب التفاعلية، لأن كل فكرة تحتاج لغتها وطريقتها لتصل.',
      imageAlt: 'لقاء في جناح إيليت برو ضمن إحدى المشاركات',
      imageCaption: 'من لقاءات إيليت برو',
      signatureLines: ['SAME SPIRIT.', 'A WIDER FRAME.'],
    },
    process: {
      eyebrow: 'من أول حديث إلى آخر تفصيلة',
      headingLead: 'خطوات واضحة.',
      headingAccent: 'ومساحة للإبداع.',
      descriptionLines: ['نعرف إلى أين نتجه،', 'ونبقيك جزءًا من المشهد.'],
    },
    processSteps: [
      { title: 'نسمع فكرتك', description: 'نبدأ بالهدف، والجمهور، وما تريد أن يصل إليهم.' },
      { title: 'نرسم الاتجاه', description: 'نحدّد الفكرة والمخرجات ونطاق العمل معك.' },
      { title: 'نصنع التفاصيل', description: 'تنفيذ تتخلله نقاط واضحة للمراجعة والنقاش.' },
      { title: 'نُكمل المشهد', description: 'نراجع العمل ونسلّم المخرجات المتفق عليها.' },
    ],
    contact: {
      eyebrow: 'تواصل مع إيليت برو',
      heading: 'نبدأ من فكرتك.',
      description: 'حدّثنا عن هدف المشروع، والخدمات التي تحتاجها، والموعد المتوقع.',
      projectLink: 'حدّثنا عن مشروعك',
      emailLabel: 'البريد الإلكتروني',
      whatsappLabel: 'واتساب',
      whatsappAriaLabel: 'تواصل مع إيليت برو عبر واتساب — يفتح في تبويب جديد',
      location: 'الرياض، المملكة العربية السعودية',
    },
    footer: {
      statementLines: ['إنتاج وإبداع', 'من الرياض.'],
      tagline: 'ESTABLISH TO END.',
      navigationLabel: 'اكتشف إيليت برو',
      navigationAriaLabel: 'روابط التذييل',
      socialLabel: 'تابع إيليت برو',
      socialAriaLabels: {
        instagram: 'Instagram — يفتح في تبويب جديد',
        linkedin: 'LinkedIn — يفتح في تبويب جديد',
        vimeo: 'Vimeo — يفتح في تبويب جديد',
      },
      copyright: 'إيليت برو. جميع الحقوق محفوظة.',
      location: 'الرياض، المملكة العربية السعودية',
    },
    menu: { heading: 'استكشف إيليت برو', open: 'فتح القائمة', close: 'إغلاق القائمة', ariaLabel: 'قائمة الجوال' },
    film: {
      close: 'إغلاق الفيديو',
      playbackError: 'تعذّر تشغيل الفيديو. حاول تشغيله مرة أخرى.',
      identity: { title: 'نفس الروح. بلبس جديد.', subtitle: 'إيليت برو', description: 'فيلم الهوية الجديدة لإيليت برو.' },
      noor: { title: 'نور', subtitle: 'من الأرشيف المرئي', description: 'مشاهد من فيديو نور المحفوظ في أرشيف إيليت برو.' },
      confex: { title: 'منتدى الأفلام السعودي', subtitle: 'من مشاركات إيليت برو', description: 'لقطات من مشاركات إيليت برو في منتدى الأفلام السعودي.' },
    },
    form: {
      eyebrow: 'لنبدأ من الفكرة',
      close: 'إغلاق تفاصيل المشروع',
      title: 'حدّثنا عن مشروعك',
      intro: 'اكتب نبذة عن المشروع. سنجهّز رسالتك لتراجعها وترسلها من برنامج البريد.',
      required: 'مطلوب',
      optional: 'اختياري',
      fields: {
        name: { label: 'الاسم', placeholder: 'اسمك' },
        company: { label: 'الجهة', placeholder: 'اسم الشركة أو الجهة' },
        email: { label: 'البريد الإلكتروني', placeholder: 'name@example.com' },
        phone: { label: 'رقم التواصل', placeholder: '+966' },
        message: { label: 'نبذة عن المشروع', placeholder: 'حدّثنا عن المشروع الذي تفكّر فيه…' },
      },
      servicesLabel: 'الخدمات التي تحتاجها',
      servicesHelp: 'يمكن اختيار أكثر من خدمة',
      unsure: 'أحتاج مساعدتكم في تحديد الخدمة',
      messageHelp: 'الهدف والموعد المتوقع، في 10 أحرف على الأقل.',
      submit: 'تجهيز رسالة البريد',
      sendNote: 'ستفتح مسودة إلى بريد إيليت برو. راجعها واضغط «إرسال» من برنامج بريدك.',
      preparing: 'جارٍ تجهيز رسالتك…',
      ready: 'الرسالة جاهزة للمراجعة والإرسال من برنامج بريدك. إذا لم يفتح، استخدم الرابط التالي.',
      preparationError: 'تعذّر تجهيز الرسالة. حاول مرة أخرى، أو تواصل معنا مباشرة عبر البريد.',
      openPreparedEmail: 'فتح الرسالة في البريد',
      directEmailLabel: 'بريد إيليت برو',
    },
    validation: {
      nameRequired: 'اكتب اسمك.',
      nameTooShort: 'اكتب اسمك من حرفين على الأقل.',
      nameTooLong: 'اكتب الاسم في 80 حرفًا أو أقل.',
      companyTooLong: 'اكتب اسم الجهة في 120 حرفًا أو أقل.',
      emailInvalid: 'اكتب بريدًا إلكترونيًا صحيحًا، مثل name@example.com.',
      emailTooLong: 'اكتب البريد الإلكتروني في 120 حرفًا أو أقل.',
      phoneTooLong: 'اكتب رقم التواصل في 30 حرفًا أو أقل.',
      messageRequired: 'اكتب نبذة عن المشروع.',
      messageTooShort: 'اكتب نبذة عن المشروع من 10 أحرف على الأقل.',
      messageTooLong: 'اكتب نبذة المشروع في 1000 حرف أو أقل.',
      invalidForm: 'راجع الحقول الموضّحة لإكمال الرسالة.',
    },
    intro: { ariaLabel: 'افتتاحية إيليت برو', skip: 'تخطي المقدمة', tagline: 'ESTABLISH TO END.' },
    mail: {
      subjectPrefix: 'طلب مشروع',
      greeting: 'مرحبًا فريق إيليت برو،',
      nameLabel: 'الاسم',
      companyLabel: 'الجهة',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'رقم التواصل',
      servicesLabel: 'الخدمات',
      unsure: 'أحتاج مساعدتكم في تحديد الخدمة',
      projectLabel: 'عن المشروع',
      serviceSeparator: '، ',
    },
  },
  en: {
    page: {
      title: 'Elite Pro | Ideas become content & experiences',
      description: 'Elite Pro, Riyadh. Film and visual content, media campaigns, brand identity and design, events and conferences, interactive experiences, and AI-powered production.',
      skipToContent: 'Skip to content',
      brandHomeLabel: 'Elite Pro — Home',
      brandImageAlt: 'Elite Pro',
      languageSwitchLabel: 'Choose language',
      switchLanguageLabel: 'View the website in Arabic',
      languageName: 'English',
      alternateLanguageName: 'العربية',
    },
    nav: {
      ariaLabel: 'Main navigation',
      services: 'Services',
      work: 'Our work',
      about: 'About Elite Pro',
      process: 'How we work',
      contact: 'Contact',
      startProject: 'Start a project',
    },
    hero: {
      eyebrowBrand: 'Elite Pro',
      location: 'Riyadh',
      headingLead: 'Ideas become',
      headingLink: '',
      headingAccent: 'content & experiences.',
      description: 'Films and visual content. Campaigns and identities. Events and interactive experiences. Creative disciplines come together to give your idea its form.',
      workLink: 'Explore our work',
      imageAlt: 'A cinema camera in Elite Pro footage from Saudi Film Confex',
      agencyLine: 'A 360° CREATIVE AGENCY',
      mediaCaption: 'From Elite Pro’s event participation',
      playPreview: 'Play video',
      pausePreview: 'Pause video',
      footline: 'From the idea to the scene.',
      servicesLink: 'Explore our services',
      tagline: 'ESTABLISH TO END.',
    },
    servicesIntro: {
      eyebrow: 'What we do',
      heading: 'Elite Pro services',
      description: 'Choose the service your project needs, or bring several together in one scope.',
      workLink: 'Get to know us through our work',
      multipleServices: 'Does your project bring several services together?',
      discussProject: 'Talk to us about it',
      discussServicePrefix: 'Discuss a project in',
      indexLabel: 'Explore a service',
      requestService: 'Discuss this service',
    },
    serviceCopy: {
      film: { title: 'Film & visual content', description: 'Filming and production for films and visual content, with editing and motion graphics.', imageAlt: 'A cinema camera in footage by Elite Pro' },
      campaigns: { title: 'Media campaigns', description: 'Campaign concepts, messaging, and the content that brings them to your audience.', imageAlt: 'Concept illustration of a campaign image reviewed across printed proofs and a monitor' },
      events: { title: 'Events & conferences', description: 'Event and conference planning, with production and visual coverage.', imageAlt: 'Attendees and a presentation hall at Saudi Film Confex' },
      identity: { title: 'Brand identity & design', description: 'Visual identities, brand applications, and content that keeps your brand consistent.', imageAlt: 'A card featuring the Elite Pro brand identity' },
      interactive: { title: 'Interactive experiences', description: 'Experiences that invite audiences to participate and engage with an idea.', imageAlt: 'Concept illustration of a participant making a localized light response on a projection wall' },
      ai: { title: 'AI-powered production', description: 'Visual content produced with AI tools, guided by creative direction and a review of the results.', imageAlt: 'Concept illustration of an artist selecting image variations derived from a clay maquette' },
    },
    work: {
      eyebrow: 'Ideas brought to life',
      heading: 'Selected work',
      descriptionLines: ['A glimpse of the story.', 'A closer look at its details.'],
      watchVideo: 'Watch video',
      noor: { title: 'NOOR', category: 'From the visual archive', imageAlt: 'An image from the official NOOR film poster', watchLabel: 'Watch the NOOR video', indexLabel: '01 / NOOR' },
      confex: { title: 'Saudi Film Confex', category: 'Elite Pro’s event participation', imageAlt: 'Attendees meeting at Saudi Film Confex', watchLabel: 'Watch the Saudi Film Confex video', indexLabel: '02 / SAUDI FILM CONFEX' },
    },
    about: {
      eyebrow: 'About Elite Pro',
      headingLead: 'An idea can go',
      headingLink: 'beyond',
      headingAccent: 'a single format.',
      description: 'We are a Saudi production and creative company based in Riyadh. We bring together film, design, campaigns, events, and interactive experiences, because every idea needs its own language and way to connect.',
      imageAlt: 'A meeting at the Elite Pro booth during an event',
      imageCaption: 'Conversations with Elite Pro',
      signatureLines: ['SAME SPIRIT.', 'A WIDER FRAME.'],
    },
    process: {
      eyebrow: 'From the first conversation to the final detail',
      headingLead: 'Clear steps.',
      headingAccent: 'Room to create.',
      descriptionLines: ['A shared direction,', 'with you part of the process.'],
    },
    processSteps: [
      { title: 'We hear your idea', description: 'We start with your goal, your audience, and what you want to say.' },
      { title: 'We set the direction', description: 'Together, we define the idea, deliverables, and scope.' },
      { title: 'We bring it to life', description: 'Production with clear points for review and conversation.' },
      { title: 'We complete the picture', description: 'We review the work and hand over the agreed deliverables.' },
    ],
    contact: {
      eyebrow: 'Contact Elite Pro',
      heading: 'It starts with your idea.',
      description: 'Tell us about your goal, the services you need, and your expected timeline.',
      projectLink: 'Tell us about your project',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      whatsappAriaLabel: 'Contact Elite Pro on WhatsApp — opens in a new tab',
      location: 'Riyadh, Saudi Arabia',
    },
    footer: {
      statementLines: ['Production & creativity', 'from Riyadh.'],
      tagline: 'ESTABLISH TO END.',
      navigationLabel: 'Explore Elite Pro',
      navigationAriaLabel: 'Footer navigation',
      socialLabel: 'Follow Elite Pro',
      socialAriaLabels: {
        instagram: 'Instagram — opens in a new tab',
        linkedin: 'LinkedIn — opens in a new tab',
        vimeo: 'Vimeo — opens in a new tab',
      },
      copyright: 'Elite Pro. All rights reserved.',
      location: 'Riyadh, Saudi Arabia',
    },
    menu: { heading: 'Explore Elite Pro', open: 'Open menu', close: 'Close menu', ariaLabel: 'Mobile navigation' },
    film: {
      close: 'Close video',
      playbackError: 'The video could not play. Try playing it again.',
      identity: { title: 'Same spirit. A new look.', subtitle: 'Elite Pro', description: 'The film introducing Elite Pro’s new identity.' },
      noor: { title: 'NOOR', subtitle: 'From the visual archive', description: 'Scenes from the NOOR video in the Elite Pro archive.' },
      confex: { title: 'Saudi Film Confex', subtitle: 'Elite Pro’s event participation', description: 'Footage from Elite Pro’s participation in Saudi Film Confex.' },
    },
    form: {
      eyebrow: 'Let’s start with the idea',
      close: 'Close project details',
      title: 'Tell us about your project',
      intro: 'Share a short project brief. We’ll prepare an email for you to review and send from your email app.',
      required: 'Required',
      optional: 'Optional',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        company: { label: 'Organization', placeholder: 'Company or organization name' },
        email: { label: 'Email', placeholder: 'name@example.com' },
        phone: { label: 'Phone', placeholder: '+966' },
        message: { label: 'Project brief', placeholder: 'Tell us about the project you have in mind…' },
      },
      servicesLabel: 'Services you need',
      servicesHelp: 'You can choose more than one service',
      unsure: 'I’d like help choosing a service',
      messageHelp: 'Include your goal and expected timeline, using at least 10 characters.',
      submit: 'Prepare email',
      sendNote: 'A draft addressed to Elite Pro will open. Review it and select “Send” in your email app.',
      preparing: 'Preparing your email…',
      ready: 'Your email is ready to review and send from your email app. If it did not open, use the link below.',
      preparationError: 'We could not prepare the email. Try again, or contact us directly by email.',
      openPreparedEmail: 'Open email draft',
      directEmailLabel: 'Elite Pro email',
    },
    validation: {
      nameRequired: 'Enter your name.',
      nameTooShort: 'Enter a name with at least 2 characters.',
      nameTooLong: 'Keep your name to 80 characters or fewer.',
      companyTooLong: 'Keep the organization name to 120 characters or fewer.',
      emailInvalid: 'Enter a valid email address, such as name@example.com.',
      emailTooLong: 'Keep the email address to 120 characters or fewer.',
      phoneTooLong: 'Keep the phone number to 30 characters or fewer.',
      messageRequired: 'Enter a short project brief.',
      messageTooShort: 'Enter a project brief with at least 10 characters.',
      messageTooLong: 'Keep the project brief to 1000 characters or fewer.',
      invalidForm: 'Review the highlighted fields to complete your email.',
    },
    intro: { ariaLabel: 'Elite Pro opening', skip: 'Skip intro', tagline: 'ESTABLISH TO END.' },
    mail: {
      subjectPrefix: 'Project enquiry',
      greeting: 'Hello Elite Pro team,',
      nameLabel: 'Name',
      companyLabel: 'Organization',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      servicesLabel: 'Services',
      unsure: 'I’d like help choosing a service',
      projectLabel: 'About the project',
      serviceSeparator: ', ',
    },
  },
};
