import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SustainabilityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="font-sans text-sm tracking-widest text-[#2D2D2D]/60 uppercase mb-4">Our Ethos</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2D2D2D] mb-12">A Better World</h1>
          
          <div className="prose prose-lg text-[#2D2D2D]/80 text-left font-sans leading-relaxed">
            <p className="mb-8">
              We started with a vision to prove that the fashion industry can and must be part of the climate solution. Over the past decade, we have aggressively rebuilt our entire supply chain to ensure every garment we create acts as a carbon sink rather than a net emitter.
            </p>
            <p className="mb-8 font-serif text-2xl text-[#2D2D2D] leading-snug text-center py-6 border-y border-[#EAE3D2]">
              "Sustainability is not a marketing tool. It is the absolute prerequisite to our right to operate on this planet."
            </p>
            <p className="mb-8">
              Our commitments are deeply embedded into our material choices. Over 90% of our collections are currently manufactured using deadstock fabrics, regenerative organic cotton, or cutting-edge recycled fibers. Our ultimate goal is strict circularity: designing silhouettes that outlive trends and using textiles that can safely return to the earth.
            </p>
            <h3 className="font-serif text-2xl text-[#2D2D2D] mt-12 mb-4">Traceability</h3>
            <p>
              We ensure our partners pay living wages, protect worker rights, and operate transparently. You can scan the QR code on any of our garments to see its exact journey from farm to factory. 
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
