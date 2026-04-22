import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Editorial from "@/components/Editorial";
import Values from "@/components/Values";
import Lookbook from "@/components/Lookbook";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { getProducts } from "@/app/actions/product";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      <Hero />
      <Editorial />
      <Values />
      <Lookbook />

      {/* Product Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-3xl mb-12 text-center text-[#2D2D2D]">Latest Arrivals</h3>
          {products.length === 0 ? (
            <p className="text-center font-sans tracking-widest text-[#2D2D2D]/60 uppercase text-sm">No products available at the moment. Please visit the admin dashboard to add some.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {products.map((product: any) => (
                <div key={product.id} className="flex flex-col group cursor-pointer">
                  <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#EAE3D2] mb-4">
                    <Image src={product.imageUrl} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" unoptimized />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                  </div>
                  <h4 className="font-sans uppercase text-sm tracking-widest text-[#2D2D2D] mb-1">{product.name}</h4>
                  <p className="font-serif text-[#2D2D2D]/70">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
