import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F0]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="max-w-3xl mx-auto flex flex-col text-left">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-12">Privacy Policy</h1>
          
          <div className="prose prose-lg text-[#2D2D2D]/80 font-sans leading-relaxed text-sm">
            <p className="mb-6">Your privacy is critically important to us. This policy describes how your personal information is collected, used, and shared when you visit or make a purchase.</p>
            <p className="mb-6">We collect standard device information and securely process orders precisely utilizing secure third-quarter processing. Please rest assured that no data is sold to non-partner external analytics endpoints.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
