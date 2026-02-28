import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import DiningHero from '@/components/dining/dining-hero';
import WellnessSection from '@/components/dining/wellness-section';
import Link from 'next/link';

export default function DiningPage() {
  return (
    <main className="min-h-screen bg-background-navy">
      <Navbar />
      <DiningHero />
      
      {/* Introduction */}
      <section className="py-20 px-6 bg-surface-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block font-display">Gastronomy</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            A Symphony of Flavors
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-sans font-light">
            Led by Executive Chef Julian Thorne, our culinary team sources the finest local ingredients to create dishes that are as visually stunning as they are delicious. From casual al fresco dining to our Michelin-starred signature restaurant, every meal is an occasion.
          </p>
        </div>
      </section>
      
      {/* Restaurants Grid */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative h-[500px] overflow-hidden rounded-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGVyo3ZJjeSxakpHC9AB4COgPh_r01-de79iBD1IRMn2-aPKLExHm7JshHv8WXOimzTy-_hbChABxyIiShZIcD-PtQDT5oUta_vB6qFCyi5QDuRDSIWkPz1rEHNvXQyXXiOyXqb6kxUTz-4Uw9_M8mRMKsElnU6GYldhXuMFnb4NUWo0RCN9V8UBY3cgayi8UufodOZR9CeqM4H_MQ4BygCX2brScJyHP9lIFKn0g0xdGygXo22CIoU5P8U349t_9p2yNi5eU29_SF')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="bg-primary text-background-navy text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">Signature Dining</span>
              <h3 className="text-3xl font-display font-bold text-white mb-2">The Aurelia Room</h3>
              <p className="text-slate-300 mb-6 line-clamp-2">Fine dining featuring modern European cuisine with an Asian twist. Extensive wine list and private dining available.</p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                <span>Reserve Table</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <div className="group relative h-[500px] overflow-hidden rounded-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9xVDnxlvgEyd9pvMPOO4ylhWm-cbxC3YBuTE7gudqQXywAVeEbAVCl2L6H0snFM1MYXNv2ssJ6uwGz78rMXHqCLQ6uwKvSUwK5sNWzLD8zxWKGKLtc8cGeddtJKAFage9R64N_nUQz7uToVKtWapY-Ibocy1KXSKJWWvYrsw3G6jznBnSPRQLhvwDWdjKJ3kB97hQbNoGeCsMpPoR1U-JVN8n0MF3Id8IxwUDshh3UbW2s8o0XYAKsI5wFOgS20hq1tTM-k2HL6SZ')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="bg-white text-background-navy text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">Casual & Cocktails</span>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Skyline Lounge</h3>
              <p className="text-slate-300 mb-6 line-clamp-2">Rooftop bar offering artisanal cocktails, small plates, and breathtaking views of the city skyline at sunset.</p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                <span>View Menu</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <WellnessSection />
      
      <Footer />
    </main>
  );
}
