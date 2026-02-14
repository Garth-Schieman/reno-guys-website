import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold font-heading mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Home Renovation & Maintenance
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            Proudly serving Hermanus and the wider Overstrand area, Reno Guys
            are your trusted, fully qualified team for home repairs, maintenance,
            and renovations. Whether you're refreshing your living space,
            tackling repairs, or upgrading your kitchen or bathroom, we get the
            job done right — on time and with care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {[
            { title: "Fully Qualified", desc: "Experienced and skilled professionals" },
            { title: "On Time", desc: "Projects delivered on schedule" },
            { title: "Quality Work", desc: "Attention to detail on every job" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-6 rounded-xl bg-muted"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
