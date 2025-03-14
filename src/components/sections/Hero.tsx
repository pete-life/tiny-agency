
import GlassCard from "../ui/GlassCard";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(255,255,255,1)_60%,rgba(247,247,252,1)_100%)] fade-mask"
        aria-hidden="true"
      />
      
      {/* Decorative background dots */}
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />
      
      <div className="container-section pt-0 pb-20 md:pb-32 text-center">
        <span className="inline-block mb-6 py-1 px-3 rounded-full bg-zinc-100/80 backdrop-blur-sm text-xs font-medium text-zinc-800 animate-fade-in">
          AI-Powered Workflow Automation
        </span>
        
        <h1 className="max-w-4xl mx-auto mb-6 font-display animate-scale-in text-balance">
          Making businesses more efficient with <span className="text-gradient">AI automation</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg text-zinc-600 mb-10 animate-slide-up delay-100 text-balance">
          We help businesses save time, boost efficiency, and grow revenue by automating workflows with AI and no-code solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-200">
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm"
          >
            Get Started
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 rounded-full bg-white text-zinc-900 hover:bg-zinc-50 transition-colors border border-zinc-200 shadow-sm"
          >
            Explore Services
          </a>
        </div>
        
        <div className="animate-slide-up delay-300">
          <GlassCard className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-zinc-100 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12H8M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Automation Platform Demo</h3>
                <p className="text-zinc-600">Preview image or video would appear here</p>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <a 
          href="#services" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors animate-fade-in opacity-80 hover:opacity-100"
          aria-label="Scroll down to see services"
        >
          Discover our services
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
