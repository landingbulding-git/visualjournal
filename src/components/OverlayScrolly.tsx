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

  // Visual Layer Animations
  const zsofiScale = useTransform(scrollYProgress, [0, 0.33], [1.1, 0.8]);
  const pumpkinX = useTransform(scrollYProgress, [0, 1], ["80vw", "-20vw"]);
  const pumpkinOpacity = useTransform(scrollYProgress, [0.33, 0.66, 1], [0, 0.1, 1]);

  return (
    <div ref={containerRef} id="story-start" className="relative min-h-[400vh] bg-zinc-950">
      
      {/* Sticky Visuals Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Main Character - Zsofi */}
        <motion.img
          style={{ scale: zsofiScale, x: '-50%' }}
          src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/main-zsofi.webp"
          alt="Character Zsofi"
          className="absolute bottom-0 left-1/2 w-full object-contain max-h-[70vh]"
        />
        
        {/* Secondary Character - Pumpkin */}
        <motion.img
          style={{ opacity: pumpkinOpacity, x: pumpkinX }}
          src="https://pjvq1reclhljbaqu.public.blob.vercel-storage.com/pumpkin-Photoroom.webp"
          alt="Character Pumpkin"
          className="absolute top-10 w-full object-contain max-h-[40vh] z-10"
        />
      </div>

      {/* Scrolling Narrative Layer */}
      <div className="relative z-20">
        {CARDS.map((text, i) => (
          <div key={i} className="h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="bg-[#E24A70]/70 backdrop-blur-xl border border-white/20 shadow-2xl p-8 max-w-xl rounded-3xl text-white"
            >
              <p className="font-serif text-2xl md:text-3xl leading-relaxed">
                "{text}"
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
