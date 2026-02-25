import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Visa", "Education Loans", "Forex", "About Us", "Blog", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-navy-light/30 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-primary-foreground font-heading font-extrabold text-xl tracking-tight">
          Abroad <span className="text-green-brand">Immigrations</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <Button
            variant="secondary"
            className="font-semibold"
            onClick={() => document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            LEARN MORE
          </Button>
        </nav>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:+919985925152" className="text-primary-foreground">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="text-primary-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-navy-light/30 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="px-4 pt-2">
            <Button variant="secondary" className="w-full font-semibold" onClick={() => { setOpen(false); document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" }); }}>
              LEARN MORE
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
