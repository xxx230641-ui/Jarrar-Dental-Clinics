/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import type { Locale } from './data/clinic';
import { TRANSLATIONS } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [locale, setLocale] = useState<Locale>('ar');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('dental-implants');

  const t = TRANSLATIONS[locale];

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title =
      locale === 'ar'
        ? 'عيادات جرار لطب الأسنان | Jarrar Dental Clinics — عمّان'
        : 'Jarrar Dental Clinics | Dr. Tareq & Dr. Amer Jarrar — Amman';
  }, [locale]);

  const handleToggleLocale = () => {
    setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const bookSection = document.getElementById('book');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className="min-h-screen bg-[#FAF8F4] text-[#141413] flex flex-col"
      >
        <Navbar locale={locale} onToggleLocale={handleToggleLocale} t={t} />

        <main className="flex-1">
          <HeroSection locale={locale} t={t} />
          <AboutSection locale={locale} t={t} />
          <ServicesSection
            locale={locale}
            t={t}
            onSelectService={handleSelectService}
          />
          <WhyChooseSection locale={locale} t={t} />
          <DoctorsSection locale={locale} t={t} />
          <ReviewsSection locale={locale} t={t} />
          <GallerySection locale={locale} t={t} />
          <AppointmentSection
            locale={locale}
            t={t}
            preselectedServiceId={selectedServiceId}
          />
          <ContactSection locale={locale} t={t} />
        </main>

        <Footer locale={locale} t={t} />
      </div>
    </MotionConfig>
  );
}
