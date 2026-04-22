"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Editorial() {
  return (
    <section className="bg-[#F8F6F0] py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Editorial Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex-1 w-full relative aspect-[3/4] md:aspect-[4/5]"
        >
          <Image
            src="/editorial.png"
            alt="Sustainable manufacturing"
            fill
            className="object-cover"
            unoptimized
          />
        </motion.div>

        {/* Editorial Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex flex-col items-start justify-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[#2D2D2D] mb-6 leading-tight">
            A Circular Future
          </h2>
          <p className="text-[#2D2D2D]/80 font-sans leading-relaxed mb-8 max-w-md">
            We believe that the fashion industry can and should be a force for good. By choosing fabrics that give back to the earth—and designing silhouettes you&apos;ll cherish forever—we are proving that sustainable luxury is not just a dream.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/sustainability"
            className="border-b border-[#2D2D2D] text-[#2D2D2D] pb-1 uppercase tracking-widest text-sm font-sans hover:text-[#2D2D2D]/60 transition-colors"
          >
            Read Our Code of Conduct
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
