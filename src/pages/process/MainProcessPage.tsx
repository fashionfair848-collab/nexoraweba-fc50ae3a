import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Workflow, Search, Palette, Code, TestTube, Rocket, Headphones, ArrowRight, Clock, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const workflowSteps = [
  { icon: Search, title: "Discovery", description: "Understanding your goals, audience, and requirements", duration: "1-2 days" },
  { icon: Palette, title: "Design", description: "Creating wireframes and stunning visual designs", duration: "3-5 days" },
  { icon: Code, title: "Development", description: "Building your solution with clean, scalable code", duration: "1-3 weeks" },
  { icon: TestTube, title: "Testing", description: "Rigorous QA to ensure flawless performance", duration: "2-3 days" },
  { icon: Rocket, title: "Launch", description: "Deploying your project to production", duration: "1 day" },
  { icon: Headphones, title: "Support", description: "Ongoing maintenance and improvements", duration: "Ongoing" },
];

const whyItWorks = [
  { icon: Zap, title: "Fast Turnaround", description: "Clear milestones and efficient execution" },
  { icon: Shield, title: "Quality Assured", description: "Multiple review stages catch issues early" },
  { icon: Clock, title: "On-Time Delivery", description: "Realistic timelines we actually meet" },
];

const MainProcessPage = () => {
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
            <Workflow size={16} />
            <span className="text-sm font-medium">Our Process</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            From Idea to <span className="gradient-text">Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A proven 6-step process that delivers exceptional results every time
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Workflow Steps */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Workflow</span>
            </h2>
          </FadeInOnView>

          <div className="max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-8 last:mb-0"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-accent/50 hidden md:block" />
                  
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <GlassCard className="group hover:border-primary/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{step.duration}</span>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Why It Works */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Why Our Process <span className="gradient-text">Works</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-12">
              <h2 className="font-display text-2xl font-bold mb-4">
                Typical Project <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Most projects are completed within 2-6 weeks depending on complexity
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="font-bold text-foreground">Simple Website</div>
                  <div className="text-sm text-muted-foreground">2-3 weeks</div>
                </div>
                <div className="px-6 py-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="font-bold text-foreground">Web Application</div>
                  <div className="text-sm text-muted-foreground">4-6 weeks</div>
                </div>
                <div className="px-6 py-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="font-bold text-foreground">Enterprise Solution</div>
                  <div className="text-sm text-muted-foreground">8+ weeks</div>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MainProcessPage;
