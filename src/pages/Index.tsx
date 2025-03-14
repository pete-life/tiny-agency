
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Tiny Agency - AI Workflow Automation";
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Contact />
      </main>
      
      <footer className="bg-white py-8 border-t border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-xl font-display font-semibold"
                aria-label="Tiny Agency"
              >
                Tiny<span className="font-light">Agency</span>
              </a>
              <p className="text-sm text-zinc-500 mt-1">
                AI-powered workflow automation
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <a href="#services" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Services
              </a>
              <a href="#benefits" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Benefits
              </a>
              <a href="#process" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Process
              </a>
              <a href="#contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-zinc-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Tiny Agency. All rights reserved.
            </p>
            
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
