
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Benefits", href: "#benefits" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="container-section py-0">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl font-display font-semibold"
            aria-label="Tiny Agency"
          >
            Tiny<span className="font-light">Agency</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors duration-200 text-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a 
            href="#contact" 
            className={cn(
              "hidden md:flex px-4 py-2 rounded-full font-medium text-sm transition-all duration-300",
              isScrolled
                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                : "bg-white/80 backdrop-blur-sm text-zinc-900 hover:bg-white/90"
            )}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
