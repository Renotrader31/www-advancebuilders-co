import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm" style={{ fontFamily: 'system-ui' }}>AB</span>
            </div>
            <span className="text-secondary-foreground text-lg font-bold" style={{ fontFamily: 'system-ui' }}>Advance Builders</span>
          </div>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Quality construction services for commercial, residential, and handyman needs. Licensed, insured, and committed to excellence.
          </p>
        </div>
        <div>
          <h4 className="text-secondary-foreground font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'system-ui' }}>Quick Links</h4>
          <div className="space-y-2">
            <a href="#services" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Services</a>
            <a href="#about" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">About Us</a>
            <a href="#contact" className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-foreground font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: 'system-ui' }}>Contact Info</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Phone className="h-4 w-4 text-primary" /> (555) 123-4567
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Mail className="h-4 w-4 text-primary" /> info@buildcraft.com
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <MapPin className="h-4 w-4 text-primary" /> 123 Construction Ave
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 pt-6 text-center">
        <p className="text-secondary-foreground/40 text-sm">
          © {new Date().getFullYear()} Advance Builders. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
