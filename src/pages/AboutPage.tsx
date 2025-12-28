import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, Handshake, Zap, X, Check, Linkedin, Github, Twitter, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

import aliHaiderImg from "@/assets/team/ali-haider.jpg";
import usmanImg from "@/assets/team/usman.jpg";
import sarahAhmedImg from "@/assets/team/sarah-ahmed.jpg";
import hassanKhanImg from "@/assets/team/hassan-khan.jpg";

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

const team = [
  {
    name: "Ali Haider",
    role: "Founder & CEO",
    bio: "Ali Haider is the Founder of Nexora, a forward-thinking technology company focused on building smart, scalable, and AI-driven digital solutions. With a strong background in web development, software solutions, and digital innovation, Ali founded Nexora with a clear vision — to help businesses grow through modern technology and automation.",
    image: aliHaiderImg,
    initials: "AH",
    isFounder: true,
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Usman",
    role: "Senior Developer",
    bio: "Technical expertise meets creative problem-solving. Building robust solutions that scale with your business.",
    image: usmanImg,
    initials: "U",
    isFounder: false,
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Ahmed",
    role: "UI/UX Designer",
    bio: "Crafting intuitive and beautiful user experiences. Every interface is designed to delight users and drive conversions.",
    image: sarahAhmedImg,
    initials: "SA",
    isFounder: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Hassan Khan",
    role: "Backend Developer",
    bio: "Building the invisible architecture that powers your applications. Scalable, secure, and lightning-fast solutions.",
    image: hassanKhanImg,
    initials: "HK",
    isFounder: false,
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Award size={16} />
              <span className="text-sm font-medium">About Us</span>
            </motion.div>
            
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

      {/* Team Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate minds behind NEXORA's success
              </p>
            </div>
          </FadeInOnView>

          {/* Founder - Ali Haider (Full Width) */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassCard className="group overflow-hidden py-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative shrink-0"
                  >
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                        <img 
                          src={aliHaiderImg} 
                          alt="Ali Haider - Founder"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    >
                      <span className="text-xs font-semibold text-primary-foreground">Founder</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Info */}
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">Ali Haider</h3>
                    <p className="text-primary font-medium mb-4">CEO & Lead Developer</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {team[0].bio}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Driven by creativity and problem-solving, he believes in delivering solutions that are not only visually appealing but also highly functional and future-ready. Under his leadership, Nexora aims to bridge the gap between ideas and execution through intelligent systems and user-centric design.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Twitter size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.slice(1).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center group py-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto w-28 h-28 mb-6"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-accent via-primary to-accent p-1">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 px-2">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.socials.linkedin && (
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    )}
                    {member.socials.github && (
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {member.socials.twitter && (
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      >
                        <Twitter size={18} />
                      </motion.a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Founder's Story */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInOnView>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  From Struggle to <span className="gradient-text">Success</span>
                </h2>
              </div>
            </FadeInOnView>
            
            <FadeInOnView>
              <GlassCard className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    My journey with web development started in a small room with a second-hand laptop and a dream that seemed impossible.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    I was earning just 20,000 rupees a month, barely enough to get by. But every time I built a website for someone, watching their face light up when they saw their idea come to life—that was everything.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    I saw talented entrepreneurs with brilliant ideas being held back by terrible websites. I saw small businesses losing customers to competitors not because they were better, but because their websites LOOKED better.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-foreground font-medium"
                  >
                    That's when I realized: everyone deserves a website that matches their ambition.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    NEXORA was born from that belief. Today, we've helped over 50 businesses transform their online presence. Every project we take on carries the same care and dedication as if it were our own business.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-primary font-semibold text-xl"
                  >
                    Because at the end of the day, your success is our success. Your growth is our mission. Your dream is our project.
                  </motion.p>
                </div>
              </GlassCard>
            </FadeInOnView>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                To empower businesses with cutting-edge web solutions that don't just meet expectations—they shatter them.
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInOnView key={value.title} delay={index * 0.1}>
                <GlassCard className="h-full text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInOnView>
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
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInOnView>

            {/* Comparison */}
            <FadeInOnView delay={0.3}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                  The <span className="gradient-text">NEXORA</span> Difference
                </h2>
                <div className="grid gap-6">
                  <GlassCard>
                    <h3 className="font-display text-lg font-semibold mb-4 text-destructive flex items-center gap-2">
                      <X className="w-5 h-5" /> Typical Agencies
                    </h3>
                    <ul className="space-y-3">
                      {typicalAgencies.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-muted-foreground">
                          <X className="w-4 h-4 text-destructive shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                  
                  <GlassCard className="border-primary/30">
                    <h3 className="font-display text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                      <Check className="w-5 h-5" /> The NEXORA Way
                    </h3>
                    <ul className="space-y-3">
                      {nexoraDifference.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="gradient-text">Transform</span> Your Business?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                  Let's discuss how we can turn your vision into reality. No pressure, just a friendly conversation about possibilities.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
