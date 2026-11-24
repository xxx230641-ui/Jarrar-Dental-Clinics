import type { Locale } from '../data/clinic';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  tone?: 'dark' | 'light';
  locale?: Locale;
}

export function BrandLogo({ variant = 'header', tone = 'dark', locale = 'ar' }: BrandLogoProps) {
  const isLight = tone === 'light';
  const primaryText = isLight ? 'text-[#FAF8F4]' : 'text-[#141413]';
  const secondaryText = isLight ? 'text-[#D6CFC2]' : 'text-[#6B665E]';
  const emblemStroke = isLight ? '#E7DEC8' : '#141413';
  const accentStroke = '#B5945B';

  if (variant === 'header') {
    return (
      <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
        {/* Bespoke calligraphic monogram inspired by Arabic letterforms for Jarrar (جرار) */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="8"
            stroke={accentStroke}
            strokeOpacity="0.65"
            strokeWidth="1.2"
          />
          {/* Stylized Arabic calligraphy strokes (ج - ر - ر) */}
          <path
            d="M11 16.5C13.8 13.8 18.8 13.5 22.5 15.2C20.2 17.8 16.8 20.5 14.5 23.8C13.2 25.6 15.4 27.8 18.8 27.6C21.6 27.4 24.4 25.8 26.2 23.6"
            stroke={emblemStroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.8 14.5C27.2 17.6 27.6 21.4 26.8 24.6C26.4 26.2 28.4 27.6 30.2 26.4"
            stroke={accentStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="17.8" cy="21.4" r="1.35" fill={accentStroke} />
        </svg>
        <span className={`font-editorial text-lg md:text-xl font-semibold tracking-tight ${primaryText}`}>
          {locale === 'ar' ? 'عيادات جرار' : 'JARRAR DENTAL'}
        </span>
      </span>
    );
  }

  return (
    <div className="inline-flex flex-col gap-2">
      <div className="inline-flex items-center gap-3.5">
        <svg
          width="44"
          height="44"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="8"
            stroke={accentStroke}
            strokeOpacity="0.8"
            strokeWidth="1.2"
          />
          <path
            d="M11 16.5C13.8 13.8 18.8 13.5 22.5 15.2C20.2 17.8 16.8 20.5 14.5 23.8C13.2 25.6 15.4 27.8 18.8 27.6C21.6 27.4 24.4 25.8 26.2 23.6"
            stroke={emblemStroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.8 14.5C27.2 17.6 27.6 21.4 26.8 24.6C26.4 26.2 28.4 27.6 30.2 26.4"
            stroke={accentStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="17.8" cy="21.4" r="1.35" fill={accentStroke} />
        </svg>
        <div className="flex flex-col">
          <span className={`font-editorial text-xl font-semibold tracking-[0.06em] ${primaryText}`}>
            JARRAR DENTAL CLINICS
          </span>
          <span className={`text-xs ${secondaryText}`}>
            Dr. Tareq Jarrar &amp; Dr. Amer Jarrar
          </span>
        </div>
      </div>
    </div>
  );
}
