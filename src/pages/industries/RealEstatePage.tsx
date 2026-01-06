import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Search, MapPin, Calendar, Camera, Users, Building2, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: Building2, title: "Property Listing Platforms", description: "Advanced search and listing management" },
  { icon: Users, title: "Agent Management", description: "CRM and lead tracking for agents" },
  { icon: Camera, title: "Virtual Tours", description: "360° property tours and staging" },
  { icon: Calendar, title: "Appointment Booking", description: "Automated scheduling system" },
  { icon: BarChart3, title: "Property Valuation", description: "AI-powered price estimation" },
  { icon: MapPin, title: "Map Integration", description: "Location-based property search" },
];

const features = [
  "Advanced Search Filters", "Map-based Browsing", "Mortgage Calculator",
  "Saved Searches & Alerts", "Agent Profiles", "Property Comparisons",
  "Virtual Staging", "Lead Capture Forms"
];

const RealEstatePage = () => {
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
                <Home size={16} />
                <span className="text-sm font-medium">Real Estate</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Modern <span className="gradient-text">Real Estate</span> Technology
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground mb-8"
              >
                From listings to virtual tours—digital-first solutions for real estate professionals.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Build Your Platform <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Property Platform Preview</p>
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
                Real Estate <span className="gradient-text">Solutions</span>
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

      {/* Features */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Platform <span className="gradient-text">Features</span>
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

      {/* Virtual Tours */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Camera className="w-20 h-20 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Virtual Tour Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    Immersive 360° virtual tours that let buyers explore properties from anywhere. 
                    Increase engagement and reduce in-person showing time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>360° panoramic views</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Floor plan integration</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Mobile-friendly experience</span>
                    </li>
                  </ul>
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
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Transform Your Real Estate Business?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Build a platform that helps you sell more properties, faster.
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

export default RealEstatePage;
