import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import RoomsHero from '@/components/rooms/hero';
import RoomGrid from '@/components/rooms/room-grid';

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />
      <RoomsHero />
      
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {['All Suites', 'Ocean View', 'Garden Access', 'Penthouse', 'Family'].map((filter, i) => (
              <button 
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-primary text-background-dark' : 'bg-surface-dark text-white hover:bg-white/10'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Sort by:</span>
            <select className="bg-surface-dark border-none rounded px-3 py-1 text-white focus:ring-1 focus:ring-primary cursor-pointer">
              <option>Recommended</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>
        
        <RoomGrid />
      </section>
      
      <Footer />
    </main>
  );
}
