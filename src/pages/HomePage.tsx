import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Rocket, Users, Heart, Shield, Code, Zap, Layers, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";
import HeroBackground from "@/components/hero/HeroBackground";
import { ReactIcon, NodeIcon, MongoIcon, ExpressIcon, NextIcon, TypeScriptIcon, TailwindIcon, ThreeIcon, TechStackItem } from "@/components/icons/TechIcons";

const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind", icon: <TailwindIcon /> },
  { name: "Three.js", icon: <ThreeIcon /> },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    company: "CEO, GrowthLabs",
    text: "Working with NEXORA was like finding a secret weapon. Our new website doesn't just look incredible—it brought us 10x more leads in the first month. Ali is a genius!",
    rating: 5,
    avatar: "ST",
  },
  {
    name: "Michael Chen",
    company: "Founder, TechStart",
    text: "The attention to detail and professionalism exceeded all expectations. Our web app handles thousands of users flawlessly. Highly recommended!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    company: "Marketing Director, BrandCo",
    text: "NEXORA transformed our online presence completely. The design is stunning and the performance is outstanding. Best investment we've made!",
    rating: 5,
    avatar: "ER",
  },
];

const services = [
  {
    icon: Code,
    title: "Stunning Websites That Convert",
    description: "From elegant landing pages to complex e-commerce platforms, we build responsive, SEO-optimized websites that turn visitors into customers.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Zap,
    title: "Powerful Web Apps That Scale",
    description: "Custom web applications with robust backends, real-time features, and intuitive interfaces that users love and businesses depend on.",
    features: ["Real-time Features", "Scalable Backend", "User-Friendly"],
  },
  {
    icon: Layers,
    title: "Complete Digital Ecosystems",
    description: "End-to-end solutions including frontend, backend, database, APIs, authentication, payments—everything your business needs to thrive online.",
    features: ["Full-Stack", "Payment Integration", "Authentication"],
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 40, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Heart },
  { value: 24, suffix: "/7", label: "Support & Maintenance", icon: Shield },
];

const team = [
  {
    name: "Ali Haider",
    role: "CEO & Lead Developer",
    initials: "AH",
    isFounder: true,
  },
  {
    name: "Usman",
    role: "Partner & Developer",
    initials: "U",
    isFounder: false,
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Vision Into{" "}
                <span className="gradient-text">Digital Reality</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We're not just developers—we're digital architects who turn your wildest ideas into pixel-perfect, high-converting web experiences that your competitors will envy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Magic</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeInOnView key={stat.label} delay={index * 0.1}>
                <GlassCard className="text-center group hover:-translate-y-2 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                What We <span className="gradient-text">Craft</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium digital solutions tailored to elevate your business
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInOnView key={service.title} delay={index * 0.15}>
                <GlassCard className="h-full group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1"
                      >
                        <CheckCircle size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
          
          <FadeInOnView delay={0.5}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Meet Your <span className="gradient-text">Digital Partners</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate team behind NEXORA's success
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Founder - Ali Haider (Large) */}
            <FadeInOnView className="lg:col-span-2">
              <GlassCard className="h-full group overflow-hidden py-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 group-hover:scale-105 transition-transform">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-5xl font-display font-bold text-primary">AH</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full">
                      <span className="text-xs font-semibold text-primary-foreground">Founder</span>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">Ali Haider</h3>
                    <p className="text-primary font-medium mb-4">CEO & Lead Developer</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Started with a dream and a second-hand laptop. Today, leading NEXORA to transform businesses with cutting-edge web solutions. Your success is my mission.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeInOnView>

            {/* Partner - Usman (Small) */}
            <FadeInOnView delay={0.15}>
              <GlassCard className="h-full text-center group py-10">
                <div className="relative mx-auto w-28 h-28 mb-6 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent via-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-3xl font-display font-bold text-accent">U</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Usman</h3>
                <p className="text-accent font-medium mb-3">Partner & Developer</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bringing technical expertise and creative solutions to every project we build together.
                </p>
              </GlassCard>
            </FadeInOnView>
          </div>

          <FadeInOnView delay={0.3}>
            <div className="text-center mt-10">
              <Button variant="glow" asChild>
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* Tech Stack */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Powered By <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-muted-foreground">Cutting-edge technologies for cutting-edge solutions</p>
            </div>
          </FadeInOnView>
          
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <TechStackItem key={tech.name} icon={tech.icon} name={tech.name} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Don't Just Take <span className="gradient-text">Our Word</span>
              </h2>
              <p className="text-muted-foreground">What our clients say about working with us</p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInOnView key={testimonial.name} delay={index * 0.15}>
                <GlassCard className="h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-sm font-semibold text-primary-foreground">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-16 px-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Ready to <span className="gradient-text">Stand Out</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's transform your digital presence together. Your competitors won't know what hit them.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
