import { type FormEvent, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AlertCircle, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import {
  type BookingFormValues,
  type BookingSubmissionOutcome,
  type BookingValidationErrors,
  getAmmanTodayIso,
  submitAppointmentRequest,
  validateBookingForm,
} from '../utils/booking';

interface AppointmentSectionProps {
  locale: Locale;
  t: TranslationDictionary;
  preselectedServiceId: string;
}

export function AppointmentSection({
  locale,
  t,
  preselectedServiceId,
}: AppointmentSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const minDate = getAmmanTodayIso();

  const [values, setValues] = useState<BookingFormValues>({
    name: '',
    phone: '',
    service: preselectedServiceId || CLINIC_SERVICES[0].id,
    preferredDate: minDate,
    message: '',
  });
  const [errors, setErrors] = useState<BookingValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<BookingSubmissionOutcome | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setValues((prev) => ({ ...prev, service: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const selectedServiceObj =
    CLINIC_SERVICES.find((s) => s.id === values.service) ?? CLINIC_SERVICES[0];
  const selectedServiceLabel =
    locale === 'ar' ? selectedServiceObj.titleAr : selectedServiceObj.titleEn;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateBookingForm(values, locale, minDate);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined;
    const result = await submitAppointmentRequest(values, selectedServiceLabel, locale, endpoint);
    setIsSubmitting(false);
    setOutcome(result);
  };

  const whatsappDirectUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}`;

  return (
    <section id="book" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Contact Column */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
              {t.booking.kicker}
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-semibold text-[#141413] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.booking.title}
            </h2>
            <p className="text-base leading-[1.75] text-[#4A463F] mb-8">{t.booking.subtitle}</p>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-[#FAF8F4] border border-[#E2D9CB]">
                <h3 className="font-editorial text-xl font-semibold text-[#141413] mb-1.5">
                  {t.booking.direct.title}
                </h3>
                <p className="text-sm text-[#4A463F] mb-5">{t.booking.direct.subtitle}</p>

                <div className="space-y-3">
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="flex items-center justify-between gap-3 p-4 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE2D6] border border-[#E2D9CB] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#8A6B38] shrink-0" />
                      <div>
                        <p className="text-xs text-[#6B665E]">{t.booking.direct.phoneTitle}</p>
                        <p dir="ltr" className="text-sm font-semibold text-[#141413] tabular-nums">
                          {CLINIC_INFO.phoneDisplay}
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-4 rounded-lg bg-[#141413] text-[#FAF8F4] hover:bg-[#2A2825] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-[#D6B882] shrink-0" />
                      <div>
                        <p className="text-xs text-[#C7BFAF]">{t.booking.direct.whatsappHint}</p>
                        <p className="text-sm font-semibold">{t.booking.direct.whatsappTitle}</p>
                      </div>
                    </div>
                  </a>
                </div>

                <p className="mt-4 text-xs text-[#6B665E]">{t.booking.direct.hoursHint}</p>
              </div>
            </div>
          </div>

          {/* Booking Request Form Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#FAF8F4] border border-[#E2D9CB] rounded-xl p-6 sm:p-9"
          >
            {outcome ? (
              <div data-testid="booking-outcome" className="space-y-6 py-2">
                <div className="flex items-start gap-3.5">
                  {outcome.status === 'webhook_sent' ? (
                    <CheckCircle2 className="w-6 h-6 text-[#2E6B4E] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-[#8A6B38] shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#141413] mb-2">
                      {outcome.status === 'webhook_sent'
                        ? t.booking.outcomes.webhookTitle
                        : outcome.status === 'backend_unconfigured'
                          ? t.booking.outcomes.unconfiguredTitle
                          : t.booking.outcomes.errorTitle}
                    </h3>
                    <p className="text-sm sm:text-base leading-[1.75] text-[#4A463F]">
                      {outcome.status === 'webhook_sent'
                        ? t.booking.outcomes.webhookBody
                        : outcome.status === 'backend_unconfigured'
                          ? t.booking.outcomes.unconfiguredBody
                          : t.booking.outcomes.errorBody}
                    </p>
                    {outcome.status === 'webhook_sent' && (
                      <p className="mt-2 text-xs text-[#6B665E] tabular-nums">
                        {t.booking.outcomes.referenceLabel}: {outcome.referenceId}
                      </p>
                    )}
                  </div>
                </div>

                {/* Request Summary */}
                <div className="p-5 rounded-lg bg-[#F4EFE6] border border-[#E6DFD3] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-xs text-[#6B665E] mb-0.5">
                      {t.booking.form.nameLabel}
                    </span>
                    <span className="font-medium text-[#141413]">{values.name}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#6B665E] mb-0.5">
                      {t.booking.form.phoneLabel}
                    </span>
                    <span dir="ltr" className="font-medium text-[#141413] tabular-nums">
                      {values.phone}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#6B665E] mb-0.5">
                      {t.booking.form.serviceLabel}
                    </span>
                    <span className="font-medium text-[#141413]">{selectedServiceLabel}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#6B665E] mb-0.5">
                      {t.booking.form.dateLabel}
                    </span>
                    <span className="font-medium text-[#141413] tabular-nums">
                      {values.preferredDate}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {outcome.status !== 'webhook_sent' && (
                    <a
                      href={outcome.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 bg-[#141413] text-[#FAF8F4] hover:bg-[#2A2825] rounded-md text-sm font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D6B882]" />
                      <span>{t.booking.outcomes.sendViaWhatsApp}</span>
                    </a>
                  )}

                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 border border-[#D4C9B8] text-[#141413] hover:bg-[#F4EFE6] rounded-md text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#8A6B38]" />
                    <span>{t.booking.outcomes.callDirectly}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setOutcome(null)}
                    className="min-h-[44px] px-4 py-2 text-sm text-[#6B665E] hover:text-[#141413] underline underline-offset-4 cursor-pointer"
                  >
                    {t.booking.outcomes.editRequest}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-medium text-[#141413] mb-2"
                    >
                      {t.booking.form.nameLabel}
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={t.booking.form.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#D8CFC0] focus:border-[#141413] focus:outline-none rounded-md text-sm text-[#141413] placeholder:text-[#8E887E]"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9E2A2B]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-[#141413] mb-2"
                    >
                      {t.booking.form.phoneLabel}
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      required
                      value={values.phone}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder={t.booking.form.phonePlaceholder}
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#D8CFC0] focus:border-[#141413] focus:outline-none rounded-md text-sm text-[#141413] placeholder:text-[#8E887E] tabular-nums"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9E2A2B]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-sm font-medium text-[#141413] mb-2"
                    >
                      {t.booking.form.serviceLabel}
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      required
                      value={values.service}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, service: e.target.value }));
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                      }}
                      aria-invalid={Boolean(errors.service)}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#D8CFC0] focus:border-[#141413] focus:outline-none rounded-md text-sm text-[#141413]"
                    >
                      <option value="">{t.booking.form.servicePlaceholder}</option>
                      {CLINIC_SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {locale === 'ar' ? service.titleAr : service.titleEn}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9E2A2B]">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-medium text-[#141413] mb-2"
                    >
                      {t.booking.form.dateLabel}
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      required
                      min={minDate}
                      value={values.preferredDate}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, preferredDate: e.target.value }));
                        if (errors.preferredDate)
                          setErrors((prev) => ({ ...prev, preferredDate: undefined }));
                      }}
                      aria-invalid={Boolean(errors.preferredDate)}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-white border border-[#D8CFC0] focus:border-[#141413] focus:outline-none rounded-md text-sm text-[#141413] tabular-nums"
                    />
                    {errors.preferredDate && (
                      <p role="alert" className="mt-1.5 text-xs text-[#9E2A2B]">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-sm font-medium text-[#141413] mb-2"
                  >
                    {t.booking.form.messageLabel}
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder={t.booking.form.messagePlaceholder}
                    className="w-full px-4 py-3 bg-white border border-[#D8CFC0] focus:border-[#141413] focus:outline-none rounded-md text-sm text-[#141413] placeholder:text-[#8E887E]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[48px] w-full sm:w-auto px-8 py-3 bg-[#141413] text-[#FAF8F4] hover:bg-[#2A2825] disabled:opacity-60 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
                  >
                    {isSubmitting ? t.booking.form.submittingBtn : t.booking.form.submitBtn}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
