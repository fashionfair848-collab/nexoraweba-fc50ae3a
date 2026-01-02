import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, ArrowRight, Globe, 
  Code, Smartphone, Settings, Palette, ShoppingCart,
  Search, Share2, Mail, FileText, Target,
  Building2, Heart, Home, GraduationCap, ShoppingBag, Landmark,
  Users, Award, Briefcase, BookOpen,
  Workflow, CheckCircle, Headphones, Wrench, RefreshCw, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import NexoraLogo from "@/assets/nexora-logo.svg";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ElementType;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface NavItem {
  name: string;
  path?: string;
  isHighlighted?: boolean;
  sections?: MenuSection[];
}

const navItems: NavItem[] = [
  {
    name: "What We Do",
    sections: [
      {
        title: "Digital Transformation",
        items: [
          { title: "Web Development", path: "/services/web-development", icon: Code, description: "Custom websites & web apps" },
          { title: "App Development", path: "/services/app-development", icon: Smartphone, description: "Mobile & cross-platform apps" },
          { title: "Custom Software", path: "/services/custom-software", icon: Settings, description: "Tailored software solutions" },
          { title: "UI/UX Design", path: "/services/ui-ux-design", icon: Palette, description: "User-centered design" },
          { title: "E-commerce Solutions", path: "/services/ecommerce", icon: ShoppingCart, description: "Online store development" },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          { title: "SEO Services", path: "/services/seo", icon: Search, description: "Search engine optimization" },
          { title: "Social Media Marketing", path: "/services/social-media", icon: Share2, description: "Social media growth" },
          { title: "Email Marketing", path: "/services/email-marketing", icon: Mail, description: "Email campaigns & automation" },
          { title: "Content Writing", path: "/services/content-writing", icon: FileText, description: "Engaging content creation" },
          { title: "PPC Advertising", path: "/services/ppc", icon: Target, description: "Paid advertising campaigns" },
        ],
      },
    ],
  },
  {
    name: "Who We Help",
    sections: [
      {
        title: "Industries",
        items: [
          { title: "Startups & Scale-ups", path: "/industries/startups", icon: Rocket, description: "Launch & grow your startup" },
          { title: "E-commerce Businesses", path: "/industries/ecommerce", icon: ShoppingCart, description: "Online retail solutions" },
          { title: "Healthcare & Medical", path: "/industries/healthcare", icon: Heart, description: "Healthcare technology" },
          { title: "Real Estate", path: "/industries/real-estate", icon: Home, description: "Property & real estate tech" },
          { title: "Education & E-learning", path: "/industries/education", icon: GraduationCap, description: "Educational platforms" },
          { title: "Retail & CPG", path: "/industries/retail", icon: ShoppingBag, description: "Retail transformation" },
          { title: "Banking & Fintech", path: "/industries/fintech", icon: Landmark, description: "Financial technology" },
        ],
      },
    ],
  },
  {
    name: "Who We Are",
    isHighlighted: true,
    sections: [
      {
        title: "Company",
        items: [
          { title: "About NEXORA", path: "/about", icon: Building2, description: "Our story & mission" },
          { title: "Our Team", path: "/about/team", icon: Users, description: "Meet the experts" },
          { title: "Company Culture", path: "/about/culture", icon: Award, description: "How we work" },
          { title: "Our Values & Mission", path: "/about/values", icon: BookOpen, description: "What drives us" },
          { title: "Careers", path: "/about/careers", icon: Briefcase, description: "Join our team" },
          { title: "Case Studies", path: "/about/case-studies", icon: FileText, description: "Success stories" },
        ],
      },
    ],
  },
  {
    name: "How We Deliver",
    sections: [
      {
        title: "Our Approach",
        items: [
          { title: "Our Process", path: "/process", icon: Workflow, description: "How we work" },
          { title: "Project Methodology", path: "/process/methodology", icon: Settings, description: "Agile development" },
          { title: "Quality Assurance", path: "/process/quality", icon: CheckCircle, description: "Testing & QA" },
          { title: "Client Support", path: "/process/support", icon: Headphones, description: "Ongoing assistance" },
          { title: "Technical Support", path: "/process/technical-support", icon: Wrench, description: "Tech help desk" },
          { title: "Maintenance & Updates", path: "/process/maintenance", icon: RefreshCw, description: "Keep it running" },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setIsOpen(false);
  };

  // Calculate grid columns based on section items count
  const getGridClass = (itemCount: number) => {
    if (itemCount <= 4) return "grid-cols-2 lg:grid-cols-4";
    if (itemCount <= 5) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
    if (itemCount <= 6) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6";
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7";
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={closeMenu}>
            <motion.img 
              src={NexoraLogo} 
              alt="NEXORA" 
              className="w-8 h-8 lg:w-10 lg:h-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-display font-bold text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors">NEXORA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.sections && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`px-2.5 xl:px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted ${
                      item.isHighlighted
                        ? "text-orange-500 hover:text-orange-400"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-2.5 xl:px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-muted whitespace-nowrap ${
                      item.isHighlighted
                        ? "text-orange-500 hover:text-orange-400"
                        : activeMenu === item.name
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <button className="flex items-center gap-1.5 xl:gap-2 px-2 xl:px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe size={16} />
              <span className="hidden xl:inline">Global (EN)</span>
              <ChevronDown size={14} />
            </button>
            <ThemeToggle />
            <Button variant="glow" size="sm" className="text-sm px-3 xl:px-4" asChild>
              <Link to="/contact">Book a Service</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdowns - White Background */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-card border-b border-border/50 shadow-2xl hidden lg:block overflow-x-hidden"
            onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 lg:px-6 xl:px-8 py-6 lg:py-8 max-w-full">
              {navItems.find(item => item.name === activeMenu)?.sections?.map((section, sectionIndex) => (
                <div key={section.title} className={sectionIndex > 0 ? "mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-border/30" : ""}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 lg:mb-5">
                    {section.title}
                  </h3>
                  <div className={`grid ${getGridClass(section.items.length)} gap-2 lg:gap-3`}>
                    {section.items.map((menuItem) => (
                      <Link
                        key={menuItem.path}
                        to={menuItem.path}
                        onClick={closeMenu}
                        className="group flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-gray-50/50 dark:bg-muted/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 dark:hover:from-primary/10 dark:hover:to-accent/10 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:scale-110 transition-all duration-300">
                          <menuItem.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 dark:text-foreground group-hover:text-primary transition-colors text-sm">
                              {menuItem.title}
                            </span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          {menuItem.description && (
                            <p className="text-xs text-gray-500 dark:text-muted-foreground mt-0.5 line-clamp-2">
                              {menuItem.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <MobileMenuItem key={item.name} item={item} index={index} closeMenu={closeMenu} />
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button variant="glow" className="w-full" asChild>
                  <Link to="/contact" onClick={closeMenu}>Book a Service</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const MobileMenuItem = ({ 
  item, 
  index, 
  closeMenu 
}: { 
  item: NavItem; 
  index: number; 
  closeMenu: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (item.path) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <Link
          to={item.path}
          onClick={closeMenu}
          className={`block py-3 text-lg font-medium transition-colors ${
            item.isHighlighted ? "text-orange-500" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.name}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-border/50 last:border-0"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between w-full py-3 text-lg font-medium transition-colors ${
          item.isHighlighted ? "text-orange-500" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {item.name}
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>
      
      <AnimatePresence>
        {isExpanded && item.sections && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {item.sections.map((section) => (
              <div key={section.title} className="pb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2">
                  {section.title}
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {section.items.map((menuItem) => (
                    <Link
                      key={menuItem.path}
                      to={menuItem.path}
                      onClick={closeMenu}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <menuItem.icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground truncate">{menuItem.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MegaMenu;