
import { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'da';

type Translations = {
  [key: string]: {
    [lang in Language]: string;
  };
};

const translations: Translations = {
  // Hero section
  'hero.badge': {
    en: 'AI-Powered Workflow Automation',
    da: 'AI-drevet arbejdsgangsautomatisering'
  },
  'hero.title': {
    en: 'Making businesses more efficient with',
    da: 'Gør virksomheder mere effektive med'
  },
  'hero.titleHighlight': {
    en: 'AI automation',
    da: 'AI-automatisering'
  },
  'hero.description': {
    en: 'We help businesses save time, boost efficiency, and grow revenue by automating workflows with AI and no-code solutions.',
    da: 'Vi hjælper virksomheder med at spare tid, øge effektiviteten og vækste omsætningen ved at automatisere arbejdsgange med AI og no-code løsninger.'
  },
  'hero.cta.primary': {
    en: 'Get Started',
    da: 'Kom i gang'
  },
  'hero.cta.secondary': {
    en: 'Explore Services',
    da: 'Udforsk tjenester'
  },
  'hero.scroll': {
    en: 'Discover our services',
    da: 'Opdag vores tjenester'
  },
  
  // Workflow visualization
  'workflow.trigger': {
    en: 'Trigger',
    da: 'Udløser'
  },
  'workflow.email': {
    en: 'Email',
    da: 'E-mail'
  },
  'workflow.database': {
    en: 'Database',
    da: 'Database'
  },
  'workflow.document': {
    en: 'Document',
    da: 'Dokument'
  },
  'workflow.complete': {
    en: 'Complete',
    da: 'Færdig'
  },
  'workflow.notification': {
    en: 'Process completed!',
    da: 'Proces fuldført!'
  },
  
  // Navigation
  'nav.services': {
    en: 'Services',
    da: 'Tjenester'
  },
  'nav.benefits': {
    en: 'Benefits',
    da: 'Fordele'
  },
  'nav.process': {
    en: 'Process',
    da: 'Proces'
  },
  'nav.contact': {
    en: 'Contact',
    da: 'Kontakt'
  },
  
  // Footer
  'footer.copyright': {
    en: 'All rights reserved.',
    da: 'Alle rettigheder forbeholdes.'
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
