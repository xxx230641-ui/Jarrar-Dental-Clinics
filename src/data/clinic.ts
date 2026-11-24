export type Locale = 'ar' | 'en';

export interface ClinicHoursEntry {
  dayIndex: number; // 0 = Sunday ... 6 = Saturday
  dayKey: 'saturday' | 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  openHour: number | null; // 24h decimal (e.g. 9 = 09:00, 18 = 18:00)
  closeHour: number | null;
  hoursEn: string;
  hoursAr: string;
  isClosed: boolean;
}

export interface ClinicServiceItem {
  id: string;
  index: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  focusAr: string;
  focusEn: string;
}

export interface DoctorProfile {
  id: 'tareq' | 'amer';
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  bioEn: string;
  bioAr: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  altAr: string;
  altEn: string;
  captionAr: string;
  captionEn: string;
  categoryAr: string;
  categoryEn: string;
}

export const CLINIC_INFO = {
  brandNameEn: 'JARRAR DENTAL CLINICS',
  brandNameAr: 'عيادات جرار لطب الأسنان',
  shortBrandEn: 'Jarrar Dental',
  shortBrandAr: 'عيادات جرار',
  cityEn: 'Amman, Jordan',
  cityAr: 'عمّان، الأردن',
  addressEn: 'Fl 6, Adeeb Wahbeh St 29, Amman, Jordan',
  addressAr: 'الطابق السادس، شارع أديب وهبة ٢٩، عمّان، الأردن',
  phoneDisplay: '+962 7 8771 6666',
  phoneHref: 'tel:+962787716666',
  whatsappNumber: '962787716666',
  googleRating: 5.0,
  googleReviewCount: 432,
  googleMapsUrl:
    'https://maps.google.com/?cid=12374101919658041311&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Adeeb+Wahbeh+St+29,+Amman,+Jordan&output=embed',
  heroImage: '/src/assets/images/hero_dental_suite_1795530355422.jpg',
  aboutImage: '/src/assets/images/clinic_reception_clean_1795530372569.jpg',
} as const;

export const BUSINESS_HOURS: ClinicHoursEntry[] = [
  {
    dayIndex: 6,
    dayKey: 'saturday',
    openHour: 9,
    closeHour: 18,
    hoursEn: '9:00 AM – 6:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٦:٠٠ مساءً',
    isClosed: false,
  },
  {
    dayIndex: 0,
    dayKey: 'sunday',
    openHour: 9,
    closeHour: 18,
    hoursEn: '9:00 AM – 6:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٦:٠٠ مساءً',
    isClosed: false,
  },
  {
    dayIndex: 1,
    dayKey: 'monday',
    openHour: 9,
    closeHour: 18,
    hoursEn: '9:00 AM – 6:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٦:٠٠ مساءً',
    isClosed: false,
  },
  {
    dayIndex: 2,
    dayKey: 'tuesday',
    openHour: 9,
    closeHour: 18,
    hoursEn: '9:00 AM – 6:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٦:٠٠ مساءً',
    isClosed: false,
  },
  {
    dayIndex: 3,
    dayKey: 'wednesday',
    openHour: 9,
    closeHour: 18,
    hoursEn: '9:00 AM – 6:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٦:٠٠ مساءً',
    isClosed: false,
  },
  {
    dayIndex: 4,
    dayKey: 'thursday',
    openHour: 9,
    closeHour: 15,
    hoursEn: '9:00 AM – 3:00 PM',
    hoursAr: '٩:٠٠ صباحاً – ٣:٠٠ عصراً',
    isClosed: false,
  },
  {
    dayIndex: 5,
    dayKey: 'friday',
    openHour: null,
    closeHour: null,
    hoursEn: 'Closed',
    hoursAr: 'مغلق',
    isClosed: true,
  },
];

export const CLINIC_SERVICES: ClinicServiceItem[] = [
  {
    id: 'dental-implants',
    index: '01',
    titleEn: 'Dental Implants',
    titleAr: 'زراعة الأسنان',
    summaryEn:
      'Restorative implant planning focused on natural function, structural stability, and long-term comfort.',
    summaryAr:
      'رعاية متخصصة لتعويض الأسنان المفقودة مع التركيز على الاستقرار الوظيفي والمظهر الطبيعي المتناسق.',
    focusEn: 'Restorative Care · Subject to clinic confirmation',
    focusAr: 'قسم علاجي · قابل للتأكيد من العيادة',
  },
  {
    id: 'cosmetic-dentistry',
    index: '02',
    titleEn: 'Cosmetic Dentistry',
    titleAr: 'تجميل الأسنان',
    summaryEn:
      'Thoughtful aesthetic refinements tailored to facial balance, natural tooth proportions, and personal goals.',
    summaryAr:
      'عناية تجميلية مدروسة تراعي تناسق الملامح والانسجام الطبيعي للأسنان بما يناسب كل مريض.',
    focusEn: 'Aesthetic Care · Subject to clinic confirmation',
    focusAr: 'قسم تجميلي · قابل للتأكيد من العيادة',
  },
  {
    id: 'teeth-whitening',
    index: '03',
    titleEn: 'Teeth Whitening',
    titleAr: 'تبييض الأسنان',
    summaryEn:
      'Gentle shade brightening approaches planned around enamel sensitivity and natural-looking radiance.',
    summaryAr:
      'خيارات مدروسة لتفتيح لون الأسنان بعناية تحفظ صحة المينا وتمنح إشراقة طبيعية متوازنة.',
    focusEn: 'Brightening · Subject to clinic confirmation',
    focusAr: 'تفتيح الأسنان · قابل للتأكيد من العيادة',
  },
  {
    id: 'dental-veneers',
    index: '04',
    titleEn: 'Dental Veneers',
    titleAr: 'قشور الأسنان',
    summaryEn:
      'Custom-crafted porcelain or aesthetic restorations designed for subtle translucency and refined symmetry.',
    summaryAr:
      'قشور تجميلية مصممة بدقة لتحسين الشكل واللون والتناسق بأسلوب يحافظ على الطابع الطبيعي.',
    focusEn: 'Porcelain Craft · Subject to clinic confirmation',
    focusAr: 'القشور الخزفية · قابل للتأكيد من العيادة',
  },
  {
    id: 'smile-makeover',
    index: '05',
    titleEn: 'Smile Makeover',
    titleAr: 'تصميم الابتسامة',
    summaryEn:
      'Comprehensive multi-step treatment planning combining aesthetic harmony with healthy oral function.',
    summaryAr:
      'خطة علاجية متكاملة تجمع بين صحة الفم والأسنان والجانب الجمالي للوصول إلى ابتسامة متوازنة.',
    focusEn: 'Comprehensive Plan · Subject to clinic confirmation',
    focusAr: 'خطة شاملة · قابل للتأكيد من العيادة',
  },
  {
    id: 'general-dental-care',
    index: '06',
    titleEn: 'General Dental Care',
    titleAr: 'العناية العامة بالأسنان',
    summaryEn:
      'Thorough routine examinations, preventive checkups, and attentive ongoing care in a calm clinical setting.',
    summaryAr:
      'فحوصات دورية شاملة وعناية وقائية متواصلة في بيئة هادئة تهتم بأدق تفاصيل راحة المريض.',
    focusEn: 'Preventive Care · Subject to clinic confirmation',
    focusAr: 'رعاية وقائية · قابل للتأكيد من العيادة',
  },
];

export const CLINIC_DOCTORS: DoctorProfile[] = [
  {
    id: 'tareq',
    nameEn: 'Dr. Tareq Jarrar',
    nameAr: 'د. طارق جرار',
    roleEn: 'Dental Practitioner — Jarrar Dental Clinics',
    roleAr: 'طبيب أسنان — عيادات جرار لطب الأسنان',
    bioEn:
      'Dedicated to attentive patient communication, clinical precision, and calm, detail-oriented dental care in Amman. (Editable clinic biography — ready for official credentials and clinical focus.)',
    bioAr:
      'يحرص على تقديم رعاية طبية دقيقة تقوم على الإصغاء للمريض والاهتمام بالتفاصيل في بيئة علاجية هادئة ومريحة في عمّان. (نبذة قابلة للتعديل وإضافة السيرة الأكاديمية المعتمدة من إدارة العيادة.)',
    image: '/src/assets/images/doctor_tareq_portrait_clean_1795530372125.jpg',
  },
  {
    id: 'amer',
    nameEn: 'Dr. Amer Jarrar',
    nameAr: 'د. عامر جرار',
    roleEn: 'Dental Practitioner — Jarrar Dental Clinics',
    roleAr: 'طبيب أسنان — عيادات جرار لطب الأسنان',
    bioEn:
      'Focused on personalized treatment planning, patient comfort, and natural-looking dental outcomes tailored to every visit. (Editable clinic biography — ready for official credentials and clinical focus.)',
    bioAr:
      'يركّز على وضع خطط علاجية مخصصة توازن بين راحة المريض وجودة النتائج الطبيعية في كل زيارة. (نبذة قابلة للتعديل وإضافة السيرة الأكاديمية المعتمدة من إدارة العيادة.)',
    image: '/src/assets/images/doctor_amer_portrait_1795530356451.jpg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'suite',
    src: '/src/assets/images/hero_dental_suite_1795530355422.jpg',
    altAr: 'جناح العلاج الرئيسي بتصميم هادئ وإضاءة طبيعية في عيادات جرار',
    altEn: 'Primary dental treatment suite with travertine finishes and natural daylight',
    captionAr: 'جناح العلاج الرئيسي — تصميم معماري هادئ لراحة المريض',
    captionEn: 'Primary Treatment Suite — Designed for calm patient comfort',
    categoryAr: 'غرفة العلاج',
    categoryEn: 'Treatment Suite',
  },
  {
    id: 'reception',
    src: '/src/assets/images/clinic_reception_clean_1795530372569.jpg',
    altAr: 'صالة الاستقبال والانتظار في عيادات جرار لطب الأسنان',
    altEn: 'Clinic reception desk and warm patient lounge interior',
    captionAr: 'منطقة الاستقبال — ضيافة هادئة من اللحظة الأولى',
    captionEn: 'Reception Lounge — Quiet hospitality from the first moment',
    categoryAr: 'الاستقبال',
    categoryEn: 'Reception',
  },
  {
    id: 'diagnostics',
    src: '/src/assets/images/clinic_digital_diagnostics_1795530357684.jpg',
    altAr: 'وحدة علاجية مزودة بتقنيات المسح والتشخيص الرقمي',
    altEn: 'Digital diagnostics and modern dental care suite',
    captionAr: 'وحدة التشخيص الرقمي — دقة الفحص والتخطيط العلاجي',
    captionEn: 'Digital Diagnostics Room — Precision assessment and planning',
    categoryAr: 'التجهيزات الحديثة',
    categoryEn: 'Clinical Equipment',
  },
  {
    id: 'consultation',
    src: '/src/assets/images/clinic_consultation_atelier_1795530357583.jpg',
    altAr: 'غرفة الاستشارات الخاصة لمناقشة الخطة العلاجية',
    altEn: 'Private consultation room for treatment planning discussions',
    captionAr: 'غرفة الاستشارات الخاصة — نقاش هادئ لخطة الابتسامة',
    captionEn: 'Private Consultation Room — Thoughtful treatment discussions',
    categoryAr: 'الاستشارة',
    categoryEn: 'Consultation',
  },
];
