import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Zap, Layout, Building, Database, Sparkles, ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

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
    testimonial: "The website doesn't just sell products—it sells an experience!",
    client: "Fashion Retail Co.",
    color: "from-violet-500 to-purple-600",
    stats: { increase: "250%", metric: "Revenue" },
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "webapp",
    description: "Project management SaaS with real-time collaboration, task tracking, and team analytics dashboard.",
    tech: ["Next.js", "Express", "PostgreSQL", "Socket.io"],
    testimonial: "TaskFlow transformed how our team works. Productivity up 40%!",
    client: "TechStart Inc.",
    color: "from-blue-500 to-cyan-500",
    stats: { increase: "40%", metric: "Productivity" },
  },
  {
    id: 3,
    title: "GrowthLabs",
    category: "landing",
    description: "High-converting landing page for a marketing agency with animated hero and lead capture forms.",
    tech: ["React", "Framer Motion", "Tailwind"],
    testimonial: "Our new landing page brought us 10x more leads!",
    client: "GrowthLabs Agency",
    color: "from-emerald-500 to-teal-500",
    stats: { increase: "10x", metric: "Leads" },
  },
  {
    id: 4,
    title: "FinanceHub",
    category: "corporate",
    description: "Corporate website for a financial services firm with complex data visualization and reporting.",
    tech: ["React", "TypeScript", "Recharts", "Node.js"],
    testimonial: "Professional, trustworthy, exactly what we needed.",
    client: "FinanceHub Corp.",
    color: "from-amber-500 to-orange-500",
    stats: { increase: "85%", metric: "Trust Score" },
  },
  {
    id: 5,
    title: "BookIt",
    category: "fullstack",
    description: "Full-stack booking platform with calendar integration, payment processing, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "OAuth", "Redis"],
    testimonial: "BookIt handles thousands of bookings daily flawlessly!",
    client: "ServicePro LLC",
    color: "from-rose-500 to-pink-500",
    stats: { increase: "5000+", metric: "Daily Bookings" },
  },
  {
    id: 6,
    title: "EduLearn",
    category: "webapp",
    description: "Online learning platform with video streaming, progress tracking, and certification system.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    testimonial: "Revolutionized how we deliver education online.",
    client: "EduLearn Academy",
    color: "from-indigo-500 to-blue-500",
    stats: { increase: "15K+", metric: "Students" },
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section with Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Our Portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Projects That <span className="gradient-text">Deliver Results</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Every project here represents a business transformed. Real results, real growth, real success stories.
            </motion.p>
            
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "300%", label: "Avg. ROI Increase" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <SectionWrapper className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }
                `}
              >
                <category.icon size={16} />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Projects Grid */}
      <SectionWrapper className="py-12">
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
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full"
                  >
                    <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      {/* Project Header with Gradient */}
                      <div className={`relative h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between`}>
                        {/* Category Badge */}
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                            {categories.find((c) => c.id === project.category)?.label}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink size={18} />
                          </motion.button>
                        </div>
                        
                        {/* Project Title */}
                        <div>
                          <h3 className="font-display text-2xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-sm">{project.client}</p>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white">
                          <div className="text-lg font-bold">{project.stats.increase}</div>
                          <div className="text-xs opacity-80">{project.stats.metric}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Testimonial */}
                        <div className="pt-4 border-t border-border">
                          <div className="flex gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground italic">"{project.testimonial}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeInOnView>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every successful project follows our proven methodology
              </p>
            </div>
          </FadeInOnView>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, goals, and requirements" },
              { step: "02", title: "Design", desc: "Creating stunning mockups and user experiences" },
              { step: "03", title: "Development", desc: "Building with clean code and modern technologies" },
              { step: "04", title: "Launch", desc: "Deploying and ensuring everything runs perfectly" },
            ].map((item, index) => (
              <FadeInOnView key={item.step} delay={index * 0.1}>
                <div className="relative text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="font-display text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
              
              <div className="relative z-10 py-16 px-8 text-center">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                  Let's create something amazing together. Your success story could be next.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="xl" 
                    asChild
                    className="bg-white text-primary hover:bg-white/90 shadow-xl"
                  >
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl" 
                    asChild
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PortfolioPage;