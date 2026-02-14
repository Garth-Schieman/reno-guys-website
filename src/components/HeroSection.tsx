import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional home renovation interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
            Renew Your Space With Expert Renovations
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-body mb-8 leading-relaxed">
            Ready to give your home a fresh new look? Our expert team is here to
            transform spaces and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-base px-8 py-6 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Button>
            </a>
            <a href="https://wa.me/27750482683" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-secondary-foreground/20 border-2 border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/30 font-heading font-bold text-base px-8 py-6 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
