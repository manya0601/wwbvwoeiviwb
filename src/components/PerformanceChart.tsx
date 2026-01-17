'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', ai: 100, blockchain: 100, cyber: 100, sp500: 100 },
  { month: 'Feb', ai: 115, blockchain: 130, cyber: 110, sp500: 102 },
  { month: 'Mar', ai: 125, blockchain: 180, cyber: 125, sp500: 105 },
  { month: 'Apr', ai: 135, blockchain: 220, cyber: 140, sp500: 108 },
  { month: 'May', ai: 140, blockchain: 200, cyber: 155, sp500: 110 },
  { month: 'Jun', ai: 145, blockchain: 220, cyber: 160, sp500: 115 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function PerformanceChart() {
  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Index Performance</h3>
          <p className="text-sm text-muted-foreground">6 month comparison</p>
        </div>
        <div className="flex gap-2">
          {['1M', '3M', '6M', '1Y', 'ALL'].map((period) => (
            <button
              key={period}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                period === '6M' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-accent'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Line 
              type="monotone" 
              dataKey="ai" 
              name="AI Index" 
              stroke="hsl(221, 83%, 53%)" 
              strokeWidth={2.5}
              dot={{ r: 4, fill: 'hsl(221, 83%, 53%)' }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="blockchain" 
              name="Blockchain Index" 
              stroke="hsl(270, 70%, 60%)" 
              strokeWidth={2.5}
              dot={{ r: 4, fill: 'hsl(270, 70%, 60%)' }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="cyber" 
              name="Cyber Index" 
              stroke="hsl(142, 76%, 36%)" 
              strokeWidth={2.5}
              dot={{ r: 4, fill: 'hsl(142, 76%, 36%)' }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="sp500" 
              name="S&P 500" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3, fill: 'hsl(var(--muted-foreground))' }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
