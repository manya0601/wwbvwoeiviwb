import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IndexCard from '@/components/IndexCard';
import PerformanceChart from '@/components/PerformanceChart';
import InvestmentFlow from '@/components/InvestmentFlow';
import VertexAIDemo from '@/components/VertexAIDemo';
import Footer from '@/components/Footer';

const indices = [
  {
    title: 'AI Innovation Index',
    description: 'Top 15 artificial intelligence and machine learning startups transforming industries.',
    icon: 'ai' as const,
    performance: '+45%',
    startups: 15,
    minInvestment: 100,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Blockchain Builders',
    description: 'Leading Web3 infrastructure and DeFi protocols building the decentralized future.',
    icon: 'blockchain' as const,
    performance: '+120%',
    startups: 12,
    minInvestment: 100,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & Cyber Shield',
    description: 'SaaS, cloud infrastructure, and cybersecurity pioneers protecting digital assets.',
    icon: 'cyber' as const,
    performance: '+60%',
    startups: 18,
    minInvestment: 100,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Future Horizons',
    description: 'Real Estate Tech, Social Media 3.0, and Space Tech ventures shaping tomorrow.',
    icon: 'cloud' as const,
    performance: '+85%',
    startups: 10,
    minInvestment: 100,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        {/* Indices Section */}
        <section id="indices" className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thematic Indices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diversified exposure to high-growth startup sectors, curated by AI and vetted by experts.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {indices.map((index, i) => (
              <div 
                key={index.title} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <IndexCard {...index} />
              </div>
            ))}
          </div>
        </section>
        
        {/* Charts & Investment Section */}
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <PerformanceChart />
            <InvestmentFlow />
          </div>
        </section>
        
        {/* AI Demo Section */}
        <section id="how-it-works" className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our Vertex AI system analyzes startups and matches them to the right indices.
            </p>
          </div>
          <VertexAIDemo />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
