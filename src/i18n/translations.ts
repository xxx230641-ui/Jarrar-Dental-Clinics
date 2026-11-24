import type { Locale } from '../data/clinic';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    doctors: string;
    reviews: string;
    contact: string;
    book: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    locationLine: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    phoneCta: string;
    googleRatingLabel: string;
    googleReviewsSuffix: string;
    verifiedOnGoogle: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    body: string;
    doctorsLabel: string;
    doctorsNames: string;
    locationLabel: string;
    editableNote: string;
  };
  whyUs: {
    kicker: string;
    title: string;
    subtitle: string;
    statRatingLabel: string;
    statReviewsLabel: string;
    statDaysLabel: string;
    pillars: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    menuNotice: string;
    bookServiceCta: string;
  };
  doctors: {
    kicker: string;
    title: string;
    subtitle: string;
    bookWithClinic: string;
    placeholderNote: string;
  };
  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    ratingOutOf: string;
    basedOn: string;
    reviewsUnit: string;
    viewOnGoogle: string;
    authenticityNote: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    placeholderNote: string;
    zoomLabel: string;
    closeLightbox: string;
    prevImage: string;
    nextImage: string;
  };
  booking: {
    kicker: string;
    title: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      dateLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
    };
    outcomes: {
      webhookTitle: string;
      webhookBody: string;
      referenceLabel: string;
      unconfiguredTitle: string;
      unconfiguredBody: string;
      errorTitle: string;
      errorBody: string;
      sendViaWhatsApp: string;
      callDirectly: string;
      editRequest: string;
    };
    direct: {
      title: string;
      subtitle: string;
      phoneTitle: string;
      whatsappTitle: string;
      whatsappHint: string;
      hoursHint: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    addressLabel: string;
    hoursLabel: string;
    statusOpen: string;
    statusClosed: string;
    directionsCta: string;
    callNowCta: string;
    mapTitle: string;
    days: {
      saturday: string;
      sunday: string;
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
    };
  };
  footer: {
    navigationTitle: string;
    contactTitle: string;
    hoursTitle: string;
    socialNote: string;
    copyright: string;
    doctorsCredit: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      doctors: 'أطباؤنا',
      reviews: 'آراء المرضى',
      contact: 'تواصل معنا',
      book: 'احجز موعداً',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
    },
    hero: {
      locationLine: 'عمّان، الأردن · شارع أديب وهبة ٢٩',
      headline: 'ابتسامتك تستحق عناية استثنائية',
      subtitle:
        'في عيادات جرار لطب الأسنان، نحرص على تقديم رعاية متخصصة تجمع بين الخبرة والاهتمام بالتفاصيل، لنساعدك على الحصول على ابتسامة صحية وواثقة.',
      primaryCta: 'احجز موعداً الآن',
      phoneCta: 'اتصل بالعيادة',
      googleRatingLabel: 'تقييم Google',
      googleReviewsSuffix: 'تقييم من المرضى',
      verifiedOnGoogle: 'عرض التقييمات على Google Maps',
    },
    about: {
      kicker: 'عن العيادة',
      title: 'رعاية هادئة، دقيقة، ومصممة لراحتك في قلب عمّان',
      lead: 'عيادات جرار لطب الأسنان — بإشراف د. طارق جرار ود. عامر جرار',
      body: 'نؤمن في عيادات جرار لطب الأسنان بأن زيارة طبيب الأسنان ينبغي أن تكون تجربة مطمئنة وواضحة من اللحظة الأولى. يجمع فريقنا بين العناية الدقيقة بصحة الفم والأسنان والاهتمام بالتفاصيل الجمالية في أجواء هادئة تضع راحة المريض وخصوصيته في المقام الأول.',
      doctorsLabel: 'أطباء العيادة',
      doctorsNames: 'د. طارق جرار ود. عامر جرار',
      locationLabel: 'موقع العيادة',
      editableNote: 'نص تعريفي قابل للتخصيص والتعديل من إدارة العيادة.',
    },
    whyUs: {
      kicker: 'نهجنا في الرعاية',
      title: 'لماذا يختار المرضى عيادات جرار؟',
      subtitle:
        'نرتكز على التواصل الصادق، والتقييم السريري المتأني، واحترام وقت المريض وراحته في كل موعد.',
      statRatingLabel: 'تقييم عام على Google',
      statReviewsLabel: 'مراجعة موثقة على Google',
      statDaysLabel: 'أيام استقبال أسبوعياً',
      pillars: [
        {
          index: '٠١',
          title: 'تخطيط علاجي واضح ومخصص',
          description:
            'نشرح لك خيارات العلاج وخطواتها بوضوح قبل البدء، لتتخذ قرارك بثقة واطمئنان.',
        },
        {
          index: '٠٢',
          title: 'اهتمام بأدق التفاصيل الجمالية',
          description:
            'نراعي التوازن الطبيعي بين صحة الأسنان وتناسق الابتسامة دون مبالغة أو تسرّع.',
        },
        {
          index: '٠٣',
          title: 'بيئة عيادة هادئة ومريحة',
          description:
            'مساحات علاجية مصممة لتخفيف التوتر ومنحك تجربة زيارة منظمة ومحترمة لوقتك.',
        },
        {
          index: '٠٤',
          title: 'ثقة مرضانا في عمّان',
          description:
            'نعتز بتقييم ٥.٠ من أصل ٥ على Google عبر ٤٣٢ مراجعة من مراجعي العيادة.',
        },
      ],
    },
    services: {
      kicker: 'الخدمات العلاجية والتجميلية',
      title: 'عناية متكاملة بصحة وجمال ابتسامتك',
      subtitle:
        'تغطي عيادات جرار مجالات طب الأسنان التجميلي والتعويضي والوقائي وفق خطط تقييم فردية لكل حالة.',
      menuNotice:
        'الأقسام التالية قابلة للتأكيد والتخصيص والتعديل مباشرة من إدارة العيادة قبل النشر النهائي.',
      bookServiceCta: 'طلب استشارة لهذه الخدمة',
    },
    doctors: {
      kicker: 'الفريق الطبي',
      title: 'أطباؤنا',
      subtitle:
        'إشراف مباشر من د. طارق جرار ود. عامر جرار لمتابعة خطتك العلاجية من الاستشارة الأولى وحتى الاطمئنان الكامل.',
      bookWithClinic: 'احجز استشارة',
      placeholderNote:
        'الصور المعروضة حالياً صور مؤقتة احترافية وجاهزة للاستبدال بصور الطبيبين الحقيقية.',
    },
    reviews: {
      kicker: 'ثقة المرضى',
      title: 'تقييمات مرضانا على Google',
      subtitle:
        'نلتزم بعرض التقييم الفعلي الموثق لعيادات جرار على خرائط Google دون إضافة أي اقتباسات غير موثقة. يمكنك تصفح كافة آراء المرضى مباشرة عبر ملف العيادة الرسمي.',
      ratingOutOf: 'من ٥.٠',
      basedOn: 'بناءً على',
      reviewsUnit: 'مراجعة على Google',
      viewOnGoogle: 'عرض تقييمات Google',
      authenticityNote: 'رابط مباشر إلى صفحة العيادة الرسمية على خرائط Google',
    },
    gallery: {
      kicker: 'مساحات العيادة',
      title: 'جولة داخل عيادات جرار',
      subtitle:
        'أجواء هادئة ومساحات علاجية مجهزة بعناية لتجربة مريحة من الاستقبال حتى غرفة العلاج.',
      placeholderNote: 'صور معمارية مؤقتة عالية الدقة قابلة للاستبدال بصور العيادة الفعلية.',
      zoomLabel: 'تكبير الصورة',
      closeLightbox: 'إغلاق المعرض',
      prevImage: 'الصورة السابقة',
      nextImage: 'الصورة التالية',
    },
    booking: {
      kicker: 'حجز المواعيد',
      title: 'احجز موعدك أو اطلب استشارة',
      subtitle:
        'أدخل بياناتك وتفاصيل الخدمة المطلوبة، كما يمكنك التواصل معنا مباشرة عبر الهاتف أو واتساب خلال ساعات الدوام.',
      form: {
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'مثال: أحمد العبدالله',
        phoneLabel: 'رقم الهاتف',
        phonePlaceholder: '+962 7X XXX XXXX',
        serviceLabel: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر الخدمة المطلوبة',
        dateLabel: 'التاريخ المفضل',
        messageLabel: 'ملاحظات إضافية (اختياري)',
        messagePlaceholder: 'اذكر أي استفسار أو وقت مفضل للاتصال...',
        submitBtn: 'إرسال طلب الموعد',
        submittingBtn: 'جاري الإرسال...',
      },
      outcomes: {
        webhookTitle: 'تم إرسال طلب الموعد إلى نظام العيادة',
        webhookBody: 'سيتواصل معك فريق الاستقبال لتأكيد الوقت المناسب.',
        referenceLabel: 'رقم المرجع',
        unconfiguredTitle: 'تم التحقق من بيانات الطلب — جاهز للإرسال المباشر',
        unconfiguredBody:
          'ملاحظة شفافة: لم يتم ربط خادم حجز خلفي للعيادة بعد في هذه النسخة، لذلك لم يُرسل الطلب تلقائياً. يمكنك إرسال طلبك المنسق مباشرة عبر واتساب العيادة أو الاتصال بنا لتأكيد الموعد فوراً.',
        errorTitle: 'تعذر الإرسال عبر الخادم في الوقت الحالي',
        errorBody:
          'يرجى إرسال طلبك مباشرة عبر واتساب العيادة أو الاتصال الهاتفي لضمان استلام موعدك فوراً.',
        sendViaWhatsApp: 'إرسال الطلب عبر واتساب الآن',
        callDirectly: 'اتصال مباشر بالعيادة',
        editRequest: 'تعديل البيانات',
      },
      direct: {
        title: 'تواصل مباشر وسريع',
        subtitle:
          'يفضّل فريق الاستقبال مساعدتك فوراً لتنسيق الموعد الأنسب لك خلال أوقات عمل العيادة.',
        phoneTitle: 'الاتصال الهاتفي المباشر',
        whatsappTitle: 'مراسلة عبر WhatsApp',
        whatsappHint: 'رد سريع وتنسيق مباشر للمواعيد',
        hoursHint: 'السبت – الأربعاء: ٩:٠٠ ص – ٦:٠٠ م · الخميس: ٩:٠٠ ص – ٣:٠٠ م',
      },
    },
    contact: {
      kicker: 'الموقع وساعات العمل',
      title: 'تواصل معنا وزُرنا في عمّان',
      subtitle:
        'تقع عيادات جرار لطب الأسنان في الطابق السادس، شارع أديب وهبة ٢٩، عمّان، الأردن.',
      phoneLabel: 'رقم الهاتف',
      addressLabel: 'العنوان الكامل',
      hoursLabel: 'ساعات العمل',
      statusOpen: 'العيادة مفتوحة الآن (بتوقيت عمّان)',
      statusClosed: 'العيادة مغلقة حالياً (بتوقيت عمّان)',
      directionsCta: 'فتح الاتجاهات على Google Maps',
      callNowCta: 'اتصال مباشر',
      mapTitle: 'موقع عيادات جرار لطب الأسنان على الخريطة',
      days: {
        saturday: 'السبت',
        sunday: 'الأحد',
        monday: 'الإثنين',
        tuesday: 'الثلاثاء',
        wednesday: 'الأربعاء',
        thursday: 'الخميس',
        friday: 'الجمعة',
      },
    },
    footer: {
      navigationTitle: 'أقسام الموقع',
      contactTitle: 'بيانات التواصل',
      hoursTitle: 'أوقات الدوام',
      socialNote: 'تتوفر روابط الحسابات الرسمية للعيادة لإضافتها فور اعتمادها.',
      copyright: 'جميع الحقوق محفوظة — عيادات جرار لطب الأسنان',
      doctorsCredit: 'د. طارق جرار · د. عامر جرار',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      doctors: 'Doctors',
      reviews: 'Reviews',
      contact: 'Contact',
      book: 'Book Visit',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      locationLine: 'Amman, Jordan · Fl 6, Adeeb Wahbeh St 29',
      headline: 'Your Smile Deserves Exceptional Care',
      subtitle:
        'At Jarrar Dental Clinics, we combine attentive clinical expertise with meticulous detail to help you achieve a healthy, confident, and natural smile.',
      primaryCta: 'Book Appointment',
      phoneCta: 'Call Clinic',
      googleRatingLabel: 'Google Rating',
      googleReviewsSuffix: 'Patient Reviews',
      verifiedOnGoogle: 'View on Google Maps',
    },
    about: {
      kicker: 'About The Clinic',
      title: 'Calm, meticulous dental care in the heart of Amman',
      lead: 'Jarrar Dental Clinics — Dr. Tareq Jarrar & Dr. Amer Jarrar',
      body: 'At Jarrar Dental Clinics, we believe every dental visit should feel composed, transparent, and unhurried. Our practice brings together attentive clinical care and refined aesthetic judgment within an architectural setting designed around your comfort and privacy.',
      doctorsLabel: 'Clinic Doctors',
      doctorsNames: 'Dr. Tareq Jarrar & Dr. Amer Jarrar',
      locationLabel: 'Address',
      editableNote: 'Clinic overview copy ready for customization by clinic management.',
    },
    whyUs: {
      kicker: 'Our Approach',
      title: 'Why Patients Choose Jarrar Dental Clinics',
      subtitle:
        'Grounded in honest communication, thoughtful clinical assessment, and unhurried respect for every patient.',
      statRatingLabel: 'Google Rating',
      statReviewsLabel: 'Verified Google Reviews',
      statDaysLabel: 'Days Open Weekly',
      pillars: [
        {
          index: '01',
          title: 'Clear, Individualized Planning',
          description:
            'Every recommendation and stage of care is explained transparently before treatment begins.',
        },
        {
          index: '02',
          title: 'Respect for Natural Aesthetics',
          description:
            'We focus on balanced proportions, healthy function, and results that feel genuinely natural.',
        },
        {
          index: '03',
          title: 'Composed Clinical Setting',
          description:
            'A calm, quiet environment thoughtfully arranged to ease dental anxiety and respect your schedule.',
        },
        {
          index: '04',
          title: 'Trusted Across Amman',
          description:
            'Proudly holding a 5.0 out of 5 rating across 432 verified reviews on Google.',
        },
      ],
    },
    services: {
      kicker: 'Clinical & Aesthetic Care',
      title: 'Comprehensive Care for Healthy, Balanced Smiles',
      subtitle:
        'Explore our core restorative, cosmetic, and preventive care areas tailored around individual consultations.',
      menuNotice:
        'Service categories below are structured for clinic management review and confirmation.',
      bookServiceCta: 'Request Consultation',
    },
    doctors: {
      kicker: 'Medical Leadership',
      title: 'Our Doctors',
      subtitle:
        'Dedicated care led by Dr. Tareq Jarrar and Dr. Amer Jarrar from your initial consultation through ongoing follow-up.',
      bookWithClinic: 'Schedule Consultation',
      placeholderNote:
        'Current editorial portraits serve as temporary placeholders ready to be replaced with official photographs of Dr. Tareq and Dr. Amer.',
    },
    reviews: {
      kicker: 'Patient Trust',
      title: 'Verified Google Rating & Reviews',
      subtitle:
        'We present only our verified rating on Google Maps without fabricated quotes. Read authentic patient feedback directly on our official Google listing.',
      ratingOutOf: 'out of 5.0',
      basedOn: 'Based on',
      reviewsUnit: 'Google Reviews',
      viewOnGoogle: 'View Google Reviews',
      authenticityNote: 'Opens official Jarrar Dental Clinics profile on Google Maps',
    },
    gallery: {
      kicker: 'The Clinic Space',
      title: 'Inside Jarrar Dental Clinics',
      subtitle:
        'Architectural warmth, serene private suites, and modern clinical technology in Amman.',
      placeholderNote:
        'High-resolution architectural placeholders ready for replacement with official clinic photography.',
      zoomLabel: 'Expand view',
      closeLightbox: 'Close gallery',
      prevImage: 'Previous image',
      nextImage: 'Next image',
    },
    booking: {
      kicker: 'Appointments',
      title: 'Request an Appointment',
      subtitle:
        'Share your preferred service and date below, or connect directly with our reception desk by phone or WhatsApp.',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'e.g. Kareem Mansour',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+962 7X XXX XXXX',
        serviceLabel: 'Requested Service',
        servicePlaceholder: 'Select a service',
        dateLabel: 'Preferred Date',
        messageLabel: 'Optional Notes',
        messagePlaceholder: 'Share preferred time of day or any questions...',
        submitBtn: 'Submit Request',
        submittingBtn: 'Sending...',
      },
      outcomes: {
        webhookTitle: 'Appointment Request Sent',
        webhookBody: 'Our reception team will contact you shortly to confirm your slot.',
        referenceLabel: 'Reference',
        unconfiguredTitle: 'Request Validated — Ready for Direct Dispatch',
        unconfiguredBody:
          'Transparency notice: No automated backend booking server is connected in this preview yet, so your request was not transmitted automatically. Send your pre-filled details via WhatsApp or call us directly to confirm immediately.',
        errorTitle: 'Could Not Reach Booking Server',
        errorBody:
          'Please send your pre-filled request directly via WhatsApp or call our reception desk to confirm your appointment.',
        sendViaWhatsApp: 'Send via WhatsApp Now',
        callDirectly: 'Call Clinic Directly',
        editRequest: 'Edit Details',
      },
      direct: {
        title: 'Direct Reception Desk',
        subtitle:
          'Prefer immediate confirmation? Speak directly with our reception team during clinic hours.',
        phoneTitle: 'Direct Phone Line',
        whatsappTitle: 'Message on WhatsApp',
        whatsappHint: 'Fast scheduling & inquiries',
        hoursHint: 'Sat – Wed: 9:00 AM – 6:00 PM · Thu: 9:00 AM – 3:00 PM',
      },
    },
    contact: {
      kicker: 'Location & Hours',
      title: 'Visit Us in Amman',
      subtitle: 'Fl 6, Adeeb Wahbeh St 29, Amman, Jordan.',
      phoneLabel: 'Phone',
      addressLabel: 'Clinic Address',
      hoursLabel: 'Business Hours',
      statusOpen: 'Open Now (Amman Time)',
      statusClosed: 'Currently Closed (Amman Time)',
      directionsCta: 'Open in Google Maps',
      callNowCta: 'Call Clinic',
      mapTitle: 'Jarrar Dental Clinics Location Map',
      days: {
        saturday: 'Saturday',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
      },
    },
    footer: {
      navigationTitle: 'Navigation',
      contactTitle: 'Contact',
      hoursTitle: 'Hours',
      socialNote: 'Official social profiles can be linked here once provided by clinic management.',
      copyright: 'All rights reserved — Jarrar Dental Clinics',
      doctorsCredit: 'Dr. Tareq Jarrar · Dr. Amer Jarrar',
    },
  },
};
