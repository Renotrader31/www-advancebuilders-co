import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3" style={{ fontFamily: 'system-ui' }}>
          Get a Free Quote
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Ready to Start Your Project?
        </h2>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-sm">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Call Us</h3>
              <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">(555) 123-4567</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-sm">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Email Us</h3>
              <a href="mailto:info@buildcraft.com" className="text-muted-foreground hover:text-primary transition-colors">info@buildcraft.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-sm">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Visit Us</h3>
              <p className="text-muted-foreground">123 Construction Ave<br />Your City, ST 12345</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-sm">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Hours</h3>
              <p className="text-muted-foreground">Mon–Fri: 7AM – 6PM<br />Sat: 8AM – 2PM</p>
            </div>
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <select className="w-full px-4 py-3 bg-card border border-border rounded-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors">
            <option>Select a Service</option>
            <option>Commercial Construction</option>
            <option>Residential Construction</option>
            <option>Handyman Services</option>
          </select>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <Button size="lg" className="w-full rounded-none uppercase tracking-wider font-bold py-6">
            Request a Free Quote
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
