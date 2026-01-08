import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Headphones, Mail, Phone, MessageCircle, Clock, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const supportTiers = [
  {
    name: "Basic",
    price: "Included",
    features: ["Email support", "48-hour response time", "Business hours only", "Bug fixes included"],
    recommended: false,
  },
  {
    name: "Priority",
    price: "$299/mo",
    features: ["All Basic features", "24-hour response time", "Phone support", "Priority queue", "Monthly check-ins"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Priority features", "4-hour response time", "Dedicated support agent", "24/7 availability", "Slack channel access"],
    recommended: false,
  },
];

const contactChannels = [
  { icon: Mail, title: "Email", description: "support@nexora.dev", action: "Send Email" },
  { icon: Phone, title: "Phone", description: "+92 300 1234567", action: "Call Us" },
  { icon: MessageCircle, title: "Live Chat", description: "Available 9 AM - 6 PM", action: "Start Chat" },
];

const SupportPage = () => {
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
            <Headphones size={16} />
            <span className="text-sm font-medium">Client Support</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            We've Got Your <span className="gradient-text">Back</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Reliable support when you need it most
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Support Tiers */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Support <span className="gradient-text">Options</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className={`h-full relative ${tier.recommended ? 'border-primary/50 ring-2 ring-primary/20' : ''}`}>
                  {tier.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-primary-foreground">
                      Recommended
                    </div>
                  )}
                  <div className="text-center mb-6 pt-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{tier.name}</h3>
                    <div className="text-2xl font-bold gradient-text mt-2">{tier.price}</div>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={tier.recommended ? "hero" : "outline"} className="w-full mt-6">
                    Get Started
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Channels */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              How to <span className="gradient-text">Get Help</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{channel.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{channel.description}</p>
                    <Button variant="outline" size="sm">{channel.action}</Button>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Support <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SupportPage;
