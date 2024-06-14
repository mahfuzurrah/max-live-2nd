import LogoPng from '@/public/images/logo.png';
import Link from 'next/link';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link title="logo" href="/" className="block">
      <img src={LogoPng.src} className={`w-10 h-10 md:w-20 md:h-20 ${className}`} alt="logo" />
    </Link>
  );
};

export default Logo;

