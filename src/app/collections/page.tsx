import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CollectionsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] mb-6">Collections</h1>
          <p className="font-sans text-[#2D2D2D]/70 max-w-lg mb-16">Curated edits for every season, rooted in circular design and practical elegance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-left">
            <div className="relative aspect-[4/5] w-full overflow-hidden cursor-pointer group">
              <Image src="/autumn.png" alt="Autumn Winter Collection" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" unoptimized />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <h3 className="text-white font-serif text-3xl md:text-5xl drop-shadow-md">Autumn / Winter</h3>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden cursor-pointer group">
              <Image src="/essentials.png" alt="Forever Essentials" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" unoptimized />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <h3 className="text-white font-serif text-3xl md:text-5xl drop-shadow-md">Forever Essentials</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
