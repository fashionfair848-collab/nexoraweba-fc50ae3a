import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Rocket, Users, Heart, Shield, Code, Zap, Layers, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionWrapper from "@/components/ui/SectionWrapper";
import HeroCanvas from "@/components/three/HeroCanvas";

// Tech stack icons as simple components
const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "🚂" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Three.js", icon: "🎲" },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    company: "CEO, GrowthLabs",
    text: "Working with NEXORA was like finding a secret weapon. Our new website doesn't just look incredible—it brought us 10x more leads in the first month. Ali is a genius!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Founder, TechStart",
    text: "The attention to detail and professionalism exceeded all expectations. Our web app handles thousands of users flawlessly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Marketing Director, BrandCo",
    text: "NEXORA transformed our online presence completely. The design is stunning and the performance is outstanding. Best investment we've made!",
    rating: 5,
  },
];

const services = [
  {
    icon: Code,
    title: "Stunning Websites That Convert",
    description: "From elegant landing pages to complex e-commerce platforms, we build responsive, SEO-optimized websites that turn visitors into customers.",
  },
  {
    icon: Zap,
    title: "Powerful Web Apps That Scale",
    description: "Custom web applications with robust backends, real-time features, and intuitive interfaces that users love and businesses depend on.",
  },
  {
    icon: Layers,
    title: "Complete Digital Ecosystems",
    description: "End-to-end solutions including frontend, backend, database, APIs, authentication, payments—everything your business needs to thrive online.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 40, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Heart },
  { value: 24, suffix: "/7", label: "Support & Maintenance", icon: Shield },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <HeroCanvas />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Vision Into{" "}
                <span className="gradient-text">Digital Reality</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We're not just developers—we're digital architects who turn your wildest ideas into pixel-perfect, high-converting web experiences that your competitors will envy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ delay: 1.5 }}
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
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Craft</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium digital solutions tailored to elevate your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Founder Spotlight */}
      <SectionWrapper className="py-24 section-glow">
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
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary-foreground">AH</span>
                  </div>
                  <p className="text-muted-foreground">Ali Haider</p>
                  <p className="text-sm text-primary">CEO & Lead Developer</p>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm Ali Haider — Your Partner in{" "}
                <span className="gradient-text">Digital Success</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey as a developer earning just 20,000 per month, watching businesses struggle with mediocre websites that failed to capture their brilliance. That frustration became my fuel.
                </p>
                <p>
                  Today, NEXORA isn't just a company—it's my promise to entrepreneurs and businesses: You deserve better. You deserve websites that work as hard as you do.
                </p>
                <p>
                  Every line of code I write, every design I create, every project we deliver carries one mission: Making your business shine online like never before.
                </p>
              </div>
              <Button variant="glow" className="mt-8" asChild>
                <Link to="/about">
                  Read My Full Story
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Tech Stack */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Powered By <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground">Cutting-edge technologies for cutting-edge solutions</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <GlassCard className="px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium text-foreground">{tech.name}</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Don't Just Take <span className="gradient-text">Our Word</span>
            </h2>
            <p className="text-muted-foreground">What our clients say about working with us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="text-center py-16 px-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Your Dream Website Is{" "}
              <span className="gradient-text">Just One Click Away</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Free consultation. No pressure. Just honest advice about what will work best for YOUR business.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span>✓ No credit card required</span>
              <span>✓ Response within 4 hours</span>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
