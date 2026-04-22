"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#EAE3D2]">
      {/* Background Image / Placeholder */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80"
          alt="Sustainable Fashion Editorial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center text-white px-6"
      >
        <span className="text-sm md:text-base font-sans tracking-widest uppercase mb-4 opacity-90 drop-shadow-md">
          The New Collection
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight drop-shadow-lg">
          Practical Femininity for a Better World
        </h1>
        <motion.a
          href="/shop"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-[#F8F6F0] text-[#2D2D2D] text-sm uppercase tracking-widest hover:bg-white transition-colors block"
        >
          Explore Collection
        </motion.a>
      </motion.div>
    </section>
  );
}
