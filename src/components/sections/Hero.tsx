
import { useLanguage } from "@/contexts/LanguageContext";
import GlassCard from "../ui/GlassCard";
import WorkflowVisual from "../ui/WorkflowVisual";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
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
      
      {/* Language switcher (top right) */}
      <div className="absolute top-8 right-8 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="container-section pt-0 pb-20 md:pb-32 text-center">
        <span className="inline-block mb-6 py-1 px-3 rounded-full bg-zinc-100/80 backdrop-blur-sm text-xs font-medium text-zinc-800 animate-fade-in">
          {t('hero.badge')}
        </span>
        
        <h1 className="max-w-4xl mx-auto mb-6 font-display animate-scale-in text-balance">
          {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg text-zinc-600 mb-10 animate-slide-up delay-100 text-balance">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-200">
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm"
          >
            {t('hero.cta.primary')}
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 rounded-full bg-white text-zinc-900 hover:bg-zinc-50 transition-colors border border-zinc-200 shadow-sm"
          >
            {t('hero.cta.secondary')}
          </a>
        </div>
        
        <div className="animate-slide-up delay-300">
          <GlassCard className="max-w-4xl mx-auto">
            <WorkflowVisual />
          </GlassCard>
        </div>
        
        <a 
          href="#services" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors animate-fade-in opacity-80 hover:opacity-100"
          aria-label="Scroll down to see services"
        >
          {t('hero.scroll')}
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
