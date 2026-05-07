import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import residentialImg from "@/assets/service-residential.jpg";

const services = [
  "Renovations",
  "Additions",
  "Kitchen & Bath",
  "Flooring & Tile",
  "Interior & Exterior Painting",
  "Roofing & Siding",
  "Decks & Patios",
];

const ResidentialConstruction = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="relative pt-20">
      <div className="relative h-[400px] overflow-hidden">
        <img src={residentialImg} alt="Residential Construction" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-3 rounded-sm">
                <Home className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold" style={{ fontFamily: 'system-ui' }}>Our Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Residential Construction</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              Renovations, additions, and remodels that transform the home you already love.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground mb-6" style={{ fontFamily: 'system-ui' }}>
              Transforming Your Home
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're updating a single room or planning a major remodel, Advance Builders brings craftsmanship and attention to detail to every residential project. We work closely with homeowners to understand their vision and deliver results that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From initial design consultation through final walkthrough, our experienced team manages every aspect of your project. We use quality materials, trusted subcontractors, and proven construction methods to ensure your home is built to last.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              style={{ fontFamily: 'system-ui' }}
            >
              Get a Free Estimate
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'system-ui' }}>What We Offer</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default ResidentialConstruction;