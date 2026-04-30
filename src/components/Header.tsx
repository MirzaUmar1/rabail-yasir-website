"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full bg-[#F8F6F0]/90 backdrop-blur-md border-b border-[#EAE3D2]"
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Left Links */}
        <nav className="hidden md:flex flex-1 items-center gap-8 text-sm uppercase tracking-widest text-[#2D2D2D]">
          <Link href="#collections" className="hover:text-black/60 transition-colors">Collections</Link>
          <Link href="#about" className="hover:text-black/60 transition-colors">About</Link>
          <Link href="#behind-the-scenes" className="hover:text-black/60 transition-colors">Behind the Scenes</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 text-center md:text-left">
          <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
            Rabail Yasir
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex flex-1 items-center justify-end gap-6 text-sm uppercase tracking-widest text-[#2D2D2D]">
           <Link href="#contact" className="hover:text-black/60 transition-colors">Contact</Link>
        </div>
      </div>
    </motion.header>
  );
}
