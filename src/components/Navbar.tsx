import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const navLinks: { to: string; label: string; isAnchor?: boolean }[] = [
  { to: "/residential-construction", label: "Residential" },
  { to: "/commercial-construction", label: "Commercial" },
  { to: "/projects", label: "Projects" },
  { to: "/#about", label: "About", isAnchor: true },
  { to: "/#contact", label: "Get a Free Quote", isAnchor: true },
];

const linkClass =
  "text-secondary-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-widest";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <img src={logo} alt="Advance Builders" className="h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.isAnchor ? (
              <a key={l.to} href={l.to} className={linkClass}>
                {l.label}
              </a>
            ) : (
              <Link key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+17758467796"
            className="hidden sm:flex items-center gap-2 text-primary font-semibold text-sm"
          >
            <Phone className="h-4 w-4" />
            (775) 846-7796
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-secondary-foreground p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) =>
              l.isAnchor ? (
                <a key={l.to} href={l.to} onClick={close} className={linkClass}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.to} to={l.to} onClick={close} className={linkClass}>
                  {l.label}
                </Link>
              )
            )}
            <a
              href="tel:+17758467796"
              className="flex sm:hidden items-center gap-2 text-primary font-semibold text-sm pt-2 border-t border-secondary-foreground/10"
              onClick={close}
            >
              <Phone className="h-4 w-4" />
              (775) 846-7796
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
