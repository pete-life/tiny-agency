
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang: 'en' | 'da') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span className="uppercase">{language}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-32 rounded-lg shadow-md bg-white/90 backdrop-blur-sm z-50 border border-zinc-100 overflow-hidden"
        >
          <div className="p-1">
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                "flex w-full items-center px-3 py-2 text-sm rounded-md transition-colors",
                language === 'en' 
                  ? "bg-zinc-100 text-zinc-900" 
                  : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('da')}
              className={cn(
                "flex w-full items-center px-3 py-2 text-sm rounded-md transition-colors",
                language === 'da' 
                  ? "bg-zinc-100 text-zinc-900" 
                  : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              Dansk
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
