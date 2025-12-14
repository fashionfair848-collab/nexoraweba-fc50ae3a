import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ShoppingCart, Zap, Layout, Building, Database, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = [
  { id: "all", label: "All Projects", icon: Layout },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "webapp", label: "Web Apps", icon: Zap },
  { id: "landing", label: "Landing Pages", icon: Layout },
  { id: "corporate", label: "Corporate", icon: Building },
  { id: "fullstack", label: "MERN Stack", icon: Database },
];

const projects = [
  {
    id: 1,
    title: "LuxeStore",
    category: "ecommerce",
    description: "Premium e-commerce platform with real-time inventory and secure payments. Increased client's revenue by 250%.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    testimonial: "The website doesn't just sell products—it sells an experience. Our customers love it!",
    client: "Fashion Retail Co.",
    image: "gradient-1",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "webapp",
    description: "Project management SaaS with real-time collaboration, task tracking, and team analytics dashboard.",
    tech: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
    testimonial: "TaskFlow transformed how our team works. Productivity increased by 40%!",
    client: "TechStart Inc.",
    image: "gradient-2",
  },
  {
    id: 3,
    title: "GrowthLabs",
    category: "landing",
    description: "High-converting landing page for a marketing agency with animated hero and lead capture forms.",
    tech: ["React", "Framer Motion", "Tailwind"],
    testimonial: "Our new landing page brought us 10x more leads in the first month!",
    client: "GrowthLabs Agency",
    image: "gradient-3",
  },
  {
    id: 4,
    title: "FinanceHub",
    category: "corporate",
    description: "Corporate website for a financial services firm with complex data visualization and reporting.",
    tech: ["React", "TypeScript", "Recharts", "Node.js"],
    testimonial: "Professional, trustworthy, and exactly what we needed for our brand.",
    client: "FinanceHub Corp.",
    image: "gradient-4",
  },
  {
    id: 5,
    title: "BookIt",
    category: "fullstack",
    description: "Full-stack booking platform with calendar integration, payment processing, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "OAuth", "Redis"],
    testimonial: "BookIt handles thousands of bookings daily without a hitch!",
    client: "ServicePro LLC",
    image: "gradient-5",
  },
  {
    id: 6,
    title: "EduLearn",
    category: "webapp",
    description: "Online learning platform with video streaming, progress tracking, and certification system.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    testimonial: "The platform has revolutionized how we deliver education online.",
    client: "EduLearn Academy",
    image: "gradient-6",
  },
];

const gradientColors: Record<string, string> = {
  "gradient-1": "from-purple-500 to-pink-500",
  "gradient-2": "from-blue-500 to-cyan-500",
  "gradient-3": "from-green-500 to-emerald-500",
  "gradient-4": "from-orange-500 to-red-500",
  "gradient-5": "from-indigo-500 to-purple-500",
  "gradient-6": "from-teal-500 to-green-500",
};

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              See the <span className="gradient-text">Magic</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Don't just imagine what we can do—see it with your own eyes. Every project here represents a business transformed, a vision realized, a dream brought to life.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Filter Buttons */}
      <SectionWrapper className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "glow" : "glass"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <category.icon size={16} />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col group">
                    {/* Project Image Placeholder */}
                    <div className={`aspect-video rounded-lg mb-6 bg-gradient-to-br ${gradientColors[project.image]} flex items-center justify-center overflow-hidden relative`}>
                      <span className="font-display text-3xl font-bold text-white/90">{project.title}</span>
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="glow" size="sm">
                          View Details
                          <ExternalLink className="ml-2" size={16} />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                    </div>
                    
                    {/* Project Info */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-2">"{project.testimonial}"</p>
                      <p className="text-xs text-primary">{project.client}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="text-center py-16 px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our <span className="gradient-text">Success Stories?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Your project could be next. Let's create something amazing together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PortfolioPage;
