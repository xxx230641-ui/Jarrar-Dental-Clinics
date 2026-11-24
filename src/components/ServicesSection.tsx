import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Gem,
  Layers,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
} from 'lucide-react';
import { CLINIC_SERVICES, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';

interface ServicesSectionProps {
  locale: Locale;
  t: TranslationDictionary;
  onSelectService: (serviceId: string) => void;
}

const SERVICE_ICONS: Record<string, typeof ShieldCheck> = {
  'dental-implants': ShieldCheck,
  'cosmetic-dentistry': Sparkles,
  'teeth-whitening': Sun,
  'dental-veneers': Layers,
  'smile-makeover': Gem,
  'general-dental-care': Smile,
};

export function ServicesSection({ locale, t, onSelectService }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ArrowIcon = locale === 'ar' ? ArrowDownLeft : ArrowUpRight;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
              {t.services.kicker}
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-semibold text-[#141413]"
              style={{ textWrap: 'balance' }}
            >
              {t.services.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-[1.75] text-[#4A463F] mb-2">
              {t.services.subtitle}
            </p>
            <p className="text-xs text-[#6B665E]">{t.services.menuNotice}</p>
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {CLINIC_SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] ?? ShieldCheck;
            const title = locale === 'ar' ? service.titleAr : service.titleEn;
            const summary = locale === 'ar' ? service.summaryAr : service.summaryEn;
            const focus = locale === 'ar' ? service.focusAr : service.focusEn;

            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-[#FAF8F4] border border-[#E2D9CB] hover:border-[#B5945B] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-editorial text-2xl font-medium text-[#B5945B] tabular-nums">
                      {service.index}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#E6DFD3] flex items-center justify-center text-[#141413] group-hover:bg-[#141413] group-hover:text-[#FAF8F4] transition-colors duration-200">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                  </div>

                  <p className="text-xs text-[#6B665E] mb-2">{focus}</p>

                  <h3 className="font-editorial text-2xl font-semibold text-[#141413] mb-3">
                    {title}
                  </h3>

                  <p className="text-sm sm:text-[0.9375rem] leading-[1.75] text-[#4A463F] mb-7">
                    {summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDE6DA]">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#141413] group-hover:text-[#8A6B38] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B] rounded-sm py-1"
                  >
                    <span>{t.services.bookServiceCta}</span>
                    <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
