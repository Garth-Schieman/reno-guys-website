import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const waMessage = encodeURIComponent(
      `Hi Reno Guys!\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nEmail: ${form.email.trim()}\nService: ${form.service.trim()}\nMessage: ${form.message.trim()}`
    );
    window.open(`https://wa.me/27750482683?text=${waMessage}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with Reno Guys shortly!",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold font-heading mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground font-body text-lg">
              Ready to start your project? Reach out to us for a free quote. We're happy to discuss your renovation needs.
            </p>

            <a
              href="https://wa.me/27750482683"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Phone / WhatsApp</p>
                <p className="font-heading font-semibold text-foreground">075 048 2683</p>
              </div>
            </a>

            <a
              href="mailto:deelankawishi317@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Email</p>
                <p className="font-heading font-semibold text-foreground">deelankawishi317@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Facebook className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Facebook</p>
                <p className="font-heading font-semibold text-foreground">Reno Guys – Overstrand</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 p-6 md:p-8 rounded-2xl bg-muted border border-border">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Request Free Quote</h3>
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-background"
                maxLength={100}
              />
              <Input
                placeholder="Phone Number *"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-background"
                maxLength={20}
              />
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-background"
                maxLength={255}
              />
              <Input
                placeholder="Service Needed"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="bg-background"
                maxLength={100}
              />
              <Textarea
                placeholder="Your Message *"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-background resize-none"
                maxLength={1000}
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-base py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Request Free Quote
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
