import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StoresPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-[#2D2D2D] mb-4">Our Stores</h1>
          <p className="font-sans text-[#2D2D2D]/70 mb-16">Visit our physical locations to experience the textiles in person.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full text-left">
            <div className="border border-[#EAE3D2] p-8 rounded bg-white">
              <h3 className="font-serif text-2xl mb-2 text-[#2D2D2D]">Britomart Flagship</h3>
              <p className="font-sans text-sm text-[#2D2D2D]/80 mb-4">Auckland, New Zealand</p>
              <p className="font-sans text-sm text-[#2D2D2D]/60 leading-relaxed">
                104 Quay Street<br/>
                Auckland CBD 1010<br/><br/>
                Mon - Sat: 10:00am - 5:00pm<br/>
                Sun: Closed
              </p>
            </div>
            
            <div className="border border-[#EAE3D2] p-8 rounded bg-white">
              <h3 className="font-serif text-2xl mb-2 text-[#2D2D2D]">Newmarket</h3>
              <p className="font-sans text-sm text-[#2D2D2D]/80 mb-4">Auckland, New Zealand</p>
              <p className="font-sans text-sm text-[#2D2D2D]/60 leading-relaxed">
                4 Teed Street<br/>
                Newmarket 1023<br/><br/>
                Mon - Sun: 10:00am - 5:00pm
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
