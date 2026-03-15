import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-tighter mb-2 block">
            DEV<span className="text-accent">.</span>PORTFOLIO
          </a>
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Brandon F. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-surface border border-white/5 rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
