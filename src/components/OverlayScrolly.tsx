import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OverlayScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} id="story-start" className="relative min-h-[200vh] bg-zinc-950">
      {/* Sticky Character Image */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/main-zsofi.webp"
          alt="Character Zsofi"
          className="w-full h-full object-contain md:object-contain max-h-[90vh]"
        />
      </div>

      {/* Foreground Narrative Cards */}
      <div className="absolute top-0 w-full h-full flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ opacity }}
          className="bg-[#E24A70]/70 backdrop-blur-xl border border-white/20 shadow-2xl p-8 max-w-xl rounded-3xl text-white pointer-events-auto"
        >
          <p className="font-serif text-2xl md:text-3xl leading-relaxed">
            "22 éves koromban csöppentem a fizetős szex világába"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
