import heroImage from "@/assets/hero-construction.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
    <img
      src={heroImage}
      alt="Construction site at golden hour with steel beams and cranes"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    <div className="relative z-10 container mx-auto px-4 pt-24">
      <div className="max-w-2xl">
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4" style={{ fontFamily: 'system-ui' }}>
          Reno · Sparks · Carson City · Tahoe
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6" style={{ fontFamily: 'system-ui', color: 'hsl(30 10% 95%)' }}>
          Building<br />
          <span className="text-primary">Your Vision.</span><br />
          Built to Last.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg" style={{ color: 'hsl(30 8% 70%)' }}>
          Locally owned. Over 50 years of combined construction experience serving homeowners and businesses across the Reno-Sparks, Carson City, and Tahoe area.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="text-base px-8 py-6 rounded-none uppercase tracking-wider font-bold">
            <a href="#contact">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-none uppercase tracking-wider font-bold border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/projects">View Our Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
