import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-10 w-10 rounded bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: 'system-ui' }}>AB</span>
        </div>
        <span className="text-secondary-foreground text-xl font-bold tracking-tight" style={{ fontFamily: 'system-ui' }}>
          Advance Builders
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <a href="/#services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest">Services</a>
        <Link to="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest">Projects</Link>
        <a href="/#about" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest">About</a>
        <a href="/#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest">Contact</a>
      </div>
      <a href="tel:+15551234567" className="hidden sm:flex items-center gap-2 text-primary font-semibold text-sm">
        <Phone className="h-4 w-4" />
        (555) 123-4567
      </a>
    </div>
  </nav>
);

export default Navbar;
