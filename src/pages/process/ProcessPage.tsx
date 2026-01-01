import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, Settings, CheckCircle, Headphones, Wrench, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const processData: Record<string, { title: string; description: string; icon: React.ElementType }> = {
  "": { title: "Our Process", description: "A proven methodology that delivers exceptional results every time.", icon: Workflow },
  methodology: { title: "Project Methodology", description: "Agile development practices that ensure flexibility and quality.", icon: Settings },
  quality: { title: "Quality Assurance", description: "Rigorous testing to ensure your product is flawless.", icon: CheckCircle },
  support: { title: "Client Support", description: "Dedicated support to help you succeed at every step.", icon: Headphones },
  "technical-support": { title: "Technical Support", description: "Expert technical assistance when you need it most.", icon: Wrench },
  maintenance: { title: "Maintenance & Updates", description: "Keep your systems running smoothly with ongoing maintenance.", icon: RefreshCw },
};

const ProcessPage = () => {
  const { page } = useParams<{ page: string }>();
  const data = processData[page || ""] || processData[""];
  const Icon = data.icon;

  return (
    <div className="min-h-screen pt-24">
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Icon size={16} />
              <span className="text-sm font-medium">How We Deliver</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">{data.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground mb-8">{data.description}</motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Button variant="hero" size="lg" asChild><Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link></Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss your project requirements.</p>
              <Button variant="hero" size="lg" asChild><Link to="/contact">Contact Us <ArrowRight className="ml-2" size={18} /></Link></Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProcessPage;
