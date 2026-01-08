import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, TrendingUp, Users, Star, ArrowRight, ExternalLink, ShoppingCart, Building, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const caseStudies = [
  {
    icon: ShoppingCart,
    title: "StyleHub E-commerce",
    industry: "Fashion & Retail",
    challenge: "Outdated platform with low conversion rates and poor mobile experience",
    solution: "Complete redesign with modern UI, optimized checkout flow, and mobile-first approach",
    results: [
      { value: "250%", label: "Increase in Sales" },
      { value: "45%", label: "Lower Bounce Rate" },
      { value: "3x", label: "Mobile Conversions" },
    ],
    image: "/placeholder.svg",
  },
  {
    icon: Building,
    title: "PropVista Real Estate",
    industry: "Real Estate",
    challenge: "Manual property management and poor lead capture system",
    solution: "Custom CRM with automated listings, virtual tours, and lead management",
    results: [
      { value: "400%", label: "More Leads" },
      { value: "60%", label: "Time Saved" },
      { value: "2x", label: "Property Views" },
    ],
    image: "/placeholder.svg",
  },
  {
    icon: Stethoscope,
    title: "MediCare Portal",
    industry: "Healthcare",
    challenge: "No online presence, appointment booking done manually via phone",
    solution: "HIPAA-compliant patient portal with online booking and telemedicine",
    results: [
      { value: "80%", label: "Online Bookings" },
      { value: "35%", label: "More Patients" },
      { value: "50%", label: "Admin Time Saved" },
    ],
    image: "/placeholder.svg",
  },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, StyleHub",
    content: "NEXORA transformed our online store completely. The results speak for themselves!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Director, PropVista",
    content: "The custom CRM they built has revolutionized how we manage properties and leads.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Founder, MediCare",
    content: "Professional, responsive, and delivered exactly what we needed. Highly recommend!",
    rating: 5,
  },
];

const CaseStudiesPage = () => {
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
            <FileText size={16} />
            <span className="text-sm font-medium">Case Studies</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Success <span className="gradient-text">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real results for real businesses. See how we've helped clients grow.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Project Image */}
                      <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-primary/30" />
                      </div>

                      {/* Project Details */}
                      <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-primary mb-2">{study.industry}</span>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-4">{study.title}</h3>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">Challenge</h4>
                            <p className="text-muted-foreground text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm mb-1">Solution</h4>
                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.results.map((result) => (
                            <div key={result.label} className="text-center p-3 rounded-lg bg-primary/5">
                              <div className="font-display text-xl font-bold gradient-text">{result.value}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        <Button variant="outline" className="self-start">
                          View Full Case Study <ExternalLink className="ml-2" size={14} />
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Client Testimonials */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Success Story <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CaseStudiesPage;
