import { motion, useReducedMotion } from 'motion/react';
import { CLINIC_INFO, type Locale } from '../data/clinic';
import { CLINIC_MEDIA } from '../data/media';
import type { TranslationDictionary } from '../i18n/translations';
import { ClinicImage } from './ClinicImage';

interface AboutSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function AboutSection({ locale, t }: AboutSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F4] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Reception Architectural Frame */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-xl overflow-hidden bg-[#EAE2D6] border border-[#E6DFD3] min-h-[300px] lg:min-h-[440px]"
          >
            <ClinicImage
              src={CLINIC_MEDIA.receptionLounge}
              alt={
                locale === 'ar'
                  ? 'صالة الاستقبال الفاخرة في عيادات جرار لطب الأسنان'
                  : 'Reception lounge interior at Jarrar Dental Clinics'
              }
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Editorial Copy */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
                {t.about.kicker}
              </p>
              <h2
                className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-semibold text-[#141413] mb-5"
                style={{ textWrap: 'balance' }}
              >
                {t.about.title}
              </h2>
              <p className="text-sm sm:text-base font-medium text-[#141413] mb-4">
                {t.about.lead}
              </p>
              <p className="text-base leading-[1.8] text-[#4A463F] mb-8">{t.about.body}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-7 border-t border-[#E6DFD3]">
              <div>
                <p className="text-xs text-[#6B665E] mb-1.5">{t.about.doctorsLabel}</p>
                <p className="text-sm sm:text-base font-semibold text-[#141413]">
                  {t.about.doctorsNames}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#6B665E] mb-1.5">{t.about.locationLabel}</p>
                <p className="text-sm sm:text-base font-medium text-[#141413]">
                  {locale === 'ar' ? CLINIC_INFO.addressAr : CLINIC_INFO.addressEn}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs text-[#6B665E]">{t.about.editableNote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
