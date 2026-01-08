import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, TestTube, Bug, Smartphone, Gauge, Shield, Eye, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const testingTypes = [
  { icon: Code, title: "Unit Testing", description: "Individual component verification" },
  { icon: TestTube, title: "Integration Testing", description: "Ensuring components work together" },
  { icon: Smartphone, title: "Cross-Browser Testing", description: "Works on all major browsers" },
  { icon: Gauge, title: "Performance Testing", description: "Speed and optimization checks" },
  { icon: Shield, title: "Security Testing", description: "Vulnerability assessments" },
  { icon: Eye, title: "Accessibility Testing", description: "WCAG compliance verification" },
];

const qualityStandards = [
  { title: "Code Reviews", description: "Every pull request is reviewed by senior developers" },
  { title: "Automated Testing", description: "CI/CD pipeline runs tests on every commit" },
  { title: "Bug Tracking", description: "Comprehensive issue tracking and resolution" },
  { title: "Documentation", description: "Clean, well-documented codebase" },
];

const QualityPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
          >
            <CheckCircle size={16} />
            <span className="text-sm font-medium">Quality Assurance</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Quality <span className="gradient-text">Guaranteed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Rigorous testing ensures your product is flawless before launch
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Testing Approach */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our Testing <span className="gradient-text">Approach</span>
            </h2>
          </FadeInOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Quality Standards */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Quality <span className="gradient-text">Standards</span>
            </h2>
          </FadeInOnView>

          <div className="max-w-2xl mx-auto space-y-4">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="group hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Bug className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{standard.title}</h3>
                      <p className="text-muted-foreground text-sm">{standard.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Quality Work <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default QualityPage;
