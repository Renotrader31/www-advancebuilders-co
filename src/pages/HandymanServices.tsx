import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import handymanImg from "@/assets/service-handyman.jpg";

const services = [
  "General Repairs",
  "Installations & Assemblies",
  "Interior & Exterior Painting",
  "Drywall Patching & Repair",
  "Plumbing Fixes",
  "Electrical Repairs",
  "Door & Window Replacement",
  "Preventative Maintenance",
];

const HandymanServices = () => (
  <>
    <Navbar />
    {/* Hero */}
    <section className="relative pt-20">
      <div className="relative h-[400px] overflow-hidden">
        <img src={handymanImg} alt="Handyman Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-3 rounded-sm">
                <Wrench className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold" style={{ fontFamily: 'system-ui' }}>Our Services</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Handyman Services</h1>
            <p className="text-white/80 max-w-2xl text-lg">
              No job is too small. Our skilled professionals handle repairs, installations, and maintenance with care.
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
              Reliable Handyman Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From a leaky faucet to a full room refresh, Advance Builders' handyman team is here to tackle your to-do list. We bring the same professionalism and quality to smaller jobs that we do to our large-scale construction projects.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our licensed and insured handyman professionals arrive on time, treat your home with respect, and get the job done right the first time. We serve homeowners and businesses throughout Northern Nevada.
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

export default HandymanServices;