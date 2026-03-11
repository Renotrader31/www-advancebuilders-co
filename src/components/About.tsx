import { Shield, Clock, Award, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Years Experience" },
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
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
            With over two decades of experience in the construction industry, BuildCraft has earned a reputation for exceptional craftsmanship, honest communication, and delivering results that exceed expectations. Whether it's a multi-story commercial build or a simple home repair, we bring the same level of dedication to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're a family-owned business that treats every client like a neighbor. Our team of licensed professionals is committed to getting the job done right — the first time.
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
