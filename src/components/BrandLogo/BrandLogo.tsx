import React from 'react';

interface BrandLogoProps {
  collapsed?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  collapsed = false,
  size = 'md',
}) => {
  const iconSize =
    size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-9 h-9';
  const dividerHeight =
    size === 'sm' ? 'h-5' : size === 'lg' ? 'h-8' : 'h-7';
  const titleSize =
    size === 'sm'
      ? 'text-[14px]'
      : size === 'lg'
        ? 'text-[19px]'
        : 'text-[16.5px]';
  const subSize =
    size === 'sm'
      ? 'text-[8.5px] tracking-[0.22em]'
      : size === 'lg'
        ? 'text-[10px] tracking-[0.28em]'
        : 'text-[9.5px] tracking-[0.25em]';

  if (collapsed) {
    return (
      <div className="mx-auto relative flex items-center justify-center">
        <img
          src="/favicon.svg"
          alt="Gallery Inspirations"
          className="w-9 h-9 rounded-full object-contain shadow-lg shadow-black/60 ring-1 ring-white/10 group-hover:ring-white/25 group-hover:scale-105 transition-all duration-200 shrink-0"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 min-w-0">
      <div className="relative shrink-0">
        <img
          src="/favicon.svg"
          alt="Gallery Inspirations"
          className={`${iconSize} rounded-full object-contain shadow-lg shadow-black/60 ring-1 ring-white/10 group-hover:ring-white/25 group-hover:scale-105 transition-all duration-200`}
        />
      </div>

      <span
        className={`${dividerHeight} w-px bg-gradient-to-b from-transparent via-white/20 to-transparent shrink-0`}
        aria-hidden="true"
      />

      <div className="flex flex-col justify-center min-w-0 gap-[3px]">
        <span
          style={{ fontFamily: "'Syne', sans-serif" }}
          className={`font-extrabold ${titleSize} leading-none tracking-[-0.03em] bg-gradient-to-b from-white via-white to-[#B8BCC6] bg-clip-text text-transparent`}
        >
          Gallery
        </span>
        <span
          className={`font-mono font-medium uppercase ${subSize} leading-none text-[#9CA3AF] group-hover:text-[#E4E4E7] transition-colors`}
        >
          Inspirations
        </span>
      </div>
    </div>
  );
};
