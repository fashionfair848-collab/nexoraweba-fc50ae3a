import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Bug, Gauge, Link2, Shield, Server, Database, Zap, ArrowRight, ClipboardList, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const technicalIssues = [
  { icon: Bug, title: "Bug Fixes", description: "Resolving code issues and errors" },
  { icon: Gauge, title: "Performance Issues", description: "Speed optimization and bottleneck fixes" },
  { icon: Link2, title: "Integration Problems", description: "Third-party API and service issues" },
  { icon: Shield, title: "Security Concerns", description: "Vulnerability patches and updates" },
  { icon: Server, title: "Server Issues", description: "Hosting and deployment problems" },
  { icon: Database, title: "Database Problems", description: "Data integrity and query issues" },
  { icon: Zap, title: "Feature Malfunctions", description: "Features not working as expected" },
  { icon: Wrench, title: "Configuration Issues", description: "Environment and setup problems" },
];

const resolutionSteps = [
  { icon: ClipboardList, title: "Report Issue", description: "Submit detailed issue description" },
  { icon: Search, title: "Diagnosis", description: "Our team analyzes the problem" },
  { icon: Wrench, title: "Resolution", description: "Fix is developed and tested" },
  { icon: CheckCircle, title: "Verification", description: "Confirmed fixed and deployed" },
];

const TechnicalSupportPage = () => {
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
            <Wrench size={16} />
            <span className="text-sm font-medium">Technical Support</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Expert Tech Help <span className="gradient-text">24/7</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Fast, reliable technical assistance for all your issues
          </motion.p>
        </div>
      </SectionWrapper>

      {/* What We Handle */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What We <span className="gradient-text">Handle</span>
            </h2>
          </FadeInOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {technicalIssues.map((issue, index) => {
              const Icon = issue.icon;
              return (
                <motion.div
                  key={issue.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{issue.title}</h3>
                    <p className="text-muted-foreground text-xs">{issue.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Resolution Process */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Support <span className="gradient-text">Process</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {resolutionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < resolutionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                  )}
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs text-primary font-medium">Step {index + 1}</span>
                    <h3 className="font-semibold text-foreground mt-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Report an Issue <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TechnicalSupportPage;
