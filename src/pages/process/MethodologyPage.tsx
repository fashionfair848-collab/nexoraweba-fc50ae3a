import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, RefreshCcw, Users, MessageSquare, ArrowRight, GitBranch, Trello, Slack, Github as GithubIcon, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const agileProcess = [
  { title: "Sprint Planning", description: "Define goals and tasks for each 2-week sprint" },
  { title: "Daily Standups", description: "Quick sync meetings to track progress" },
  { title: "Sprint Review", description: "Demo completed features and gather feedback" },
  { title: "Retrospective", description: "Continuous improvement of our process" },
];

const tools = [
  { icon: GitBranch, name: "Git & GitHub", description: "Version control & collaboration" },
  { icon: Trello, name: "Jira/Trello", description: "Project & task management" },
  { icon: Slack, name: "Slack", description: "Real-time communication" },
  { icon: Figma, name: "Figma", description: "Design collaboration" },
  { icon: GithubIcon, name: "CI/CD Pipeline", description: "Automated deployments" },
];

const MethodologyPage = () => {
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
            <Settings size={16} />
            <span className="text-sm font-medium">Methodology</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Agile & <span className="gradient-text">Efficient</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Modern development practices that ensure flexibility, quality, and fast delivery
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Agile Process */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Our <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              We follow Agile/Scrum practices adapted for small, focused teams
            </p>
          </FadeInOnView>

          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <div className="flex items-center justify-center mb-8">
                <RefreshCcw className="w-12 h-12 text-primary animate-spin-slow" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {agileProcess.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Tools & Collaboration */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Tools & <span className="gradient-text">Collaboration</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Industry-standard tools that keep you in the loop at every stage
            </p>
          </FadeInOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
                    <p className="text-muted-foreground text-xs">{tool.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <FadeInOnView>
            <div className="mt-12 max-w-2xl mx-auto">
              <GlassCard className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-xl font-bold">Client Involvement</h3>
                </div>
                <p className="text-muted-foreground">
                  You'll have access to our project board, weekly progress updates, and direct communication 
                  with your dedicated team. We believe transparency builds trust.
                </p>
              </GlassCard>
            </div>
          </FadeInOnView>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Project <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MethodologyPage;
