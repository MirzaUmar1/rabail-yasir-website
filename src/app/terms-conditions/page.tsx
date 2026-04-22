import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-3xl mx-auto flex flex-col text-left">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-12">Terms & Conditions</h1>
          
          <div className="prose prose-lg text-[#2D2D2D]/80 font-sans leading-relaxed text-sm">
            <p className="mb-6">Welcome to our platform. These Terms & Conditions outline the rules and regulations for using our digital and physical store spaces.</p>
            <p className="mb-6">By accessing this website, we assume you accept these terms and conditions. Do not continue to use Rabail Yasir if you do not agree to take all of the terms and conditions stated on this page.</p>
            <p className="mb-6">All intellectual property rights are reserved. You may access this perfectly structured layout for your own personal use subjected to restrictions set in these terms and conditions.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
