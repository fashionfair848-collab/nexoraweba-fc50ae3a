import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Phone, Calendar, MessageSquare, Mic, Brain, Zap, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const aiFeatures = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "24/7 intelligent phone answering that books reservations, answers FAQs, and never puts customers on hold.",
    benefits: ["Never miss a call", "Book 3x more reservations", "Reduce staff workload"],
  },
  {
    icon: Calendar,
    title: "Smart Booking System",
    description: "Automated reservation management that syncs with your calendar and sends reminders.",
    benefits: ["Zero double-bookings", "Automatic confirmations", "No-show reduction"],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Support",
    description: "Instant customer support via website chat, WhatsApp, and social media—all powered by AI.",
    benefits: ["Instant responses", "Multi-language support", "24/7 availability"],
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "AI-powered insights that help you understand customer behavior and optimize operations.",
    benefits: ["Predict busy hours", "Customer insights", "Revenue optimization"],
  },
];

const stats = [
  { value: "85%", label: "Reduction in missed calls" },
  { value: "3x", label: "More reservations booked" },
  { value: "50%", label: "Less staff time on phones" },
  { value: "24/7", label: "Customer availability" },
];

const AIAgentsSection = () => {
  return (
    <SectionWrapper className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <FadeInOnView>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              NEW: AI-Powered Solutions
              <Sparkles size={16} />
            </motion.div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Transform Your Restaurant with{" "}
              <span className="gradient-text">AI Agents</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stop losing customers to missed calls and slow responses. Our AI agents work 24/7 to handle reservations, answer questions, and grow your business.
            </p>
          </div>
        </FadeInOnView>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <FadeInOnView key={stat.label} delay={index * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </FadeInOnView>
          ))}
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <FadeInOnView key={feature.title} delay={index * 0.15}>
              <GlassCard className="h-full group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1"
                        >
                          <CheckCircle size={12} />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeInOnView>
          ))}
        </div>

        {/* Demo Section */}
        <FadeInOnView delay={0.3}>
          <GlassCard className="relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Mic size={14} />
                  Live Demo Available
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  See Our AI Voice Agent in Action
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience how our AI handles a real restaurant call. It sounds natural, understands accents, and books reservations seamlessly—just like your best employee, but available 24/7.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Handles complex reservations with ease",
                    "Answers menu questions accurately",
                    "Speaks multiple languages fluently",
                    "Syncs with your existing systems",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="glow" size="lg" asChild>
                    <Link to="/contact">
                      Get AI for Your Restaurant
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://wa.me/923255446976?text=Hi! I want to see a demo of the AI Voice Agent for my restaurant." target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2" size={18} />
                      Request Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* AI Visual */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full border-2 border-primary/30"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border-2 border-primary/40"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.4, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Center bot */}
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-4 border-dashed border-primary-foreground/20"
                    />
                    <Bot className="w-16 h-16 text-primary-foreground" />
                  </div>
                  
                  {/* Floating icons */}
                  <motion.div
                    className="absolute top-4 right-8 p-3 rounded-xl bg-card border border-border shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-8 left-4 p-3 rounded-xl bg-card border border-border shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <Calendar className="w-5 h-5 text-accent" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-20 right-4 p-3 rounded-xl bg-card border border-border shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeInOnView>

        {/* Target Industries */}
        <FadeInOnView delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Perfect for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Restaurants", "Cafés", "Hotels", "Spas", "Clinics", "Salons", "Event Venues"].map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </FadeInOnView>
      </div>
    </SectionWrapper>
  );
};

export default AIAgentsSection;
