import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CARDS = [
  "22 évesen csöppentem először a fizetős szex világába...",
  "Eredetileg sugar daddyt kerestem, de az első jelentkezőről kiderült, hogy strici.",
  "Végül elvállaltam, mert úgy éreztem, hogy ez biztos út számomra a megélhetéshez."
];

export default function OverlayScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Main character animations (Zoom out and shift up)
  const zsofiScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const zsofiY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Pumpkin animations (Slide right-to-left + Opacity)
  const pumpkinX = useTransform(scrollYProgress, [0.3, 0.8], ["100vw", "-100vw"]);
  const pumpkinOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7, 0.8], [0, 0.1, 0.1, 1]);

  return (
    <div ref={containerRef} id="story-start" className="relative min-h-[300vh] bg-zinc-950 overflow-hidden">
      {/* Sticky Character Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Main Character */}
        <motion.img
          style={{ scale: zsofiScale, y: zsofiY }}
          src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/main-zsofi.webp"
          alt="Character Zsofi"
          className="absolute w-full h-full object-contain max-h-[90vh]"
        />
        
        {/* Pumpkin Character */}
        <motion.img
          style={{ opacity: pumpkinOpacity, x: pumpkinX }}
          src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/pumpkin-Photoroom.webp"
          alt="Character Pumpkin"
          className="absolute w-full h-full object-contain max-h-[50vh] z-10 top-20"
        />
      </div>

      {/* Foreground Narrative Cards */}
      <div className="relative z-20 flex flex-col items-center pt-[20vh] pb-[20vh]">
        {CARDS.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            className="mb-[100vh] bg-[#E24A70]/70 backdrop-blur-xl border border-white/20 shadow-2xl p-8 max-w-xl rounded-3xl text-white"
          >
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">
              "{text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
