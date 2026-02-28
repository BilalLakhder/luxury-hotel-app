import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Hero from '@/components/home/hero';
import History from '@/components/home/history';
import Team from '@/components/home/team';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />
      <Hero />
      
      {/* Introduction */}
      <section className="py-24 px-6 bg-surface-dark border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Welcome to The Grand Heritage</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            &quot;A timeless icon where history whispers in the halls and luxury knows no bounds.&quot;
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light">
            Located in the heart of the city, The Grand Heritage has been the preferred address for royalty, dignitaries, and discerning travelers since 1920. We invite you to experience our legendary hospitality.
          </p>
          <div className="relative h-16 w-64 mx-auto opacity-50 invert">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
              alt="Signature" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-primary text-sm font-bold uppercase tracking-widest mt-4">Eleanor Vance, General Manager</p>
        </div>
      </section>

      <History />
      
      {/* Rooms Teaser (Pinnacle Style) */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Accommodations</span>
              <h2 className="text-4xl font-serif font-bold text-white">Sanctuaries of Serenity</h2>
            </div>
            <Link href="/rooms" className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
              <span>View All Suites</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {[
               { title: 'Ocean Suite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjVW-9ahbEJIkZRjIvhQxVTyIgI84iGHvmt4LVO8VSKqfWTI0GQ6k0vwkSnQ5-7QMXkyfDIhh5FvQCIRtIlBlagC6EAj_SkSuCNJ8mQ9-62CVnRtavgqMVTCCdEquawDr5xXvnfvkkQOENQYdK-TErLi85DaS9eCz-M0piwG2JT6Fy7vIjsav7TP8rOMfDqiCMxpGkiimdPmZrSfSR9Y2eZZ6b8-firSazNlBYu_f5ZBBmXzek2-FEChT7frHTk4pHwe0c2YjFCGe0' },
               { title: 'Garden Villa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsm7H2-DH9m5jwIkho4sD3GWgDGsFCIAHnJYGQIvJzJ07siKwnwybOOWJ0i5yUMk95_3OUnw0_HFVUlonAFE3ulBZpWCZOSc-NyIBqs3yRm684HovdDG1X_13jtvNwFr1EpS1Brz3CW9C0NtxH4sD8b5wPCZZsekZshrgYH-OMO48mE548cS9vpsfGHqfhPbSPO5TnH4_Hms99-v2rfpST0ZdwZnnmMmA4gtKH9vFAbQq36pf1wLxb-e6_41Zpghlah3k27rlJkoDo' },
               { title: 'Royal Penthouse', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuDngPOEPbpnS1ult7ONuvHf3Iz72tKF_VsrDL06p8lxnlschG8LP3GPBTw0ovQs73KtUoJYIS9oLsXnXma0DioBisKj9-1GWSW9AaVZnS_6RbnsDrF32-Eu_ko6FybXBZ42-bKAdZUJBc0_k7oMNMfHVL2SfdCIMYcKirEpvmazigP-8hpq4vAocQ8xMfr7CtXU1MuXdW0W6Wd0NosEWP4XYbu7wZIyHD60H-NZTRQny1tqa0JT59C5QYzWx8Kl_TzPvUfUf9IsaF' }
             ].map((room) => (
               <Link href="/rooms" key={room.title} className="group relative h-[400px] overflow-hidden rounded-lg block">
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                   style={{ backgroundImage: `url('${room.img}')` }}
                 ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                 <div className="absolute bottom-6 left-6">
                   <h3 className="text-2xl font-serif font-bold text-white mb-2">{room.title}</h3>
                   <span className="text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">Explore</span>
                 </div>
               </Link>
             ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/rooms" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors uppercase tracking-widest text-sm font-bold">
              <span>View All Suites</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </main>
  );
}
