'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  { src: '/htmllogo.png', alt: 'JavaScript' },
  { src: '/csslogo.png', alt: 'Next.js' },
  { src: '/javascriptlogo.png', alt: 'React' },
  { src: '/nextlogo.png', alt: 'HTML' },
  { src: '/reactlogo.png', alt: 'CSS' },
  { src: '/tailwindcss.png', alt: 'CSS' },
  { src: '/pythonlogo.png', alt: 'Python' },
];

export default function ScrollingLogoTicker() {
  return (
    <div className="overflow-hidden bg-black py-6">
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex items-center space-x-10"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }} // Increased duration to slow down animation
          style={{ minWidth: '300%' }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={96} // Set a consistent width
                height={96} // Set a consistent height
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

