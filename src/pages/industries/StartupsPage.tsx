import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap, DollarSign, TrendingUp, Target, Users, Clock, CheckCircle, Code2, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const benefits = [
  { icon: Clock, title: "Fast Turnaround", description: "MVP in 4-8 weeks with agile development sprints" },
  { icon: DollarSign, title: "Startup-Friendly Pricing", description: "Flexible payment plans that work with your runway" },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Architecture designed to grow with your user base" },
  { icon: Code2, title: "Modern Tech Stack", description: "Latest technologies for competitive advantage" },
];

const services = [
  { title: "Idea Validation", description: "Market research, competitor analysis, and feasibility studies", icon: Lightbulb },
  { title: "MVP Development", description: "Core features built fast to test product-market fit", icon: Rocket },
  { title: "Product Scaling", description: "Expand features and optimize for growth", icon: TrendingUp },
  { title: "Growth Hacking", description: "Technical strategies to accelerate user acquisition", icon: BarChart3 },
];

const techStack = [
  { name: "React/Next.js", category: "Frontend" },
  { name: "Node.js/Python", category: "Backend" },
  { name: "MongoDB/PostgreSQL", category: "Database" },
  { name: "AWS/Vercel", category: "Cloud" },
  { name: "Stripe/Firebase", category: "Tools" },
];

const StartupsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <Rocket size={16} />
                <span className="text-sm font-medium">Startups & Scale-ups</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Launch & Scale Your <span className="gradient-text">Startup</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                From MVP to market leader—we're with you at every stage. Build faster, scale smarter, and outpace your competition.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your MVP <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">See Startup Projects</Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <GlassCard className="relative text-center py-12">
                <div className="text-6xl font-display font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Startups Helped Launch</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">4-8</div>
                    <p className="text-xs text-muted-foreground">Weeks to MVP</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50M+</div>
                    <p className="text-xs text-muted-foreground">Funding Raised</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Startups <span className="gradient-text">Choose Us</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We understand the unique challenges startups face and deliver solutions that match your pace
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FadeInOnView key={benefit.title} delay={index * 0.1}>
                <GlassCard className="h-full text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Journey */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Your Startup <span className="gradient-text">Journey</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeInOnView key={service.title} delay={index * 0.15}>
                <GlassCard className="h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="text-5xl font-display font-bold text-primary/10 mb-4">0{index + 1}</div>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Tech Stack */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Tech Stack for <span className="gradient-text">Startups</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <FadeInOnView key={tech.name} delay={index * 0.1}>
                <div className="px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({tech.category})</span>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Startup <span className="gradient-text">Packages</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "MVP Basic", price: "$5,000", features: ["Core features only", "Basic UI design", "4 weeks delivery", "1 month support"] },
              { name: "MVP Plus", price: "$10,000", features: ["Extended features", "Custom design", "User authentication", "6 weeks delivery", "3 months support"], popular: true },
              { name: "Full Product", price: "$20,000+", features: ["Market-ready product", "Admin dashboard", "Advanced features", "8-12 weeks", "6 months support"] },
            ].map((pkg, index) => (
              <FadeInOnView key={pkg.name} delay={index * 0.15}>
                <GlassCard className={`h-full ${pkg.popular ? "border-primary/50 shadow-lg shadow-primary/10" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Launch Your Startup?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join 100+ startups that trusted NEXORA to build their digital products.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default StartupsPage;
