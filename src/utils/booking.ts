import { BUSINESS_HOURS, CLINIC_INFO, type Locale } from '../data/clinic';

export interface BookingFormValues {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
}

export type BookingFieldErrorKey = 'name' | 'phone' | 'service' | 'preferredDate';

export type BookingValidationErrors = Partial<Record<BookingFieldErrorKey, string>>;

export interface ClinicOpenStatus {
  isOpen: boolean;
  dayKey: string;
  todayHoursAr: string;
  todayHoursEn: string;
}

export type BookingSubmissionOutcome =
  | {
      status: 'webhook_sent';
      referenceId: string;
    }
  | {
      status: 'backend_unconfigured';
      whatsappUrl: string;
    }
  | {
      status: 'network_error';
      whatsappUrl: string;
      errorMessage: string;
    };

export function normalizeDigits(value: string): string {
  const arabicIndic = '٠١٢٣٤٥٦٧٨٩';
  const easternArabic = '۰۱۲۳۴۵۶۷۸۹';
  return value
    .replace(/[٠-٩]/g, (d) => String(arabicIndic.indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String(easternArabic.indexOf(d)));
}

export function validateBookingForm(
  values: BookingFormValues,
  locale: Locale,
  todayIso: string = getAmmanTodayIso()
): BookingValidationErrors {
  const errors: BookingValidationErrors = {};
  const trimmedName = values.name.trim();
  const normalizedPhone = normalizeDigits(values.phone).replace(/[\s\-().]/g, '');
  const phoneDigitsOnly = normalizedPhone.replace(/^\+/, '');

  if (trimmedName.length < 2) {
    errors.name =
      locale === 'ar'
        ? 'يرجى إدخال الاسم الكامل (حرفان على الأقل).'
        : 'Please enter your full name (at least 2 characters).';
  }

  if (!/^\d{8,15}$/.test(phoneDigitsOnly)) {
    errors.phone =
      locale === 'ar'
        ? 'يرجى إدخال رقم هاتف صحيح للتواصل (8 إلى 15 رقماً).'
        : 'Please enter a valid contact phone number (8 to 15 digits).';
  }

  if (!values.service.trim()) {
    errors.service =
      locale === 'ar' ? 'يرجى اختيار الخدمة المطلوبة.' : 'Please select the requested service.';
  }

  if (!values.preferredDate.trim()) {
    errors.preferredDate =
      locale === 'ar' ? 'يرجى تحديد التاريخ المفضل.' : 'Please choose a preferred date.';
  } else if (values.preferredDate < todayIso) {
    errors.preferredDate =
      locale === 'ar'
        ? 'يرجى اختيار تاريخ اليوم أو تاريخ قادم.'
        : 'Please select today or an upcoming date.';
  }

  return errors;
}

export function buildWhatsAppBookingUrl(
  values: BookingFormValues,
  serviceLabel: string,
  locale: Locale
): string {
  const cleanName = values.name.trim();
  const cleanPhone = values.phone.trim();
  const cleanMsg = values.message.trim();

  const lines =
    locale === 'ar'
      ? [
          'مرحباً عيادات جرار لطب الأسنان، أرغب بطلب حجز موعد:',
          `• الاسم: ${cleanName}`,
          `• رقم الهاتف: ${cleanPhone}`,
          `• الخدمة المطلوبة: ${serviceLabel}`,
          `• التاريخ المفضل: ${values.preferredDate}`,
          ...(cleanMsg ? [`• ملاحظات: ${cleanMsg}`] : []),
        ]
      : [
          'Hello Jarrar Dental Clinics, I would like to request an appointment:',
          `• Name: ${cleanName}`,
          `• Phone: ${cleanPhone}`,
          `• Service: ${serviceLabel}`,
          `• Preferred Date: ${values.preferredDate}`,
          ...(cleanMsg ? [`• Notes: ${cleanMsg}`] : []),
        ];

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedText}`;
}

export async function submitAppointmentRequest(
  values: BookingFormValues,
  serviceLabel: string,
  locale: Locale,
  endpointUrl?: string
): Promise<BookingSubmissionOutcome> {
  const whatsappUrl = buildWhatsAppBookingUrl(values, serviceLabel, locale);

  if (!endpointUrl || !endpointUrl.trim()) {
    return {
      status: 'backend_unconfigured',
      whatsappUrl,
    };
  }

  try {
    const response = await fetch(endpointUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clinic: CLINIC_INFO.brandNameEn,
        locale,
        name: values.name.trim(),
        phone: normalizeDigits(values.phone).trim(),
        serviceId: values.service,
        serviceLabel,
        preferredDate: values.preferredDate,
        message: values.message.trim(),
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return {
        status: 'network_error',
        whatsappUrl,
        errorMessage: `HTTP ${response.status}`,
      };
    }

    let referenceId = `JDC-${Date.now().toString(36).toUpperCase()}`;
    try {
      const payload = (await response.json()) as { referenceId?: string };
      if (payload?.referenceId) {
        referenceId = payload.referenceId;
      }
    } catch {
      // Endpoint returned 2xx without JSON body
    }

    return {
      status: 'webhook_sent',
      referenceId,
    };
  } catch (err) {
    return {
      status: 'network_error',
      whatsappUrl,
      errorMessage: err instanceof Error ? err.message : 'Network failure',
    };
  }
}

export function getAmmanTodayIso(now: Date = new Date()): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Amman',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(now);
}

export function getClinicOpenStatus(now: Date = new Date()): ClinicOpenStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Amman',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === 'weekday')?.value.toLowerCase() ?? 'saturday';
  const hourNum = Number(parts.find((p) => p.type === 'hour')?.value ?? '0');
  const minuteNum = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');
  const decimalHour = hourNum + minuteNum / 60;

  const entry =
    BUSINESS_HOURS.find((item) => item.dayKey === weekday) ?? BUSINESS_HOURS[0];

  const isOpen =
    !entry.isClosed &&
    entry.openHour !== null &&
    entry.closeHour !== null &&
    decimalHour >= entry.openHour &&
    decimalHour < entry.closeHour;

  return {
    isOpen,
    dayKey: entry.dayKey,
    todayHoursAr: entry.hoursAr,
    todayHoursEn: entry.hoursEn,
  };
}
