import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/918977533255?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-secondary-foreground" />
  </a>
);

export default FloatingWhatsApp;
