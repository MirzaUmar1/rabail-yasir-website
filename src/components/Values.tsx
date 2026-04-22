import { motion } from "framer-motion";

export default function Values() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2D2D2D] mb-16 text-center">
          Our Foundation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-[#EAE3D2]">
          
          <div className="flex flex-col items-center text-center p-12 border-b md:border-b-0 md:border-r border-[#EAE3D2] group">
            <span className="font-serif text-5xl text-[#2D2D2D]/20 mb-6 group-hover:text-[#2D2D2D] transition-colors duration-500">01</span>
            <h3 className="font-sans uppercase tracking-widest text-[#2D2D2D] text-sm mb-4">100% Traceable</h3>
            <p className="font-sans text-[#2D2D2D]/60 text-sm leading-relaxed max-w-xs">
              From farm to finished garment, we know the origin of every thread. Total transparency is our absolute standard.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-12 border-b md:border-b-0 md:border-r border-[#EAE3D2] group">
            <span className="font-serif text-5xl text-[#2D2D2D]/20 mb-6 group-hover:text-[#2D2D2D] transition-colors duration-500">02</span>
            <h3 className="font-sans uppercase tracking-widest text-[#2D2D2D] text-sm mb-4">Regenerative Materials</h3>
            <p className="font-sans text-[#2D2D2D]/60 text-sm leading-relaxed max-w-xs">
              We exclusively utilize textiles that act as a carbon sink—healing the earth rather than depleting it.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-12 group">
            <span className="font-serif text-5xl text-[#2D2D2D]/20 mb-6 group-hover:text-[#2D2D2D] transition-colors duration-500">03</span>
            <h3 className="font-sans uppercase tracking-widest text-[#2D2D2D] text-sm mb-4">Lifetime Repairs</h3>
            <p className="font-sans text-[#2D2D2D]/60 text-sm leading-relaxed max-w-xs">
              True luxury outlives trends. We offer complimentary repairs to ensure your pieces remain in rotation forever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
