import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Rocket, Users, GraduationCap, Heart, Zap, Send, FileText, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const whyJoin = [
  { icon: Rocket, title: "Growth Opportunities", description: "Fast-track your career with challenging projects" },
  { icon: Users, title: "Amazing Team", description: "Work with talented, passionate professionals" },
  { icon: GraduationCap, title: "Learning Budget", description: "$1,000/year for courses and conferences" },
  { icon: Heart, title: "Work-Life Balance", description: "Flexible hours and remote-first culture" },
  { icon: Zap, title: "Latest Technologies", description: "Work with cutting-edge tools and frameworks" },
];

const openPositions = [
  { title: "Senior React Developer", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "UI/UX Designer", location: "Remote", type: "Full-time", department: "Design" },
  { title: "Backend Developer (Node.js)", location: "Remote", type: "Full-time", department: "Engineering" },
  { title: "Project Manager", location: "Remote", type: "Full-time", department: "Operations" },
  { title: "Digital Marketing Specialist", location: "Remote", type: "Part-time", department: "Marketing" },
];

const applicationSteps = [
  { icon: FileText, title: "Apply Online", description: "Submit your resume and portfolio" },
  { icon: MessageSquare, title: "Initial Call", description: "Quick chat to learn about you" },
  { icon: Zap, title: "Technical Review", description: "Showcase your skills" },
  { icon: CheckCircle, title: "Welcome Aboard!", description: "Join the NEXORA family" },
];

const CareersPage = () => {
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
            <Briefcase size={16} />
            <span className="text-sm font-medium">Careers</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Build Your <span className="gradient-text">Future</span> With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join a team that's shaping the future of digital experiences
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Why Join NEXORA */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Why Join <span className="gradient-text">NEXORA</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {whyJoin.map((item, index) => {
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
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Find your perfect role and start making an impact
            </p>
          </FadeInOnView>

          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="group hover:border-primary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{job.department}</span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-2">{job.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Apply Now <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Application Process */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Application <span className="gradient-text">Process</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {applicationSteps.map((step, index) => {
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
                  {index < applicationSteps.length - 1 && (
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
              <GlassCard className="inline-block py-8 px-12">
                <h3 className="font-display text-xl font-bold mb-2">Don't see a perfect fit?</h3>
                <p className="text-muted-foreground mb-4">Send us your resume anyway!</p>
                <Button variant="hero" asChild>
                  <a href="mailto:careers@nexora.dev">
                    <Send className="mr-2" size={16} /> Send Your Resume
                  </a>
                </Button>
              </GlassCard>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CareersPage;
