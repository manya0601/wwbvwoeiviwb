import { Brain, Link2, Shield, Cloud, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const icons = {
  ai: Brain,
  blockchain: Link2,
  cyber: Shield,
  cloud: Cloud,
};

interface IndexCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  performance: string;
  startups: number;
  minInvestment: number;
  gradient: string;
}

export default function IndexCard({
  title,
  description,
  icon,
  performance,
  startups,
  minInvestment,
  gradient,
}: IndexCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <div className="mb-5 flex items-start justify-between">
        <div className={`rounded-xl bg-gradient-to-br ${gradient} p-3 shadow-md`}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-success" />
          <span className="font-bold text-sm text-success">{performance}</span>
        </div>
      </div>
      
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-sm text-muted-foreground leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between border-t border-border/50 pt-4 mb-5">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{startups} startups</span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">${minInvestment}</div>
          <div className="text-xs text-muted-foreground">minimum</div>
        </div>
      </div>
      
      <Button variant="gradient" className="w-full">
        Invest Now
      </Button>
    </div>
  );
}
