import commercialImg from "@/assets/service-commercial.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import { Building2, Home } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Commercial Construction",
    description: "From office buildings to retail spaces, we deliver commercial projects on time and on budget with uncompromising quality.",
    image: commercialImg,
    icon: Building2,
    items: ["Office Buildings", "Retail Spaces", "Warehouses", "Tenant Improvements"],
    link: "/commercial-construction",
  },
  {
    title: "Residential Construction",
    description: "Renovations, additions, and remodels that transform your home into something extraordinary.",
    image: residentialImg,
    icon: Home,
    items: ["Renovations", "Additions", "Kitchen & Bath", "Flooring & Tile"],
    link: "/residential-construction",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3" style={{ fontFamily: 'system-ui' }}>
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link to={service.link} key={service.title} className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-primary p-3 rounded-sm">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'system-ui' }}>{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider group-hover:underline" style={{ fontFamily: 'system-ui' }}>
                  Learn More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
