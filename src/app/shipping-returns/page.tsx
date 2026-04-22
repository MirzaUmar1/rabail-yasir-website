import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingReturnsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-3xl mx-auto flex flex-col text-left">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-12">Shipping & Returns</h1>
          
          <div className="prose prose-lg text-[#2D2D2D]/80 font-sans leading-relaxed">
            <h3 className="font-serif text-xl border-b border-[#EAE3D2] pb-2 mb-4 text-[#2D2D2D]">Shipping Information</h3>
            <p className="mb-8 text-sm">We ship globally using carbon-neutral delivery partners where possible. Standard delivery takes 3-5 business days for domestic orders and 7-14 business days for international shipments.</p>
            
            <h3 className="font-serif text-xl border-b border-[#EAE3D2] pb-2 mb-4 text-[#2D2D2D]">Return Policy</h3>
            <p className="mb-8 text-sm">You have 14 days from the absolute date of arrival to request a return. Returned items must be exactly in original condition, unworn, unwashed, and with all tags attached.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
