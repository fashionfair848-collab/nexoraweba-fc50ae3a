import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Zap, Layout, Building, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";
import PortfolioCard from "@/components/ui/PortfolioCard";

const categories = [
  { id: "all", label: "All Projects", icon: Sparkles },
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
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "webapp",
    description: "Project management SaaS with real-time collaboration, task tracking, and team analytics dashboard.",
    tech: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
    testimonial: "TaskFlow transformed how our team works. Productivity increased by 40%!",
    client: "TechStart Inc.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "GrowthLabs",
    category: "landing",
    description: "High-converting landing page for a marketing agency with animated hero and lead capture forms.",
    tech: ["React", "Framer Motion", "Tailwind"],
    testimonial: "Our new landing page brought us 10x more leads in the first month!",
    client: "GrowthLabs Agency",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "FinanceHub",
    category: "corporate",
    description: "Corporate website for a financial services firm with complex data visualization and reporting.",
    tech: ["React", "TypeScript", "Recharts", "Node.js"],
    testimonial: "Professional, trustworthy, and exactly what we needed for our brand.",
    client: "FinanceHub Corp.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "BookIt",
    category: "fullstack",
    description: "Full-stack booking platform with calendar integration, payment processing, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "OAuth", "Redis"],
    testimonial: "BookIt handles thousands of bookings daily without a hitch!",
    client: "ServicePro LLC",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "EduLearn",
    category: "webapp",
    description: "Online learning platform with video streaming, progress tracking, and certification system.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    testimonial: "The platform has revolutionized how we deliver education online.",
    client: "EduLearn Academy",
    gradient: "from-teal-500 to-green-500",
  },
];

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Our Portfolio</span>
            </motion.div>
            
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeCategory === category.id ? "glow" : "glass"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="gap-2"
                >
                  <category.icon size={16} />
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <FadeInOnView key={project.id} delay={index * 0.1}>
                  <PortfolioCard
                    project={project}
                    categoryLabel={categories.find((c) => c.id === project.category)?.label || ""}
                    index={index}
                  />
                </FadeInOnView>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-16 px-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
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
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PortfolioPage;
