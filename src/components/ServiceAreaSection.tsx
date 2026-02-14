import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = ["Stanford", "Hermanus", "Fisherhaven", "Gansbaai", "Overstrand region & surrounding areas"];

const ServiceAreaSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold font-heading mb-4">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Areas We Serve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-border shadow-sm"
          >
            <iframe
              title="Reno Guys Service Area - Stanford, Western Cape"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26624.39!2d19.4536!3d-34.4393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5e6a1b0b1b1b%3A0x1b0b1b1b1b0b1b1b!2sStanford%2C%20Western%20Cape%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
