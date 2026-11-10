export const services = [
  { id: 'film', image: '/media/services/film.webp', imageAlt: 'كاميرا سينمائية من لقطات إيليت برو', number: '01', title: 'الأفلام والمحتوى المرئي', en: 'Film & visual content', icon: 'film', description: 'تصوير وإنتاج أفلام ومحتوى مرئي، مع المونتاج والموشن جرافيك.', tags: ['أفلام', 'مونتاج', 'موشن جرافيك', 'تصوير'] },
  { id: 'campaigns', image: '/media/services/campaigns-production-1200.webp', imageSmall: '/media/services/campaigns-production-640.webp', imageAlt: 'تصور توضيحي لمراجعة صورة حملة عبر نسخ مطبوعة وشاشة', number: '02', title: 'الحملات الإعلامية', en: 'Media campaigns', icon: 'campaign', description: 'تطوير فكرة الحملة ورسائلها، وصناعة المحتوى الذي يقدّمها للجمهور.', tags: ['الفكرة الإبداعية', 'الرسائل', 'محتوى الحملة'] },
  { id: 'events', image: '/media/services/events.webp', imageAlt: 'حضور وقاعة عرض في منتدى الأفلام السعودي', number: '03', title: 'الفعاليات والمؤتمرات', en: 'Events & conferences', icon: 'event', description: 'تنظيم الفعاليات والمؤتمرات، والإنتاج والتغطية المرئية المصاحبة لها.', tags: ['فعاليات', 'مؤتمرات', 'تغطية مرئية'] },
  { id: 'identity', image: '/media/services/identity.webp', imageAlt: 'بطاقة تحمل هوية إيليت برو', number: '04', title: 'الهوية والتصميم', en: 'Brand identity & design', icon: 'identity', description: 'تصميم الهوية البصرية وتطبيقاتها، ومحتوى يحافظ على حضور العلامة.', tags: ['هوية بصرية', 'تصميم', 'تطبيقات العلامة'] },
  { id: 'interactive', image: '/media/services/interactive-production-1200.webp', imageSmall: '/media/services/interactive-production-640.webp', imageAlt: 'تصور توضيحي لمشارك تلتقي يده باستجابة ضوئية على جدار إسقاط', number: '05', title: 'التجارب التفاعلية', en: 'Interactive experiences', icon: 'interactive', description: 'تصميم تجارب تدعو الجمهور إلى المشاركة والتفاعل مع الفكرة.', tags: ['تجربة الجمهور', 'تفاعل', 'مشاركة'] },
  { id: 'ai', image: '/media/services/ai-production-1200.webp', imageSmall: '/media/services/ai-production-640.webp', imageAlt: 'تصور توضيحي لفنان يراجع بدائل صورة مستوحاة من مجسم طيني', number: '06', title: 'الإنتاج بالذكاء الاصطناعي', en: 'AI-powered production', icon: 'ai', description: 'إنتاج محتوى بصري باستخدام أدوات الذكاء الاصطناعي، بإشراف إبداعي ومراجعة للمخرجات.', tags: ['إنتاج بصري', 'أدوات الذكاء الاصطناعي', 'رؤية إبداعية'] },
] as const;

export const films = {
  identity: { title: 'نفس الروح. بلبس جديد.', subtitle: 'إيليت برو', source: '/media/identity.mp4', poster: '/media/identity-poster.webp', portrait: true },
  noor: { title: 'نور', subtitle: 'من الأرشيف المرئي', source: '/media/noor.mp4', poster: '/media/noor-poster.webp', portrait: false },
  confex: { title: 'منتدى الأفلام السعودي', subtitle: 'من مشاركات إيليت برو', source: '/media/confex.mp4', poster: '/media/confex-poster.webp', portrait: false },
} as const;

export const processSteps = [
  { number: '01', title: 'نسمع فكرتك', description: 'نبدأ بالهدف، والجمهور، وما تريد أن يصل إليهم.' },
  { number: '02', title: 'نرسم الاتجاه', description: 'نحدّد الفكرة والمخرجات ونطاق العمل معك.' },
  { number: '03', title: 'نصنع التفاصيل', description: 'تنفيذ تتخلله نقاط واضحة للمراجعة والنقاش.' },
  { number: '04', title: 'نُكمل المشهد', description: 'نراجع العمل ونسلّم المخرجات المتفق عليها.' },
] as const;
