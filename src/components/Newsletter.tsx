"use client";

export default function Newsletter() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#EAE3D2]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#2D2D2D] mb-6 drop-shadow-sm">
          Join the Journey
        </h2>
        <p className="font-sans text-sm text-[#2D2D2D]/80 mb-12 max-w-lg">
          Subscribe to our newsletter to receive intimate brand updates, access to exclusive archival collections, and first looks at our newest designs before they are released.
        </p>
        
        <form className="w-full relative flex items-center justify-center" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full max-w-md bg-transparent border-b border-[#2D2D2D]/40 pb-3 font-sans text-sm text-[#2D2D2D] placeholder:text-[#2D2D2D]/50 focus:outline-none focus:border-[#2D2D2D] transition-colors"
            required
          />
          <button 
            type="submit" 
            className="absolute right-0 bottom-2 text-xs font-sans uppercase tracking-widest text-[#2D2D2D] hover:opacity-60 transition-opacity pr-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
