import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowRight, Zap, Code, Bot, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", icon: Globe },
    { name: "Web Applications", icon: Code },
    { name: "AI Voice Agents", icon: Bot },
    { name: "E-Commerce", icon: Zap },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-display font-bold text-xl">N</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-foreground">NEXORA</span>
                <p className="text-xs text-muted-foreground">Building Tomorrow's Web</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your business with AI-powered web solutions. We don't just build websites—we craft digital experiences that make your business unstoppable.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors flex items-center justify-center"
              >
                <Linkedin size={18} className="text-muted-foreground hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors flex items-center justify-center"
              >
                <Github size={18} className="text-muted-foreground hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors flex items-center justify-center"
              >
                <Twitter size={18} className="text-muted-foreground hover:text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <ArrowRight size={16} className="text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code size={16} className="text-primary" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <service.icon size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:nexora.busniess@gmail.com" 
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">nexora.busniess@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+923255446976" 
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">+92 325 5446976</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Lahore, Pakistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span className="text-primary font-medium">NEXORA</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
