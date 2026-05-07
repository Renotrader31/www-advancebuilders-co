import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

// Formspree endpoint — submissions land in the email associated with this form on formspree.io.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvyobvz";

type SubmitState = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<SubmitState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        toast.success("Thanks! We'll be in touch soon.");
        form.reset();
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please call us at (775) 846-7796.");
      }
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please call us at (775) 846-7796.");
    }
  };

  return (
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
                <a href="tel:+17758467796" className="text-muted-foreground hover:text-primary transition-colors">(775) 846-7796</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Email Us</h3>
                <a href="mailto:info@advancebc.co" className="text-muted-foreground hover:text-primary transition-colors">info@advancebc.co</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-sm">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: 'system-ui' }}>Visit Us</h3>
                <p className="text-muted-foreground">2385 Harbor Circle<br />Reno, NV 89519</p>
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
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                autoComplete="name"
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                autoComplete="email"
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Your Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone"
                autoComplete="tel"
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="service" className="sr-only">Service of interest</label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Select a Service</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Residential Construction">Residential Construction</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Project details</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            {/* Honeypot field — bots fill it in, humans don't see it */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full rounded-none uppercase tracking-wider font-bold py-6"
            >
              {status === "submitting" ? "Sending..." : "Request a Free Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
