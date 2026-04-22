import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col">
          <h5 className="font-serif text-xl mb-4 text-[#F8F6F0]">Store</h5>
          <Link href="/shop" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Shop All</Link>
          <Link href="/collections" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Collections</Link>
          <Link href="/stores" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Stores</Link>
        </div>
        <div className="flex flex-col">
          <h5 className="font-serif text-xl mb-4 text-[#F8F6F0]">Information</h5>
          <Link href="/shipping-returns" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Shipping & Returns</Link>
          <Link href="/terms-conditions" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="font-sans text-sm text-[#EAE3D2] mb-2 hover:text-[#F8F6F0]">Privacy Policy</Link>
        </div>
        <div className="flex flex-col md:items-end">
          <Link href="/" className="font-serif text-2xl tracking-widest mb-4 text-[#F8F6F0] uppercase hover:opacity-80 transition-opacity">Rabail Yasir</Link>
          <p className="font-sans text-xs text-[#EAE3D2] max-w-xs md:text-right">A better world is possible. Join us on our journey towards a circular fashion industry.</p>
        </div>
      </div>
    </footer>
  );
}
