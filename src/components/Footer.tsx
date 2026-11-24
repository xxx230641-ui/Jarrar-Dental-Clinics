import { CLINIC_INFO, type Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function Footer({ locale, t }: FooterProps) {
  const year = new Date().getFullYear();

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#book', label: t.nav.book },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#141413] text-[#FAF8F4] border-t border-[#2A2825]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2825]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" tone="light" locale={locale} />
            <p className="text-sm leading-[1.75] text-[#C7BFAF] max-w-sm">
              {locale === 'ar'
                ? 'عيادات جرار لطب الأسنان — رعاية متخصصة في زراعة وتجميل الأسنان وتصميم الابتسامة في عمّان، الأردن.'
                : 'Jarrar Dental Clinics — Dedicated restorative, cosmetic, and implant dental care in Amman, Jordan.'}
            </p>
            <p className="text-xs text-[#8E887E]">{t.footer.socialNote}</p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B882] mb-4">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D6CFC2]">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#FAF8F4] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B882] mb-4">
              {t.footer.contactTitle}
            </h3>
            <p className="text-sm text-[#D6CFC2]">
              {locale === 'ar' ? CLINIC_INFO.addressAr : CLINIC_INFO.addressEn}
            </p>
            <p>
              <a
                href={CLINIC_INFO.phoneHref}
                dir="ltr"
                className="text-sm font-medium text-[#FAF8F4] hover:text-[#D6B882] transition-colors tabular-nums"
              >
                {CLINIC_INFO.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D6B882] hover:underline underline-offset-4"
              >
                {t.contact.directionsCta}
              </a>
            </p>
          </div>

          {/* Hours Summary Column */}
          <div className="lg:col-span-3 space-y-2 text-sm text-[#D6CFC2]">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B882] mb-4">
              {t.footer.hoursTitle}
            </h3>
            <p className="tabular-nums">
              {locale === 'ar'
                ? 'السبت – الأربعاء: ٩:٠٠ ص – ٦:٠٠ م'
                : 'Sat – Wed: 9:00 AM – 6:00 PM'}
            </p>
            <p className="tabular-nums">
              {locale === 'ar' ? 'الخميس: ٩:٠٠ ص – ٣:٠٠ م' : 'Thu: 9:00 AM – 3:00 PM'}
            </p>
            <p className="text-[#8E887E]">
              {locale === 'ar' ? 'الجمعة: مغلق' : 'Friday: Closed'}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A093]">
          <p className="tabular-nums">
            © {year} {t.footer.copyright}
          </p>
          <p>{t.footer.doctorsCredit}</p>
        </div>
      </div>
    </footer>
  );
}
