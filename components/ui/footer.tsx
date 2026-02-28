import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#18150d] pt-20 pb-10 border-t border-[#332e1e]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined">castle</span>
              </div>
              <span className="text-lg font-bold font-serif uppercase tracking-wide">The Grand Heritage</span>
            </div>
            <p className="text-[#c3b998] text-sm leading-relaxed mb-6">
              123 Luxury Boulevard<br/>
              Kensington, London, UK<br/>
              SW7 2AZ
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'X'].map((social) => (
                <a key={social} href="#" className="size-8 rounded-full bg-[#2a261a] flex items-center justify-center text-[#c3b998] hover:bg-primary hover:text-[#201d12] transition-colors">
                  <span className="font-bold text-xs">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="flex flex-col gap-3">
              {['Accommodations', 'Fine Dining', 'Wellness & Spa', 'Events', 'Offers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#c3b998] hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#c3b998] hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Stay Connected</h3>
            <p className="text-[#c3b998] text-sm mb-4">Join our exclusive guest list for updates and special offers.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-[#2a261a] border-none rounded-lg py-3 px-4 text-white placeholder:text-[#605739] focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
              <button type="button" className="bg-primary text-[#201d12] font-bold py-3 rounded-lg hover:bg-[#b5952d] transition-colors text-sm uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#332e1e]">
          <p className="text-[#605739] text-xs">© 2023 The Grand Heritage Hotel. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[#605739] text-xs">Operational Status: Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
