import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCw, Check, Shield, Gauge, Database, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const maintenancePlans = [
  {
    name: "Basic",
    price: "$199/mo",
    features: ["Security updates", "Monthly backups", "Uptime monitoring", "Email support"],
    recommended: false,
  },
  {
    name: "Standard",
    price: "$399/mo",
    features: ["All Basic features", "Weekly backups", "Performance optimization", "Content updates (2hrs/mo)", "Priority support"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "$799/mo",
    features: ["All Standard features", "Daily backups", "Unlimited content updates", "Feature enhancements", "Dedicated manager", "24/7 support"],
    recommended: false,
  },
];

const includedServices = [
  { icon: RefreshCw, title: "Regular Updates", description: "Framework and plugin updates" },
  { icon: Database, title: "Backups", description: "Automated data protection" },
  { icon: Shield, title: "Security", description: "Patches and vulnerability fixes" },
  { icon: Gauge, title: "Optimization", description: "Speed and performance tuning" },
  { icon: Clock, title: "Monitoring", description: "24/7 uptime monitoring" },
];

const MaintenancePage = () => {
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
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Maintenance</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Always <span className="gradient-text">Up-to-Date</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Keep your website running smoothly with our maintenance plans
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Maintenance Plans */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Maintenance <span className="gradient-text">Plans</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className={`h-full relative ${plan.recommended ? 'border-primary/50 ring-2 ring-primary/20' : ''}`}>
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-primary-foreground">
                      Best Value
                    </div>
                  )}
                  <div className="text-center mb-6 pt-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                    <div className="text-3xl font-bold gradient-text mt-2">{plan.price}</div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.recommended ? "hero" : "outline"} className="w-full mt-6">
                    Choose Plan
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What's <span className="gradient-text">Included</span>
            </h2>
          </FadeInOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {includedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-xs">{service.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Maintenance Plan <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MaintenancePage;
