import { ArrowRight, TrendingUp, Users, Lock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const liveIndices = [
  { name: 'AI Innovation', value: '+45%', width: '45%', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Blockchain Builders', value: '+120%', width: '100%', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Cloud & Cyber', value: '+60%', width: '60%', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Future Horizons', value: '+85%', width: '85%', gradient: 'from-orange-500 to-red-500' },
  { name: 'S&P 500', value: '+15%', width: '15%', gradient: 'from-gray-400 to-gray-600' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              Live on Ethereum Mainnet
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The{' '}
              <span className="gradient-text">S&P 500</span>{' '}
              for Startups
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Democratizing access to high-growth private markets through AI-powered thematic indices. 
              Invest in the future, starting at just <span className="font-semibold text-foreground">$100</span>.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Start Investing
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
                { icon: TrendingUp, value: '+45%', label: 'AI Index (1Y)', color: 'text-success' },
                { icon: Users, value: '10K+', label: 'Investors', color: 'text-primary' },
                { icon: Lock, value: '$100', label: 'Minimum', color: 'text-secondary' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Live Index Performance</h3>
                <span className="text-xs text-muted-foreground">Last 12 months</span>
              </div>
              
              <div className="space-y-5">
                {liveIndices.map((index, i) => (
                  <div key={index.name} className="space-y-2" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{index.name}</span>
                      <span className={`font-bold text-sm ${index.name === 'S&P 500' ? 'text-muted-foreground' : 'text-success'}`}>
                        {index.value}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${index.gradient} animate-progress`}
                        style={{ '--progress-width': index.width } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                  Past performance does not guarantee future results
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full gradient-bg text-primary-foreground text-xs font-semibold shadow-lg animate-float">
              AI-Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
