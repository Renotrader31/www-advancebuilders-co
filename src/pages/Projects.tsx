import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import residentialRemodel from "@/assets/residential-remodel-hd.png";
import deckPergola from "@/assets/deck-pergola-after.jpg.asset.json";
import seoulfulBitesBefore from "@/assets/seoulful-bites-before.jpg.asset.json";
import seoulfulBitesAfter from "@/assets/seoulful-bites-after.jpg.asset.json";
import seoulfulBitesAfter2 from "@/assets/seoulful-bites-after-2.jpg.asset.json";
import seoulfulBitesAfter3 from "@/assets/seoulful-bites-after-3.jpg.asset.json";

const categories = ["All", "Residential", "Commercial", "Handyman"] as const;

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImages?: string[];
  location: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Composite Deck & Cedar Pergola",
    category: "Residential",
    description:
      "Custom backyard build featuring a low-maintenance composite deck, a cedar pergola with steel bracket hardware, and flagstone walkway landscaping.",
    image: deckPergola.url,
    location: "Reno, NV",
    year: "2025",
  },
  {
    title: "Seoulful Bites Build-Out",
    category: "Commercial",
    description:
      "Complete commercial tenant improvement for a self-service ramen bar, transforming an unfinished shell into a vibrant retail and dining experience.",
    image: seoulfulBitesAfter.url,
    beforeImage: seoulfulBitesBefore.url,
    afterImages: [seoulfulBitesAfter2.url, seoulfulBitesAfter3.url],
    location: "Reno, NV",
    year: "2025",
  },
  {
    title: "Remodels",
    category: "Residential",
    description: "Finished residential kitchen remodel featuring custom cabinetry, an oversized island, modern fixtures, and warm natural finishes.",
    image: residentialRemodel,
    location: "Reno, NV",
    year: "2025",
  },
];

const projectLists: Record<string, string[]> = {
  Residential: [
    "Bathroom and Kitchen Remodel",
    "Multi Family Building Renovation",
  ],
  Commercial: [
    "New Restaurant Build-Out",
    "Salon Build-Out",
    "Restaurant Renovation",
    "Insurance Renovation",
    "Bar/Nightclub Remodel",
  ],
  Handyman: [
    "Contact us to learn about recent handyman projects and repairs we've completed.",
  ],
};

type Category = (typeof categories)[number];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const visibleCategories = activeCategory === "All"
    ? categories.filter((c) => c !== "All")
    : [activeCategory];

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
              Take a look at some of the residential, commercial, and handyman projects we've completed for clients across the Reno-Sparks, Carson City, and Tahoe area.
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
                  {project.beforeImage ? (
                    <div className="grid grid-cols-2 h-full gap-px bg-border">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.beforeImage}
                          alt={`${project.title} before`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-2 left-2 bg-secondary/90 text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                          Before
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} after`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                          After
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-sm">
                    <span className="text-primary-foreground text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'system-ui' }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                {project.afterImages && project.afterImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-px bg-border border-t border-border">
                    {project.afterImages.map((img, i) => (
                      <div key={i} className="relative h-32 overflow-hidden">
                        <img
                          src={img}
                          alt={`${project.title} after ${i + 2}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                          After
                        </span>
                      </div>
                    ))}
                  </div>
                )}
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

          {/* Project Name Lists */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCategories.map((cat) => (
              <div key={cat} className="bg-card border border-border rounded-sm p-6">
                <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'system-ui' }}>{cat} Projects</h2>
                <ul className="space-y-2">
                  {projectLists[cat]?.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
