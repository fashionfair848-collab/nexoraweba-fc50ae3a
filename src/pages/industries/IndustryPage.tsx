import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Rocket, ShoppingCart, Heart, Home, GraduationCap, ShoppingBag, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const industryData: Record<string, { title: string; description: string; icon: React.ElementType }> = {
  startups: { title: "Startups & Scale-ups", description: "Launch and scale your startup with cutting-edge technology solutions designed for rapid growth.", icon: Rocket },
  ecommerce: { title: "E-commerce Businesses", description: "Transform your online retail experience with powerful e-commerce solutions.", icon: ShoppingCart },
  healthcare: { title: "Healthcare & Medical", description: "Digital solutions for healthcare providers, clinics, and medical technology companies.", icon: Heart },
  "real-estate": { title: "Real Estate", description: "Property management systems, listing platforms, and real estate technology solutions.", icon: Home },
  education: { title: "Education & E-learning", description: "Build engaging educational platforms and e-learning management systems.", icon: GraduationCap },
  retail: { title: "Retail & CPG", description: "Digital transformation solutions for retail and consumer packaged goods companies.", icon: ShoppingBag },
  fintech: { title: "Banking & Fintech", description: "Secure, compliant financial technology solutions for banks and fintech startups.", icon: Landmark },
};

const IndustryPage = () => {
  const { industry } = useParams<{ industry: string }>();
  const data = industryData[industry || ""] || { title: "Industry Solutions", description: "Tailored solutions for your industry.", icon: Building2 };
  const Icon = data.icon;

  return (
    <div className="min-h-screen pt-24">
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Icon size={16} />
              <span className="text-sm font-medium">Industry Solutions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold mb-6">
              Solutions for <span className="gradient-text">{data.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground mb-8">{data.description}</motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Button variant="hero" size="lg" asChild><Link to="/contact">Get Started <ArrowRight className="ml-2" size={18} /></Link></Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how we can help your {data.title.toLowerCase()} succeed.</p>
              <Button variant="hero" size="lg" asChild><Link to="/contact">Schedule Consultation <ArrowRight className="ml-2" size={18} /></Link></Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default IndustryPage;
