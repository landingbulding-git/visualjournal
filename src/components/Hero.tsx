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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-zinc-950">
      {/* Background/Central Image Container */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={IMAGES[currentIndex]}
            alt="Hero character illustration"
            className="w-full object-contain max-h-[80vh] md:max-h-[90vh]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-start text-center max-w-5xl h-full pt-16 md:pt-24">
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
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 drop-shadow-2xl"
        >
          <span className="text-primary block md:inline">"Azt kérte,</span> tegyek úgy, mintha aludnék"
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-zinc-300 max-w-3xl font-light mb-12 leading-relaxed drop-shadow-md"
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
  );
}
