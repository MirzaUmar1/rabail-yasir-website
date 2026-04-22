import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProducts } from "@/app/actions/product";
import Image from "next/image";

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />

      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2D2D2D] mb-6">Shop All</h1>
          <p className="font-sans text-[#2D2D2D]/70 max-w-lg mb-16">Discover our complete collection of sustainable, timeless pieces designed to cherish forever.</p>

          {products.length === 0 ? (
            <div className="h-64 flex items-center justify-center border border-dashed border-[#EAE3D2] w-full rounded-md">
              <p className="font-sans tracking-widest text-[#2D2D2D]/60 uppercase text-sm">Inventory is currently empty.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 w-full text-left">
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

      <Footer />
    </main>
  );
}
