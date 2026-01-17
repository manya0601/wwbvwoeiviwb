'use client';

import { useState } from 'react';
import { ChevronRight, Zap, Brain, Link2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const indices = [
  { id: 'ai', name: 'AI Innovation Index', icon: Brain, description: 'Top 15 AI/ML startups' },
  { id: 'blockchain', name: 'Blockchain Builders', icon: Link2, description: 'Web3 infrastructure leaders' },
  { id: 'cyber', name: 'Cloud & Cyber Shield', icon: Shield, description: 'SaaS + Security pioneers' },
];

const allocations: Record<string, { startup: string; allocation: string }[]> = {
  ai: [
    { startup: 'Stability AI', allocation: '40%' },
    { startup: 'Anthropic', allocation: '30%' },
    { startup: 'Cohere', allocation: '30%' },
  ],
  blockchain: [
    { startup: 'Alchemy', allocation: '35%' },
    { startup: 'Chainlink Labs', allocation: '35%' },
    { startup: 'Polygon', allocation: '30%' },
  ],
  cyber: [
    { startup: 'Wiz', allocation: '40%' },
    { startup: 'Snyk', allocation: '30%' },
    { startup: 'Lacework', allocation: '30%' },
  ],
};

export default function InvestmentFlow() {
  const [selectedIndex, setSelectedIndex] = useState('ai');
  const [amount, setAmount] = useState(1000);

  const currentAllocations = allocations[selectedIndex] || allocations.ai;

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6">
      <h3 className="text-lg font-semibold mb-6">Investment Simulator</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Investment Amount</span>
            <span className="text-xs text-muted-foreground">Min: $100</span>
          </div>
          
          <div className="relative mb-6">
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:gradient-bg
                [&::-webkit-slider-thumb]:shadow-md
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>$100</span>
              <span>$10,000</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="text-4xl font-bold gradient-text">${amount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-1">Total Investment</p>
          </div>
        </div>
        
        <div>
          <div className="mb-3 text-sm font-medium">Select Index</div>
          <div className="space-y-2">
            {indices.map((index) => {
              const Icon = index.icon;
              return (
                <button
                  key={index.id}
                  onClick={() => setSelectedIndex(index.id)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 ${
                    selectedIndex === index.id
                      ? 'border-primary bg-accent shadow-sm'
                      : 'border-border/50 hover:bg-accent/50 hover:border-border'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg p-2 ${
                      selectedIndex === index.id 
                        ? 'gradient-bg' 
                        : 'bg-muted'
                    }`}>
                      <Icon className={`h-4 w-4 ${
                        selectedIndex === index.id 
                          ? 'text-primary-foreground' 
                          : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{index.name}</div>
                      <div className="text-xs text-muted-foreground">{index.description}</div>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-colors ${
                    selectedIndex === index.id ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="mt-6 rounded-xl card-gradient border border-border/50 p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-100">
            <Zap className="h-4 w-4 text-amber-600" />
          </div>
          <h4 className="font-semibold">Smart Contract Allocation</h4>
        </div>
        <div className="space-y-3">
          {currentAllocations.map((item) => {
            const allocationPercent = parseFloat(item.allocation) / 100;
            const itemAmount = (amount * allocationPercent).toFixed(0);
            return (
              <div key={item.startup} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                <span className="font-medium">{item.startup}</span>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground">{item.allocation}</span>
                  <span className="font-bold text-lg">${parseInt(itemAmount).toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Button variant="hero" size="lg" className="mt-6 w-full">
        Connect Wallet to Invest
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
