import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, ShoppingCart, Heart, Home, GraduationCap, ShoppingBag, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const industries = [
  { 
    icon: Rocket, 
    title: "Startups & Scale-ups", 
    description: "Launch and scale with cutting-edge technology", 
    link: "/industries/startups",
    color: "from-violet-500 to-purple-600"
  },
  { 
    icon: ShoppingCart, 
    title: "E-commerce", 
    description: "Build powerful online retail experiences", 
    link: "/industries/ecommerce",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Heart, 
    title: "Healthcare", 
    description: "HIPAA-compliant healthcare solutions", 
    link: "/industries/healthcare",
    color: "from-rose-500 to-pink-500"
  },
  { 
    icon: Home, 
    title: "Real Estate", 
    description: "Property platforms and virtual tours", 
    link: "/industries/real-estate",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    icon: GraduationCap, 
    title: "Education", 
    description: "E-learning platforms that engage", 
    link: "/industries/education",
    color: "from-amber-500 to-orange-500"
  },
  { 
    icon: ShoppingBag, 
    title: "Retail & CPG", 
    description: "Omnichannel retail transformation", 
    link: "/industries/retail",
    color: "from-indigo-500 to-blue-500"
  },
  { 
    icon: Landmark, 
    title: "Banking & Fintech", 
    description: "Secure financial technology", 
    link: "/industries/fintech",
    color: "from-slate-500 to-gray-600"
  },
];

const IndustriesMainPage = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Industries <span className="gradient-text">We Serve</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Specialized solutions tailored to your industry's unique challenges and opportunities.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Industries Grid */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FadeInOnView key={industry.title} delay={index * 0.1}>
                <Link to={industry.link} className="block h-full">
                  <GlassCard className="h-full group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
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
              <h2 className="font-display text-3xl font-bold mb-4">Don't See Your Industry?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We work with businesses across all sectors. Let's discuss your unique needs.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default IndustriesMainPage;
