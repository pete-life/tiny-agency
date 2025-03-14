
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang: 'en' | 'da') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const getLanguageName = (lang: 'en' | 'da') => {
    return lang === 'en' ? 'EN' : 'DA';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 px-2 py-1.5 rounded-full text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white/80 backdrop-blur-sm transition-all"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={14} className="text-zinc-500" />
        <span>{getLanguageName(language)}</span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-1 w-24 rounded-lg shadow-md bg-white/90 backdrop-blur-sm z-50 border border-zinc-100 overflow-hidden"
        >
          <div className="p-1">
            <button
              onClick={() => changeLanguage('en')}
              className={cn(
                "flex w-full items-center px-2 py-1.5 text-xs rounded-md transition-colors",
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
                "flex w-full items-center px-2 py-1.5 text-xs rounded-md transition-colors",
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
