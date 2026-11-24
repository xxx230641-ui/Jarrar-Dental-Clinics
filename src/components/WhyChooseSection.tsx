import { motion, useReducedMotion } from 'motion/react';
import { CLINIC_INFO, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import { AnimatedCounter } from './AnimatedCounter';

interface WhyChooseSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function WhyChooseSection({ locale, t }: WhyChooseSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F4] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left / Start Column: Heading + Verified Real Metrics Only */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
              {t.whyUs.kicker}
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.2] font-semibold text-[#141413] mb-4"
              style={{ textWrap: 'balance' }}
            >
              {t.whyUs.title}
            </h2>
            <p className="text-base leading-[1.75] text-[#4A463F] mb-10">{t.whyUs.subtitle}</p>

            {/* Animated Counters strictly for verified clinic facts */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E6DFD3]">
              <div>
                <div className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141413]">
                  <AnimatedCounter target={CLINIC_INFO.googleRating} decimals={1} />
                </div>
                <p className="text-xs text-[#6B665E] mt-1">{t.whyUs.statRatingLabel}</p>
              </div>
              <div>
                <div className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141413]">
                  <AnimatedCounter target={CLINIC_INFO.googleReviewCount} decimals={0} />
                </div>
                <p className="text-xs text-[#6B665E] mt-1">{t.whyUs.statReviewsLabel}</p>
              </div>
              <div>
                <div className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141413]">
                  <AnimatedCounter target={6} decimals={0} />
                </div>
                <p className="text-xs text-[#6B665E] mt-1">{t.whyUs.statDaysLabel}</p>
              </div>
            </div>
          </div>

          {/* Right / End Column: 4 Refined Care Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {t.whyUs.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.index}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 sm:p-7 rounded-xl bg-[#F4EFE6]/70 border border-[#E6DFD3]"
              >
                <span className="inline-block font-editorial text-xl font-medium text-[#8A6B38] mb-3 tabular-nums">
                  {locale === 'ar' ? pillar.index : `0${index + 1}`}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#141413] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-[1.75] text-[#4A463F]">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
