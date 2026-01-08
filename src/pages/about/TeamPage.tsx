import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Linkedin, Github, Twitter, ArrowRight, Code, Palette, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

import aliHaiderImg from "@/assets/team/ali-haider.jpg";
import usmanImg from "@/assets/team/usman.jpg";
import sarahAhmedImg from "@/assets/team/sarah-ahmed.jpg";
import hassanKhanImg from "@/assets/team/hassan-khan.jpg";

const leaders = [
  {
    name: "Ali Haider",
    role: "Founder & CEO",
    bio: "Visionary leader with 5+ years in web development. Founded NEXORA to bridge the gap between ideas and execution.",
    image: aliHaiderImg,
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Usman",
    role: "Senior Developer",
    bio: "Full-stack expert specializing in React and Node.js. Building robust solutions that scale.",
    image: usmanImg,
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Sarah Ahmed",
    role: "Lead UI/UX Designer",
    bio: "Creative designer crafting intuitive experiences. Every pixel matters in driving conversions.",
    image: sarahAhmedImg,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Hassan Khan",
    role: "Backend Architect",
    bio: "Database expert building the invisible architecture. Scalable, secure, lightning-fast.",
    image: hassanKhanImg,
    socials: { linkedin: "#", github: "#" },
  },
];

const expertise = [
  { icon: Code, name: "Frontend Development", level: 95 },
  { icon: Database, name: "Backend & APIs", level: 90 },
  { icon: Palette, name: "UI/UX Design", level: 88 },
  { icon: Brain, name: "AI Integration", level: 85 },
];

const TeamPage = () => {
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
            <Users size={16} />
            <span className="text-sm font-medium">Our Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Meet the <span className="gradient-text">Brilliant Minds</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Passionate experts dedicated to transforming your vision into reality
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Leadership <span className="gradient-text">Team</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center group hover:-translate-y-2 transition-transform duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/20"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    {member.socials.linkedin && (
                      <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={14} />
                      </motion.a>
                    )}
                    {member.socials.github && (
                      <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <Github size={14} />
                      </motion.a>
                    )}
                    {member.socials.twitter && (
                      <motion.a href="#" whileHover={{ scale: 1.2 }} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                        <Twitter size={14} />
                      </motion.a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Expertise */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Expertise</span>
            </h2>
          </FadeInOnView>

          <div className="max-w-2xl mx-auto space-y-6">
            {expertise.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground flex-1">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Join Our Team CTA */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                Want to <span className="gradient-text">Join Us?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We're always looking for talented individuals to join our team
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about/careers">View Open Positions <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TeamPage;
