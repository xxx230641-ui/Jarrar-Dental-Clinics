import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { CLINIC_DOCTORS, type Locale } from '../data/clinic';
import { CLINIC_MEDIA } from '../data/media';
import type { TranslationDictionary } from '../i18n/translations';
import { ClinicImage } from './ClinicImage';

interface DoctorsSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function DoctorsSection({ locale, t }: DoctorsSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ArrowIcon = locale === 'ar' ? ArrowDownLeft : ArrowUpRight;

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
            {t.doctors.kicker}
          </p>
          <h2
            className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-semibold text-[#141413] mb-4"
            style={{ textWrap: 'balance' }}
          >
            {t.doctors.title}
          </h2>
          <p className="text-base leading-[1.75] text-[#4A463F] mb-2">{t.doctors.subtitle}</p>
          <p className="text-xs text-[#6B665E]">{t.doctors.placeholderNote}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CLINIC_DOCTORS.map((doctor, index) => {
            const name = locale === 'ar' ? doctor.nameAr : doctor.nameEn;
            const altName = locale === 'ar' ? doctor.nameEn : doctor.nameAr;
            const role = locale === 'ar' ? doctor.roleAr : doctor.roleEn;
            const bio = locale === 'ar' ? doctor.bioAr : doctor.bioEn;

            return (
              <motion.article
                key={doctor.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{
                  duration: 0.55,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#FAF8F4] border border-[#E2D9CB] rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch"
              >
                <div className="sm:w-[44%] shrink-0 aspect-[3/4] sm:aspect-auto bg-[#EAE2D6] overflow-hidden">
                  <ClinicImage
                    src={CLINIC_MEDIA.doctors[doctor.id]}
                    alt={`${name} — ${altName}`}
                    fallbackLabel={name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs text-[#8A6B38] font-medium mb-2">{role}</p>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#141413] mb-1">
                      {name}
                    </h3>
                    <p className="text-xs text-[#6B665E] mb-5">{altName}</p>
                    <p className="text-sm leading-[1.8] text-[#4A463F] mb-6">{bio}</p>
                  </div>

                  <div className="pt-4 border-t border-[#EDE6DA]">
                    <a
                      href="#book"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#141413] hover:text-[#8A6B38] transition-colors"
                    >
                      <span>{t.doctors.bookWithClinic}</span>
                      <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
