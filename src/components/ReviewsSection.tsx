import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { CLINIC_INFO, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import { AnimatedCounter } from './AnimatedCounter';

interface ReviewsSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function ReviewsSection({ t }: ReviewsSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-[#141413] text-[#FAF8F4] border-t border-[#2A2825]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left / Start: Verified Google Rating Focal Block */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-xl bg-[#1E1D1B] border border-[#322F2A]">
            <div className="flex items-center gap-1.5 mb-5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((idx) => (
                <Star key={idx} className="w-5 h-5 fill-[#D6B882] text-[#D6B882]" />
              ))}
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-editorial text-6xl sm:text-7xl font-semibold text-[#FAF8F4] tracking-tight">
                <AnimatedCounter target={CLINIC_INFO.googleRating} decimals={1} />
              </span>
              <span className="text-lg text-[#C7BFAF]">{t.reviews.ratingOutOf}</span>
            </div>

            <p className="text-base text-[#E6DFD3] mb-6">
              {t.reviews.basedOn}{' '}
              <span className="font-semibold text-[#FAF8F4] tabular-nums">
                <AnimatedCounter target={CLINIC_INFO.googleReviewCount} decimals={0} />
              </span>{' '}
              {t.reviews.reviewsUnit}
            </p>

            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-6 py-3 bg-[#B5945B] text-[#141413] hover:bg-[#C9A86E] rounded-md text-sm font-semibold transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F4]"
            >
              <span>{t.reviews.viewOnGoogle}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="mt-4 text-xs text-[#A8A093]">{t.reviews.authenticityNote}</p>
          </div>

          {/* Right / End: Editorial Explanation Without Fabricated Quotes */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-[#D6B882] tracking-wide mb-3">
              {t.reviews.kicker}
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-semibold text-[#FAF8F4] mb-5 tracking-[0.01em]"
              style={{ textWrap: 'balance' }}
            >
              {t.reviews.title}
            </h2>
            <p className="text-base sm:text-lg leading-[1.85] text-[#D6CFC2] max-w-2xl mb-8">
              {t.reviews.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-7 border-t border-[#2E2B27] text-sm text-[#C7BFAF]">
              <div>
                <p className="font-medium text-[#FAF8F4] mb-1">Google Maps</p>
                <p>{CLINIC_INFO.brandNameEn}</p>
              </div>
              <div>
                <p className="font-medium text-[#FAF8F4] mb-1">Amman, Jordan</p>
                <p>{CLINIC_INFO.addressEn}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
