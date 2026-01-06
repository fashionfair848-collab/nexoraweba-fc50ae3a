import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Package, BarChart3, Users, Smartphone, Store, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: Store, title: "Omnichannel Commerce", description: "Unified online and in-store experience" },
  { icon: Package, title: "Inventory Management", description: "Real-time stock tracking across locations" },
  { icon: Users, title: "Customer Loyalty", description: "Points, rewards, and personalization" },
  { icon: Smartphone, title: "Mobile Commerce", description: "Native apps and PWA solutions" },
  { icon: BarChart3, title: "Retail Analytics", description: "Sales insights and forecasting" },
  { icon: TrendingUp, title: "Marketing Automation", description: "Targeted campaigns and promotions" },
];

const RetailPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <ShoppingBag size={16} />
              <span className="text-sm font-medium">Retail & CPG</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Digital <span className="gradient-text">Retail</span> Solutions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Transform your retail business with omnichannel solutions that drive sales.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Transform Your Retail <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
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
                Retail <span className="gradient-text">Solutions</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <FadeInOnView key={solution.title} delay={index * 0.1}>
                <GlassCard className="h-full group hover:-translate-y-2 transition-transform">
                  <solution.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="max-w-4xl mx-auto text-center py-12">
              <h2 className="font-display text-3xl font-bold mb-8">Results We Deliver</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">35%</div>
                  <p className="text-sm text-muted-foreground">Sales Increase</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">50%</div>
                  <p className="text-sm text-muted-foreground">Better Retention</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">40%</div>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">2x</div>
                  <p className="text-sm text-muted-foreground">Online Traffic</p>
                </div>
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
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Modernize Your Retail?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Build a unified commerce experience that delights customers.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default RetailPage;
