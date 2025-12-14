import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, Handshake, Zap, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

const values = [
  {
    icon: Flame,
    title: "Innovation First",
    description: "We stay ahead of trends, master new technologies, and bring fresh ideas to every project.",
  },
  {
    icon: Sparkles,
    title: "Quality Over Everything",
    description: "We don't cut corners. Every pixel, every line of code is crafted with obsessive attention to detail.",
  },
  {
    icon: Handshake,
    title: "Partnership, Not Transaction",
    description: "You're not just a client—you're a partner. Your goals become our goals.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "We deliver on time, every time. Deadlines are promises, and we keep our promises.",
  },
];

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "MongoDB & Database Design", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Three.js & Animations", level: 82 },
  { name: "Full-Stack Development", level: 93 },
];

const typicalAgencies = [
  "Cookie-cutter templates",
  "Slow response times",
  "Disappear after delivery",
  "Technical jargon you don't understand",
  "Hidden costs",
];

const nexoraDifference = [
  "100% custom, built for YOU",
  "Response within 4 hours",
  "Ongoing support & partnership",
  "Clear communication in plain English",
  "Transparent, honest pricing",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              The Story Behind <span className="gradient-text">NEXORA</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We're not your typical development agency. We're a team of passionate problem-solvers who believe that great websites change businesses—and even lives.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder's Journey */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-primary-foreground">AH</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">Ali Haider</h3>
                  <p className="text-primary">Founder & CEO</p>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                From Struggle to <span className="gradient-text">Success</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey with web development started in a small room with a second-hand laptop and a dream that seemed impossible.
                </p>
                <p>
                  I was earning just 20,000 rupees a month, barely enough to get by. But every time I built a website for someone, watching their face light up when they saw their idea come to life—that was everything.
                </p>
                <p>
                  I saw talented entrepreneurs with brilliant ideas being held back by terrible websites. I saw small businesses losing customers to competitors not because they were better, but because their websites LOOKED better.
                </p>
                <p>
                  That's when I realized: <span className="text-foreground font-medium">everyone deserves a website that matches their ambition.</span>
                </p>
                <p>
                  NEXORA was born from that belief. Today, we've helped over 50 businesses transform their online presence. Every project we take on carries the same care and dedication as if it were our own business.
                </p>
                <p className="text-primary font-medium">
                  Because at the end of the day, your success is our success. Your growth is our mission. Your dream is our project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To empower businesses with cutting-edge web solutions that don't just meet expectations—they shatter them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Skills & <span className="gradient-text">Expertise</span>
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Why Choose NEXORA */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why Choose <span className="gradient-text">NEXORA?</span>
              </h2>
              <div className="grid gap-6">
                <GlassCard>
                  <h3 className="font-display text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
                    <X className="w-5 h-5" /> Typical Agencies
                  </h3>
                  <ul className="space-y-2">
                    {typicalAgencies.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <X className="w-4 h-4 text-destructive shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
                
                <GlassCard className="border-primary/30">
                  <h3 className="font-display text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" /> NEXORA Difference
                  </h3>
                  <ul className="space-y-2">
                    {nexoraDifference.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="text-center py-16 px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our <span className="gradient-text">Success Stories?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together and create something extraordinary.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Let's Work Together
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
