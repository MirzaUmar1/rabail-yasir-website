import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#151414] text-[#EAE3D2] py-24 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col col-span-1 md:col-span-1">
          <h1 className="font-serif text-8xl text-white mb-4">R.Y.</h1>
        </div>

        <div className="flex flex-col">
          <h5 className="font-serif text-xl mb-4 text-white uppercase">Say Hello</h5>
        </div>

        <div className="flex flex-col">
          <p className="font-sans text-sm tracking-widest leading-loose uppercase">
            123 Downtown St.<br />
            Dubai, UAE<br />
            UAE<br />
            (+9223) 456 7890
          </p>
        </div>

        <div className="flex flex-col md:items-end">
          <h5 className="font-serif text-xl mb-4 text-white uppercase md:text-right">Follow Us</h5>
          <div className="flex flex-col md:items-end gap-2 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Facebook Rabail Yasir</a>
            <a href="#" className="hover:text-white transition-colors">Instagram Rabail Yasir</a>
            <a href="#" className="hover:text-white transition-colors">TikTok Rabail Yasir</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
