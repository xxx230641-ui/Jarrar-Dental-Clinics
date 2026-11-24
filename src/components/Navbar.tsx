import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import type { Locale } from '../data/clinic';
import type { TranslationDictionary } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
  t: TranslationDictionary;
}

export function Navbar({ locale, onToggleLocale, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#FAF8F4]/95 backdrop-blur-md border-[#E6DFD3]'
          : 'bg-[#FAF8F4]/90 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Mark */}
        <a
          href="#home"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B] rounded-md py-1 whitespace-nowrap shrink-0"
          aria-label="Jarrar Dental Clinics"
        >
          <BrandLogo variant="header" tone="dark" locale={locale} />
        </a>

        {/* Zone 2: Clean Single-Line Navigation */}
        <nav
          aria-label={locale === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A463F]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#141413] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B] rounded-sm after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-[#B5945B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switch & Primary Action */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleLocale}
            aria-label={
              locale === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'
            }
            data-testid="language-toggle"
            className="min-h-[40px] px-3 py-1.5 text-xs font-medium tracking-wide text-[#141413] border border-[#D8CFC0] hover:border-[#B5945B] hover:bg-[#F4EFE6] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
          >
            {locale === 'ar' ? 'English' : 'عربي'}
          </button>

          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs sm:text-sm font-medium bg-[#141413] text-[#FAF8F4] hover:bg-[#2B2926] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
          >
            {t.nav.book}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            data-testid="mobile-menu-toggle"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#141413] border border-[#E6DFD3] rounded-md hover:bg-[#F4EFE6] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5945B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute inset-x-0 top-full border-t border-b border-[#E6DFD3] bg-[#FAF8F4] px-4 py-5 shadow-xl"
          >
            <nav
              aria-label={locale === 'ar' ? 'قائمة الهاتف' : 'Mobile Navigation'}
              className="flex flex-col gap-1"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="min-h-[44px] flex items-center px-3 py-2 text-base font-medium text-[#141413] hover:bg-[#F4EFE6] rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E6DFD3]">
                <a
                  href="#book"
                  onClick={handleNavClick}
                  className="min-h-[44px] w-full flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#141413] text-[#FAF8F4] hover:bg-[#2B2926] rounded-md transition-colors"
                >
                  {t.nav.book}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
