import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownLeft, ArrowUpRight, Phone, Star } from 'lucide-react';
import { CLINIC_INFO, type Locale } from '../data/clinic';
import { CLINIC_MEDIA } from '../data/media';
import type { TranslationDictionary } from '../i18n/translations';
import { ClinicImage } from './ClinicImage';

interface HeroSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function HeroSection({ locale, t }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', prefersReducedMotion ? '0%' : '8%']);
  const ArrowIcon = locale === 'ar' ? ArrowDownLeft : ArrowUpRight;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAF8F4] pt-6 pb-14 lg:pt-10 lg:pb-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Editorial Copy Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between py-2 lg:py-6"
          >
            <div>
              <p className="text-xs sm:text-sm tracking-wide text-[#8A6B38] font-medium mb-5">
                {t.hero.locationLine}
              </p>

              <h1
                className="font-editorial text-[2.35rem] sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-semibold text-[#141413] tracking-tight mb-6"
                style={{ textWrap: 'balance' }}
              >
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-[1.0625rem] leading-[1.75] text-[#4A463F] max-w-xl mb-8">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-7 py-3 bg-[#141413] text-[#FAF8F4] hover:bg-[#2A2825] rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowIcon className="w-4 h-4 text-[#D6B882]" />
                </a>

                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 border border-[#D4C9B8] text-[#141413] hover:border-[#141413] hover:bg-[#F4EFE6] rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
                >
                  <Phone className="w-4 h-4 text-[#8A6B38]" />
                  <span dir="ltr" className="tabular-nums">
                    {CLINIC_INFO.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Verified Google Proof Adjacent to Hero Claim */}
            <div className="pt-6 border-t border-[#E6DFD3] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141413] tabular-nums">
                    5.0
                  </span>
                  <span className="text-xs text-[#6B665E] tabular-nums">/ 5</span>
                </div>
                <div className="h-8 w-px bg-[#E6DFD3]" aria-hidden="true" />
                <div>
                  <div className="flex items-center gap-1 mb-0.5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#B5945B] text-[#B5945B]"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A463F]">
                    <span className="font-semibold text-[#141413] tabular-nums">
                      {CLINIC_INFO.googleReviewCount}
                    </span>{' '}
                    {t.hero.googleReviewsSuffix} · {t.hero.googleRatingLabel}
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#8A6B38] hover:text-[#141413] underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                {t.hero.verifiedOnGoogle}
              </a>
            </div>
          </motion.div>

          {/* Architectural Clinic Suite Showcase */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[540px] rounded-xl overflow-hidden bg-[#EAE2D6] border border-[#E6DFD3]"
          >
            <motion.div style={{ y: imageY }} className="w-full h-[108%] -top-[4%] relative">
              <ClinicImage
                src={CLINIC_MEDIA.heroSuite}
                alt={
                  locale === 'ar'
                    ? 'جناح العلاج الفاخر في عيادات جرار لطب الأسنان في عمّان'
                    : 'Luxury dental treatment suite at Jarrar Dental Clinics in Amman'
                }
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141413]/80 via-[#141413]/25 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-5 inset-x-5 sm:bottom-7 sm:inset-x-7 flex flex-wrap items-end justify-between gap-3 text-[#FAF8F4]">
              <div>
                <p className="font-editorial text-lg sm:text-xl font-medium">
                  {CLINIC_INFO.brandNameEn}
                </p>
                <p className="text-xs sm:text-sm text-[#EAE2D6]">
                  Dr. Tareq Jarrar &amp; Dr. Amer Jarrar
                </p>
              </div>
              <span className="text-xs text-[#EAE2D6] tracking-wide">
                {locale === 'ar' ? CLINIC_INFO.cityAr : CLINIC_INFO.cityEn}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
