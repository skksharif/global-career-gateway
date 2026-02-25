import { Phone, MapPin, Clock, Facebook, Twitter, Youtube } from "lucide-react";

const quickLinks = ["Home", "Education Loans", "Forex", "Visa", "About Us", "Contact"];
const destinations = ["USA", "UK", "Canada", "Australia", "Germany", "Ireland"];

const Footer = () => (
  <footer className="bg-primary pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* About */}
        <div>
          <h3 className="text-lg font-extrabold text-primary-foreground mb-4">
            Visa<span className="text-green-brand">axsis</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
            Grab Your Global Career Journey With Us. We provide end-to-end support for education loans, forex, visa processing, and university admissions.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Icon className="w-4 h-4 text-primary-foreground/70" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-primary-foreground/60 hover:text-green-brand transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Top Destinations</h4>
          <ul className="space-y-2">
            {destinations.map((d) => (
              <li key={d}>
                <span className="text-sm text-primary-foreground/60">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-primary-foreground mb-4">Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-green-brand mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/60">
                <p>+91 89775 33255</p>
                <p>+91 90327 30825</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-green-brand mt-0.5 flex-shrink-0" />
              <p className="text-sm text-primary-foreground/60">Mon – Fri | 09:00 AM – 05:00 PM</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-brand mt-0.5 flex-shrink-0" />
              <p className="text-sm text-primary-foreground/60">KPR Complex, 3rd Floor, MIG-155, Road No-1, KPHB, Kukatpally, Hyderabad – 500085</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">© 2025 Visa axsis. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
