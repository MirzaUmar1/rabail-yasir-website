import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F8F6F0] text-[#2D2D2D] py-24 px-6 md:px-12 mt-auto border-t border-[#EAE3D2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col col-span-1 md:col-span-1">
          <h1 className="font-serif text-8xl text-[#c1b199] mb-4">R.Y.</h1>
        </div>

        <div className="flex flex-col">
          <h5 className="font-serif text-xl mb-4 text-[#c1b199] uppercase">Say Hello</h5>
        </div>

        <div className="flex flex-col">
          <p className="font-sans text-sm tracking-widest leading-loose uppercase">
            Islamabad<br />
            Pakistan<br />
            +92 333 1234567
          </p>
        </div>

        <div className="flex flex-col md:items-end">
          <h5 className="font-serif text-xl mb-4 text-[#c1b199] uppercase md:text-right">Follow Us</h5>
          <div className="flex items-center gap-6 mt-2">
            <a href="https://www.instagram.com/baileycandesign/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1b199] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rabail-yasir-48038a319/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c1b199] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
