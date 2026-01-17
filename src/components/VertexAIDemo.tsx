'use client';

import { useState } from 'react';
import { Brain, CheckCircle, Loader, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockStartups = [
  { name: 'NeuroSync AI', sector: 'Healthcare AI', funding: '$15M', teamScore: 88 },
  { name: 'ChainForge', sector: 'Blockchain Infrastructure', funding: '$8M', teamScore: 92 },
  { name: 'CloudShield', sector: 'Cybersecurity', funding: '$12M', teamScore: 85 },
  { name: 'QuantumLeap', sector: 'Quantum Computing', funding: '$25M', teamScore: 95 },
];

interface Result {
  name: string;
  index: string;
  confidence: number;
}

export default function VertexAIDemo() {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  const analyzeStartups = async () => {
    setAnalyzing(true);
    setResults([]);
    
    // Simulate Vertex AI API call with staggered results
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResults([
      { name: 'NeuroSync AI', index: 'AI Innovation', confidence: 0.92 },
      { name: 'ChainForge', index: 'Blockchain Builders', confidence: 0.88 },
      { name: 'CloudShield', index: 'Cloud & Cyber', confidence: 0.85 },
      { name: 'QuantumLeap', index: 'AI Innovation', confidence: 0.96 },
    ]);
    setAnalyzing(false);
  };

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl gradient-bg p-3 shadow-md">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Vertex AI Analysis</h3>
          <p className="text-sm text-muted-foreground">Real-time startup index matching powered by Google Cloud</p>
        </div>
      </div>
      
      <div className="mb-6 overflow-hidden rounded-xl border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">Startup</th>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">Sector</th>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">Funding</th>
                <th className="p-4 text-left text-sm font-medium text-muted-foreground">Team Score</th>
              </tr>
            </thead>
            <tbody>
              {mockStartups.map((startup, index) => (
                <tr key={startup.name} className="border-t border-border/50 transition-colors hover:bg-muted/30">
                  <td className="p-4 font-medium">{startup.name}</td>
                  <td className="p-4 text-muted-foreground">{startup.sector}</td>
                  <td className="p-4 font-semibold">{startup.funding}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-20 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full rounded-full gradient-bg transition-all duration-500"
                          style={{ width: `${startup.teamScore}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{startup.teamScore}/100</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <Button
        variant="hero"
        size="lg"
        onClick={analyzeStartups}
        disabled={analyzing}
        className="mb-6 w-full"
      >
        {analyzing ? (
          <>
            <Loader className="h-4 w-4 animate-spin" />
            Vertex AI Analyzing...
          </>
        ) : (
          <>
            <Brain className="h-4 w-4" />
            Analyze with Vertex AI
          </>
        )}
      </Button>
      
      {results.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <h4 className="font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            AI Recommendations
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div
                key={result.name}
                className="rounded-xl border border-border/50 card-gradient p-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold">{result.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Recommended: <span className="font-medium text-foreground">{result.index}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">
                      {(result.confidence * 100).toFixed(0)}%
                    </div>
                    <div className="text-xs text-muted-foreground">confidence</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span>Meets all criteria for {result.index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
