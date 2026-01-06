import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, CreditCard, TrendingUp, Package, BarChart3, Shield, Truck, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: ShoppingCart, title: "Store Migration", description: "Seamlessly migrate from any platform to your new optimized store" },
  { icon: TrendingUp, title: "Conversion Optimization", description: "Data-driven improvements to boost your conversion rates" },
  { icon: Package, title: "Inventory Management", description: "Real-time stock tracking and automated reordering" },
  { icon: Users, title: "Customer Retention", description: "Loyalty programs and personalized experiences" },
];

const platforms = [
  { name: "Shopify", description: "Quick setup, easy management", best: "Small to medium stores" },
  { name: "WooCommerce", description: "WordPress-based flexibility", best: "Content-rich stores" },
  { name: "Custom Build", description: "Fully tailored solution", best: "Unique requirements" },
  { name: "Magento", description: "Enterprise-level features", best: "Large catalogs" },
];

const features = [
  "Product Management", "Inventory Tracking", "Payment Gateway Integration",
  "Shipping Calculator", "Multi-currency Support", "Customer Reviews",
  "Discount Coupons", "Analytics Dashboard"
];

const EcommerceIndustryPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <ShoppingCart size={16} />
                <span className="text-sm font-medium">E-commerce Solutions</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Grow Your <span className="gradient-text">Online Store</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Complete e-commerce solutions for modern retailers. From store setup to conversion optimization.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Upgrade Your Store <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="text-center py-10">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">250%</div>
                    <p className="text-sm text-muted-foreground">Avg. Revenue Increase</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">45%</div>
                    <p className="text-sm text-muted-foreground">Higher Conversion</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">30%</div>
                    <p className="text-sm text-muted-foreground">Cost Reduction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">100+</div>
                    <p className="text-sm text-muted-foreground">Stores Built</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                E-commerce <span className="gradient-text">Solutions</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <FadeInOnView key={solution.title} delay={index * 0.1}>
                <GlassCard className="h-full text-center group hover:-translate-y-2 transition-transform">
                  <solution.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Platforms */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Platform <span className="gradient-text">Expertise</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <FadeInOnView key={platform.name} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <h3 className="font-display text-xl font-bold mb-2 text-primary">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Best for:</span> {platform.best}
                  </p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Essential <span className="gradient-text">Features</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <FadeInOnView key={feature} delay={index * 0.05}>
                <div className="flex items-center gap-2 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Payment & Security */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Payment & Security</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We integrate with all major payment gateways and ensure PCI compliance for secure transactions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Visa", "Mastercard", "PayPal", "Stripe", "Apple Pay"].map((payment) => (
                  <div key={payment} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {payment}
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Sell More Online?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's build an e-commerce experience your customers will love.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Store <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default EcommerceIndustryPage;
