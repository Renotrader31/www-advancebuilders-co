import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";
import projectCommercial3 from "@/assets/project-commercial-3.jpg";
import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectResidential3 from "@/assets/project-residential-3.jpg";

const categories = ["All", "Commercial", "Residential", "Handyman"] as const;

const projects = [
  {
    title: "Downtown Office Complex",
    category: "Commercial",
    description: "A 5-story Class A office building featuring modern glass curtain walls, energy-efficient HVAC, and premium tenant finishes.",
    image: projectCommercial1,
    location: "Reno, NV",
    year: "2024",
  },
  {
    title: "Craftsman Custom Home",
    category: "Residential",
    description: "4,200 sq ft custom craftsman home with stone accents, wraparound porch, and high-end interior finishes throughout.",
    image: projectResidential1,
    location: "Sparks, NV",
    year: "2024",
  },
  {
    title: "Industrial Chic Restaurant",
    category: "Commercial",
    description: "Full interior buildout for a 3,500 sq ft restaurant space with exposed brick, custom lighting, and commercial kitchen.",
    image: projectCommercial2,
    location: "Midtown Reno, NV",
    year: "2023",
  },
  {
    title: "Modern Kitchen Renovation",
    category: "Residential",
    description: "Complete kitchen gut-and-remodel with marble countertops, custom cabinetry, and professional-grade appliances.",
    image: projectResidential2,
    location: "South Reno, NV",
    year: "2023",
  },
  {
    title: "Retail Storefront Buildout",
    category: "Commercial",
    description: "Contemporary retail space with curved glass facade, modern interior layout, and custom display installations.",
    image: projectCommercial3,
    location: "Summit Sierra, NV",
    year: "2023",
  },
  {
    title: "Spa Bathroom Remodel",
    category: "Residential",
    description: "Luxury master bath renovation featuring walk-in rain shower, double vanity, and floor-to-ceiling tile work.",
    image: projectResidential3,
    location: "Caughlin Ranch, NV",
    year: "2024",
  },
];

type Category = (typeof categories)[number];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-12">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3" style={{ fontFamily: 'system-ui' }}>
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Our Projects</h1>
            <p className="text-muted-foreground max-w-2xl">
              Take a look at some of the commercial, residential, and handyman projects we've completed for our clients throughout Northern Nevada.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                style={{ fontFamily: 'system-ui' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.title} className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-sm">
                    <span className="text-primary-foreground text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'system-ui' }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: 'system-ui' }}>{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
