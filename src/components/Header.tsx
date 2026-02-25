import { useState, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  "Home",
  "Visa",
  "Education Loans",
  "Forex",
  "About Us",
  "Blog",
  "Contact",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToForm = useCallback(() => {
    setOpen(false);
    document
      .getElementById("hero-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-navy-light/30 backdrop-blur-md">
      {/* Top bar */}
      <div className="bg-primary-foreground/5">
        <div className="container flex items-center flex-wrap justify-between h-[60px] text-xs md:text-sm text-primary-foreground/80">
          <div className="flex items-center gap-3">
            <span className="font-medium">Help :</span>
            <a
              href="tel:+918977533255"
              className="font-bold text-primary-foreground hover:underline"
            >
              +91 89775 33255
            </a>
            <span className="opacity-50">|</span>
            <a
              href="tel:+919032730825"
              className="font-bold text-primary-foreground hover:underline"
            >
              +91 90327 30825
            </a>
          </div>
          <span className="float-right text-primary-foreground/80">
            Monday – Sunday · 9 AM to 8 PM
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-primary-foreground font-heading font-extrabold text-xl tracking-tight"
        >
          Visa<span className="text-green-brand">axis</span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          role="navigation"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm font-medium text-primary-foreground/80 transition hover:text-primary-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-brand after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <Button variant="secondary" className="font-semibold" onClick={scrollToForm}>
            LEARN MORE
          </Button>
        </nav>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="tel:+918977533255" aria-label="Call us">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-primary-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden bg-primary border-t border-navy-light/30"
          role="navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block px-5 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="px-5 py-4">
            <Button
              variant="secondary"
              className="w-full font-semibold"
              onClick={scrollToForm}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;