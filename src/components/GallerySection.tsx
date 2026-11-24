import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, type Locale } from '../data/clinic';
import { CLINIC_MEDIA } from '../data/media';
import type { TranslationDictionary } from '../i18n/translations';
import { ClinicImage } from './ClinicImage';

interface GallerySectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function GallerySection({ locale, t }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_ITEMS.length));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const activeItem = activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F4] border-t border-[#E6DFD3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-[#8A6B38] tracking-wide mb-3">
              {t.gallery.kicker}
            </p>
            <h2
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] font-semibold text-[#141413]"
              style={{ textWrap: 'balance' }}
            >
              {t.gallery.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-[1.75] text-[#4A463F] mb-2">
              {t.gallery.subtitle}
            </p>
            <p className="text-xs text-[#6B665E]">{t.gallery.placeholderNote}</p>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const spanClass =
              idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';
            const alt = locale === 'ar' ? item.altAr : item.altEn;
            const caption = locale === 'ar' ? item.captionAr : item.captionEn;
            const category = locale === 'ar' ? item.categoryAr : item.categoryEn;

            return (
              <motion.div
                key={item.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: prefersReducedMotion ? 0 : idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={spanClass}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`${t.gallery.zoomLabel}: ${caption}`}
                  className="group relative w-full h-[270px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden bg-[#EAE2D6] border border-[#E6DFD3] text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
                >
                  <ClinicImage
                    src={CLINIC_MEDIA.gallery[item.id as keyof typeof CLINIC_MEDIA.gallery] ?? item.src}
                    alt={alt}
                    fallbackLabel={caption}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141413]/75 via-[#141413]/15 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 inset-x-5 flex items-end justify-between gap-4 text-[#FAF8F4]">
                    <div>
                      <span className="block text-xs text-[#D6B882] mb-1">{category}</span>
                      <span className="block text-sm sm:text-base font-medium">{caption}</span>
                    </div>
                    <span className="w-9 h-9 rounded-md bg-[#141413]/70 border border-[#FAF8F4]/25 flex items-center justify-center shrink-0 group-hover:bg-[#B5945B] group-hover:text-[#141413] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={locale === 'ar' ? activeItem.captionAr : activeItem.captionEn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 bg-[#141413]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#1E1D1B] border border-[#322F2A] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#322F2A] text-[#FAF8F4]">
                <div className="text-sm">
                  <span className="text-[#D6B882] me-2">
                    {locale === 'ar' ? activeItem.categoryAr : activeItem.categoryEn}
                  </span>
                  <span className="text-[#C7BFAF]">·</span>
                  <span className="ms-2">
                    {locale === 'ar' ? activeItem.captionAr : activeItem.captionEn}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label={t.gallery.closeLightbox}
                  className="w-10 h-10 rounded-md flex items-center justify-center text-[#FAF8F4] hover:bg-[#2E2B27] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] bg-[#141413]">
                <ClinicImage
                  src={
                    CLINIC_MEDIA.gallery[activeItem.id as keyof typeof CLINIC_MEDIA.gallery] ??
                    activeItem.src
                  }
                  alt={locale === 'ar' ? activeItem.altAr : activeItem.altEn}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-[#322F2A] text-[#FAF8F4]">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)
                  }
                  aria-label={t.gallery.prevImage}
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-md hover:bg-[#2E2B27] text-xs sm:text-sm cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  <span>{t.gallery.prevImage}</span>
                </button>
                <span className="text-xs text-[#C7BFAF] tabular-nums">
                  {activeIndex + 1} / {GALLERY_ITEMS.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length)}
                  aria-label={t.gallery.nextImage}
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-md hover:bg-[#2E2B27] text-xs sm:text-sm cursor-pointer"
                >
                  <span>{t.gallery.nextImage}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
