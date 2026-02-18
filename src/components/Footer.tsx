import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-sm">
              <img
                src={logo}
                alt="Reno Guys Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-secondary-foreground/70 font-body leading-relaxed">
              Your trusted team for home renovations, repairs, and maintenance in the Overstrand region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "About Us", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" us", "")}`}
                  className="text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors font-body"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/27750482683"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors font-body"
              >
                <Phone className="w-4 h-4" /> 075 048 2683
              </a>

              <a
                href="mailto:deelankawishi317@gmail.com"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors font-body"
              >
                <Mail className="w-4 h-4" /> deelankawishi317@gmail.com
              </a>

              <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 font-body">
                <MapPin className="w-4 h-4" /> Overstrand, Western Cape, SA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center space-y-2">
          <p className="text-sm text-secondary-foreground/50 font-body">
            © {new Date().getFullYear()} Reno Guys – Overstrand. All rights reserved.
          </p>

          <p className="text-xs text-secondary-foreground/40 font-body">
            Powered by{" "}
            <a
              href="https://krayon.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              Krayon Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
