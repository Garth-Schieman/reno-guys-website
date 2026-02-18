import { motion } from "framer-motion";
import {
  Home,
  Paintbrush,
  Wrench,
  Bath,
  CookingPot,
  Hammer,
  Lightbulb,
  Droplets,
  LayoutGrid,
} from "lucide-react";

const services = [
  { icon: Home, label: "House Renovation" },
  { icon: LayoutGrid, label: "Interior Remodelling" },
  { icon: CookingPot, label: "Kitchen Renovation" },
  { icon: Bath, label: "Bathroom Remodelling" },
  { icon: Paintbrush, label: "Painting – Interior & Exterior" },
  { icon: Wrench, label: "Home Maintenance" },
  { icon: Hammer, label: "Paving" },
  { icon: Droplets, label: "Plumbing Repair Services" },
  { icon: Lightbulb, label: "Electrical Repair Services" },
  { icon: Hammer, label: "Epoxy Flooring" }, 
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold font-heading mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-heading font-semibold text-foreground">{service.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
