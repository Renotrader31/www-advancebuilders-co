import { Shield, Clock, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, value: "50+", label: "Years Combined Experience" },
  { icon: Award, value: "75+", label: "Projects Completed" },
  { icon: MapPin, value: "Reno-Owned", label: "Local Leadership" },
  { icon: Shield, value: "Licensed", label: "& Insured" },
];

const About = () => (
  <section id="about" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3" style={{ fontFamily: 'system-ui' }}>
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Built on Trust.<br />Driven by Quality.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Advance Builders team brings over 50 years of combined experience in the construction industry. We've completed more than 75 projects of every scope for homeowners, businesses, and developers across the Reno-Sparks, Carson City, and Tahoe area.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Joe Irvin, our partner and general manager, is a Reno native who has built and renovated throughout the region for years. He knows our codes, our suppliers, our weather, and most importantly, our neighbors. That local know-how shows up in every job we take on.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border p-8 text-center rounded-sm hover:border-primary/40 transition-colors">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
