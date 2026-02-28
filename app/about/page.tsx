import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import History from '@/components/home/history';
import Team from '@/components/home/team';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJctRbVI24pQ46FN5riAzSVWGDOSdXUkKUQcJXoKTbIYTtzD6xp7K-d7pR9-5MBZqAq3B89WjAIjow3fQ-VpPkdLmPA2b1jvDD4IK92jKHJuk4nX0GhSIADJ7jGKJHPQpjcJT2IfAVe7OIau-tNY2AfPSZQpfJhTD62MqjD55AZtAuPw7dZhUmW2YOYEGO4ReFEj_LslUUnUoa_3QlTGpJteoEA6HDxvJJvWCydrN57T-pU9Zpw1F0gcd2gDCixW1IBtONsmfyz1l2')" }}
        ></div>
        <div className="absolute inset-0 bg-background-dark/70"></div>
        
        <div className="relative z-10 text-center px-4">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">About Us</span>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6">
            A Legacy of Excellence
          </h1>
        </div>
      </section>

      <History />
      <Team />
      <Footer />
    </main>
  );
}
