"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />

      {/* Hero Video Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/portfolio/videos/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <h1 className="font-serif text-[12vw] leading-none text-[#F8F6F0] tracking-tighter mix-blend-overlay opacity-90 uppercase">
              In Full View
            </h1>
            <h2 className="font-serif text-[12vw] leading-none text-[#F8F6F0] tracking-tighter mix-blend-overlay opacity-90 uppercase">
              Style
            </h2>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            href="#collections" 
            className="mb-12 font-sans text-sm tracking-widest text-[#F8F6F0] uppercase border-b border-[#F8F6F0] pb-1 hover:text-[#c1b199] hover:border-[#c1b199] transition-colors"
          >
            Explore the edit
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <motion.div {...fadeUp} className="flex-1 max-w-2xl">
          <h3 className="font-serif text-5xl md:text-7xl mb-12 text-[#c1b199] leading-none">More About<br/>Fashion</h3>
          <p className="font-serif text-xl md:text-3xl text-[#2D2D2D] leading-relaxed">
            Fashion is my language of expression—where culture, creativity, and craftsmanship come together to tell powerful and meaningful stories.
          </p>
          <p className="font-sans text-sm text-[#2D2D2D]/70 tracking-widest leading-loose mt-8 uppercase">
            I am Rabail Yasir, a fashion artist who loves what I do and the stories I tell. My experiences in fashion have influenced my approach to design—not only as garments, but as a means of communication. I am committed to sustainability; I design pieces that are conscientious, considerate, and long-lasting, merging artistry with functionality to create a better future for fashion.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative aspect-[4/5] w-full max-w-md overflow-hidden group"
        >
          <Image src="/portfolio/boards/soul.jpeg" alt="Artist Inspiration" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
        </motion.div>
      </section>

      {/* Fashion Sketches Collection */}
      <section id="collections" className="py-24 px-6 md:px-12 bg-[#F8F6F0]">
        <motion.h3 {...fadeUp} className="font-serif text-4xl md:text-6xl mb-16 text-[#c1b199] text-center">Fashion Sketches</motion.h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.8 }} className="col-span-1 md:col-span-2 relative aspect-[16/9] w-full overflow-hidden group">
            <Image src="/portfolio/collection/1.jpeg" alt="Sketch 1" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.8 }} className="col-span-1 relative aspect-[3/4] w-full overflow-hidden group">
            <Image src="/portfolio/collection/2.jpeg" alt="Sketch 2" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.8 }} className="col-span-1 relative aspect-[3/4] w-full overflow-hidden group">
            <Image src="/portfolio/collection/3.jpeg" alt="Sketch 3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.8 }} className="col-span-1 md:col-span-2 relative aspect-[16/9] w-full overflow-hidden group">
            <Image src="/portfolio/collection/4.jpeg" alt="Sketch 4" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
          </motion.div>
        </div>
      </section>

      {/* Anime Drawings Collection */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <motion.h3 {...fadeUp} className="font-serif text-4xl md:text-6xl mb-16 text-[#c1b199] text-center">Anime Drawings</motion.h3>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
            <motion.div 
              key={num} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative aspect-square w-full overflow-hidden group"
            >
              <Image src={`/portfolio/developments/${num}.jpeg`} alt={`Anime ${num}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes / Curated */}
      <section id="behind-the-scenes" className="py-32 px-6 md:px-12 bg-[#EAE3D2] text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex gap-12 md:gap-32 mb-16 overflow-hidden">
            <motion.h3 initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="font-serif text-5xl md:text-7xl text-[#c1b199]">Watch</motion.h3>
            <motion.h3 initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="font-serif text-5xl md:text-7xl text-[#c1b199]">Wear</motion.h3>
          </div>
          <div className="flex gap-8 md:gap-24 mb-16 uppercase tracking-widest text-sm font-bold text-[#2D2D2D]">
            <span>Behind-the-scenes moments</span>
            <span>Curated collections</span>
          </div>
          <p className="font-sans text-sm md:text-base text-[#2D2D2D] tracking-widest leading-loose uppercase max-w-2xl">
            Created with care. Every garment is carefully designed and made with conscious practices to minimise waste and promote a sustainable future in fashion.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
