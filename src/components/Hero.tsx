import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  'https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/hero1.webp',
  'https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/hero2.webp'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-zinc-950">
      {/* Background/Central Image Container - Side layout on large screens */}
      <div className="absolute bottom-0 right-0 z-0 flex items-end justify-center pointer-events-none w-full md:w-1/2 h-full">
        {IMAGES.map((src, index) => (
          <motion.img
            key={src}
            src={src}
            alt="Hero character illustration"
            className="absolute bottom-0 w-full object-contain max-h-[70vh] md:max-h-[90vh] md:object-bottom"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              filter: index === currentIndex 
                ? ["saturate(1) hue-rotate(0deg)", "saturate(5) hue-rotate(90deg)", "saturate(1) hue-rotate(0deg)"]
                : "none",
              x: index === currentIndex ? [0, -5, 5, -2, 0] : 0,
              y: index === currentIndex ? [0, 5, -5, 2, 0] : 0,
              scale: index === currentIndex ? [1, 1.05, 1] : 1,
            }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>


      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-7xl h-full pt-16 md:pt-0">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-widest text-zinc-300 backdrop-blur-md"
          >
            Készült Hollós Veronika cikke alapján
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 drop-shadow-2xl max-w-4xl"
          >
            <span className="bg-primary px-2 py-1 rounded inline-block">"Azt kérte,</span> tegyek úgy, mintha aludnék"
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-zinc-300 max-w-2xl font-light mb-12 leading-relaxed drop-shadow-md"
          >
            Egy évtized a "barátnő-érzés" szolgálatában – kik és miért keresik valójában a fizetős szexet?
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-semibold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(226,74,112,0.4)] hover:bg-[#c2385b] hover:shadow-[0_0_40px_rgba(226,74,112,0.6)] transition-all duration-300 tracking-wide text-lg md:text-xl"
          >
            Ez érdekes.. Elolvasom!
          </motion.button>
        </div>
      </div>
    </div>
  );
}
