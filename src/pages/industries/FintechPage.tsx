import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, CreditCard, Shield, TrendingUp, Lock, BarChart3, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: CreditCard, title: "Payment Solutions", description: "Secure payment processing and gateways" },
  { icon: Smartphone, title: "Mobile Banking", description: "Full-featured mobile banking apps" },
  { icon: TrendingUp, title: "Investment Platforms", description: "Trading and portfolio management" },
  { icon: BarChart3, title: "Financial Analytics", description: "Real-time reporting and insights" },
  { icon: Shield, title: "Fraud Detection", description: "AI-powered security monitoring" },
  { icon: Lock, title: "Compliance Tools", description: "Regulatory compliance automation" },
];

const compliance = [
  "PCI DSS Compliance", "SOC 2 Certified", "GDPR Compliant",
  "KYC/AML Integration", "Data Encryption", "Audit Trails"
];

const FintechPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Landmark size={16} />
              <span className="text-sm font-medium">Banking & Fintech</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Secure <span className="gradient-text">Fintech</span> Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Compliant, secure financial technology that scales with your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Build Your Fintech <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Fintech <span className="gradient-text">Solutions</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <FadeInOnView key={solution.title} delay={index * 0.1}>
                <GlassCard className="h-full group hover:-translate-y-2 transition-transform">
                  <solution.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compliance */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Security & <span className="gradient-text">Compliance</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {compliance.map((item, index) => (
              <FadeInOnView key={item} delay={index * 0.1}>
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Build Your Fintech?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Secure, compliant solutions that scale with your growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Consultation <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FintechPage;
