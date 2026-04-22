import Image from "next/image";
import Link from "next/link";

export default function Lookbook() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Large Staggered Image */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto md:ml-0 overflow-hidden bg-[#EAE3D2]">
              <Image 
                src="/lookbook_primary.png" 
                alt="Lookbook Editorial" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[1.5s]" 
                unoptimized 
              />
            </div>
            {/* Small Overlapping Image */}
            <div className="hidden md:block absolute -right-12 bottom-24 w-64 aspect-[4/5] bg-white border-8 border-[#F8F6F0] z-10 overflow-hidden shadow-2xl">
              <Image 
                src="/lookbook_secondary.png" 
                alt="Lookbook Detail" 
                fill 
                className="object-cover" 
                unoptimized 
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-sans text-xs tracking-widest text-[#2D2D2D]/60 uppercase mb-4">The New Uniform</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#2D2D2D] mb-8 leading-tight">
              Elegance in the Everyday
            </h2>
            <p className="font-sans text-sm text-[#2D2D2D]/70 leading-relaxed max-w-md mx-auto md:mx-0 mb-12">
              Our latest collection reimagines the boundary between formalwear and everyday utility. Handcrafted from regenerative silk and responsible wool, these silhouettes are designed to move effortlessly from the morning commute to evening engagements. Discover the pieces defining the modern luxury wardrobe.
            </p>
            <Link 
              href="/collections" 
              className="px-8 py-3 bg-transparent border border-[#2D2D2D] text-[#2D2D2D] text-sm uppercase tracking-widest hover:bg-[#2D2D2D] hover:text-[#F8F6F0] transition-colors"
            >
              Explore the Lookbook
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
