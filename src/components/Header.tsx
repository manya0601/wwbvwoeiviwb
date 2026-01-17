import { Brain, Wallet, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-bg shadow-md">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tight">NexusVest</span>
            <span className="text-xs font-medium text-muted-foreground">Capital</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Invest', href: '/invest' },
            { label: 'Indices', href: '#indices' },
            { label: 'How It Works', href: '#how-it-works' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="gradient" size="default" className="hidden sm:flex">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
          
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Invest', href: '/invest' },
              { label: 'Indices', href: '#indices' },
              { label: 'How It Works', href: '#how-it-works' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-lg hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="gradient" className="mt-2 w-full">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
