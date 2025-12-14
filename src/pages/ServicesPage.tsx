import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Rocket, Star, Zap, Clock, MessageSquare, FileText, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";

const packages = [
  {
    name: "Starter",
    icon: Rocket,
    price: "$500 - $1,000",
    tagline: "Perfect for ambitious startups ready to make their mark",
    features: [
      "Stunning, modern landing page",
      "Fully responsive design",
      "Up to 3 pages",
      "Professional contact form",
      "Basic SEO setup",
      "Fast loading speeds",
      "2-week delivery",
      "1 month free support",
    ],
    bestFor: "New businesses, consultants, freelancers, small services",
    timeline: "10-14 days",
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: "$1,500 - $3,000",
    tagline: "For growing businesses ready to dominate their industry",
    features: [
      "Complete custom website",
      "Content Management System",
      "Up to 10 pages",
      "Advanced SEO & Analytics",
      "Blog/News section",
      "Social media integration",
      "Newsletter signup",
      "4-6 week delivery",
      "3 months premium support",
    ],
    bestFor: "Established businesses, e-commerce stores, agencies, restaurants",
    timeline: "4-6 weeks",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Zap,
    price: "$5,000+",
    tagline: "For visionaries who refuse to settle for ordinary",
    features: [
      "Full-stack web application",
      "Custom backend & API",
      "Database design",
      "User authentication",
      "Admin dashboard",
      "Payment integration",
      "Real-time features",
      "8-12 week delivery",
      "6 months VIP support",
    ],
    bestFor: "SaaS companies, booking platforms, marketplaces",
    timeline: "8-12 weeks",
    popular: false,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    icon: MessageSquare,
    description: "Deep-dive consultation to understand your goals, audience, and competitors.",
    duration: "Week 1",
  },
  {
    step: 2,
    title: "Design",
    icon: Palette,
    description: "Custom mockups, wireframes, and finalizing the visual direction.",
    duration: "Week 2-3",
  },
  {
    step: 3,
    title: "Development",
    icon: Code2,
    description: "Clean, efficient code with regular progress updates and testing.",
    duration: "Week 3-8",
  },
  {
    step: 4,
    title: "Launch & Support",
    icon: Rocket,
    description: "Final testing, SEO optimization, going live, and ongoing support.",
    duration: "Week 8+",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Investment, Not <span className="gradient-text">Expense</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Every dollar you invest with us is a dollar working toward your business growth. We don't just build websites—we build revenue-generating machines.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Packages Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <GlassCard
                  className={`h-full flex flex-col ${
                    pkg.popular ? "border-primary/50 shadow-[0_0_30px_hsl(210_72%_59%/0.2)]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <pkg.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">{pkg.name}</h3>
                      <p className="text-primary font-semibold">{pkg.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 italic">"{pkg.tagline}"</p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Timeline: {pkg.timeline}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>
                  
                  <Button
                    variant={pkg.popular ? "glow" : "outline"}
                    className="w-full mt-6"
                    asChild
                  >
                    <Link to="/contact">
                      Choose {pkg.name}
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          
          {/* Custom Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <GlassCard className="text-center py-12">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Have something unique in mind? We love challenges. If your project doesn't fit these boxes, we'll create a custom proposal that fits your exact needs and budget.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Process Timeline */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers results, every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <GlassCard className="text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-primary mb-3">{step.duration}</p>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </GlassCard>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <GlassCard className="text-center py-16 px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Book a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServicesPage;
