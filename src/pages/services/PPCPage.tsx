import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, DollarSign, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const features = [
  { icon: Target, title: "Targeted Ads", description: "Reach your ideal customers" },
  { icon: DollarSign, title: "ROI Focused", description: "Maximize your ad spend" },
  { icon: BarChart3, title: "Analytics", description: "Data-driven optimization" },
  { icon: Zap, title: "Quick Results", description: "See results fast" },
];

const PPCPage = () => {
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
              <Target size={16} />
              <span className="text-sm font-medium">PPC Advertising</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">PPC Advertising</span> That Pays
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Strategic paid advertising campaigns that deliver measurable ROI 
              and drive qualified traffic to your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Launch Your Campaign <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
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

      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready for Paid Growth?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's create PPC campaigns that deliver results.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PPCPage;
