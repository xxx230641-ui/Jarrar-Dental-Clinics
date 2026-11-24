import { useState } from 'react';

interface ClinicImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function ClinicImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: ClinicImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EAE2D6] via-[#F4EFE6] to-[#DFD4C3] text-[#6B665E] p-6 text-center ${className}`}
      >
        <span className="font-editorial text-lg text-[#141413]">
          {fallbackLabel || 'Jarrar Dental Clinics'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
