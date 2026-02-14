import { Home, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg">Reno Guys</span>
                <span className="block text-xs text-secondary-foreground/70 font-body">Overstrand</span>
              </div>
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
              <a href="https://wa.me/27750482683" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                <Phone className="w-4 h-4" /> 075 048 2683
              </a>
              <a href="mailto:deelankawishi317@gmail.com" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                <Mail className="w-4 h-4" /> deelankawishi317@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 font-body">
                <MapPin className="w-4 h-4" /> Overstrand, Western Cape, SA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-sm text-secondary-foreground/50 font-body">
            © {new Date().getFullYear()} Reno Guys – Overstrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
