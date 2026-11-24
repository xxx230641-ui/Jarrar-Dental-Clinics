import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { BUSINESS_HOURS, CLINIC_INFO, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import { getClinicOpenStatus } from '../utils/booking';

interface ContactSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function ContactSection({ locale, t }: ContactSectionProps) {
  const status = getClinicOpenStatus();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F4] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
            {t.contact.kicker}
          </p>
          <h2
            className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-semibold text-[#141413] mb-4"
            style={{ textWrap: 'balance' }}
          >
            {t.contact.title}
          </h2>
          <p className="text-base leading-[1.75] text-[#4A463F]">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Contact Details + Business Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-xl bg-[#F4EFE6] border border-[#E2D9CB]">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B665E] mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#8A6B38]" />
                  <span>{t.contact.phoneLabel}</span>
                </div>
                <a
                  href={CLINIC_INFO.phoneHref}
                  dir="ltr"
                  className="inline-block text-xl font-semibold text-[#141413] hover:text-[#8A6B38] transition-colors tabular-nums"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B665E] mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A6B38]" />
                  <span>{t.contact.addressLabel}</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-[#141413]">
                  {locale === 'ar' ? CLINIC_INFO.addressAr : CLINIC_INFO.addressEn}
                </p>
              </div>

              <div className="pt-5 border-t border-[#E2D9CB]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#141413]">
                    <Clock className="w-3.5 h-3.5 text-[#8A6B38]" />
                    <span>{t.contact.hoursLabel}</span>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      status.isOpen ? 'text-[#2E6B4E]' : 'text-[#6B665E]'
                    }`}
                  >
                    {status.isOpen ? t.contact.statusOpen : t.contact.statusClosed}
                  </span>
                </div>

                <dl className="space-y-2.5 text-sm">
                  {BUSINESS_HOURS.map((entry) => {
                    const isToday = entry.dayKey === status.dayKey;
                    const dayName = t.contact.days[entry.dayKey];
                    const hoursText = locale === 'ar' ? entry.hoursAr : entry.hoursEn;

                    return (
                      <div
                        key={entry.dayKey}
                        className={`flex items-center justify-between gap-4 py-1 border-b border-[#E6DFD3]/70 last:border-b-0 ${
                          isToday ? 'font-semibold text-[#141413]' : 'text-[#4A463F]'
                        }`}
                      >
                        <dt>{dayName}</dt>
                        <dd className="tabular-nums text-end">{hoursText}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E2D9CB]">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 bg-[#141413] text-[#FAF8F4] hover:bg-[#2A2825] rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span>{t.contact.directionsCta}</span>
                <ExternalLink className="w-4 h-4 text-[#D6B882]" />
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 border border-[#D4C9B8] text-[#141413] hover:bg-[#FAF8F4] rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#8A6B38]" />
                <span>{t.contact.callNowCta}</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden border border-[#E2D9CB] bg-[#F4EFE6]">
            <div className="relative flex-1 min-h-[340px] lg:min-h-[430px] bg-[#EAE2D6]">
              <iframe
                title={t.contact.mapTitle}
                src={CLINIC_INFO.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] border-0"
              />
            </div>
            <div className="px-5 py-3.5 border-t border-[#E2D9CB] bg-[#F4EFE6] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-[#4A463F]">
                {locale === 'ar' ? CLINIC_INFO.addressAr : CLINIC_INFO.addressEn}
              </span>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#8A6B38] hover:text-[#141413] underline underline-offset-4 whitespace-nowrap"
              >
                {t.contact.directionsCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
