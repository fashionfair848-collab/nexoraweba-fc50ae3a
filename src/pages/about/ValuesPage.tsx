import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Flame, Sparkles, Handshake, Zap, Shield, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const coreValues = [
  {
    icon: Flame,
    title: "Innovation First",
    description: "We stay ahead of trends, master emerging technologies, and bring fresh ideas to every project we undertake.",
  },
  {
    icon: Sparkles,
    title: "Quality Over Everything",
    description: "We don't cut corners. Every pixel, every line of code is crafted with obsessive attention to detail.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "You're not just a client—you're a partner. Your goals become our goals, your success is our success.",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "We deliver on time, every time. Deadlines are promises, and we always keep our promises.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Honest communication, clear pricing, no hidden surprises. Building trust through every interaction.",
  },
];

const impact = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: TrendingUp, value: "300%", label: "Avg. Lead Increase" },
  { icon: Globe, value: "15+", label: "Countries Served" },
];

const ValuesPage = () => {
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
            <Target size={16} />
            <span className="text-sm font-medium">Our Values</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            What <span className="gradient-text">Drives Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            The principles that guide every decision and every project
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Our Mission */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <GlassCard className="py-10">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that don't just meet expectations—they shatter them. 
                  We believe every entrepreneur, every startup, every business deserves a website and digital presence 
                  that matches their ambition and drives real growth.
                </p>
              </GlassCard>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Core <span className="gradient-text">Values</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center group hover:-translate-y-2 transition-transform duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Our Impact */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Impact</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {impact.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="text-center py-8">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Work With Us <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ValuesPage;
