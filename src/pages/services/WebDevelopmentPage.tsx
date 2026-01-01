import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, CheckCircle, Zap, Shield, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance with sub-2-second load times" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime" },
  { icon: Smartphone, title: "Fully Responsive", description: "Perfect experience on all devices" },
  { icon: Globe, title: "SEO Optimized", description: "Built for search engine visibility" },
];

const technologies = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Tailwind CSS", "Three.js"];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Code size={16} />
              <span className="text-sm font-medium">Web Development</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Custom <span className="gradient-text">Web Development</span> Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              From stunning landing pages to complex web applications, we build 
              digital experiences that captivate users and drive business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our <span className="gradient-text">Web Development</span>
            </h2>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FadeInOnView key={feature.title} delay={index * 0.1}>
                <GlassCard className="text-center h-full">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-card border border-border text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WebDevelopmentPage;
