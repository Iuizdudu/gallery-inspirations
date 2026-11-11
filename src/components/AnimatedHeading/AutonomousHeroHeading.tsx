import React from 'react';
import './AutonomousHeroHeading.css';

interface AutonomousHeroHeadingProps {
  prefix?: string;
  highlight?: string;
  className?: string;
}

export const AutonomousHeroHeading: React.FC<AutonomousHeroHeadingProps> = ({
  prefix = 'Design & Development',
  highlight = 'Gallery Inspirations',
  className = '',
}) => {
  return (
    <div className={`relative w-full flex flex-col items-center text-center hero-entrance-reveal select-none ${className}`}>
      {/* Autonomous Ambient Backlight Aura (no mouse needed) */}
      <div className="hero-ambient-aura" aria-hidden="true" />

      {/* Prefix: Crisp Monumental White Text */}
      <span className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
        {prefix}
      </span>

      {/* Highlight: Gigantic Continuous Flowing Electric Gradient with Autonomous Shimmer Sheen */}
      <div className="relative z-10 overflow-hidden mt-1 sm:mt-2 pb-2">
        <h1 className="hero-shine-sheen text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black tracking-tight leading-[1.02]">
          <span className="hero-flowing-gradient drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
            {highlight}
          </span>
        </h1>
      </div>
    </div>
  );
};
