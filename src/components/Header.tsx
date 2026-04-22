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
          <Link href="/shop" className="hover:text-black/60 transition-colors">Shop</Link>
          <Link href="/collections" className="hover:text-black/60 transition-colors">Collections</Link>
          <Link href="/sustainability" className="hover:text-black/60 transition-colors">A Better World</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 text-center">
          <Link href="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase">
            Rabail Yasir
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex flex-1 items-center justify-end gap-6 text-[#2D2D2D]">
          <button aria-label="Search">
            <Search className="w-5 h-5 font-light" strokeWidth={1.5} />
          </button>
          <button aria-label="Account">
            <User className="w-5 h-5 font-light hidden md:block" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="relative">
            <ShoppingBag className="w-5 h-5 font-light" strokeWidth={1.5} />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#2D2D2D] text-[8px] text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
