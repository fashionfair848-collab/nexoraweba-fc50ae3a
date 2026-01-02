import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Shield, Smartphone, Globe, Server, Palette, BarChart3, Users, Clock, Award, Lightbulb, Target, FileSearch, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TestimonialSlider from "@/components/ui/TestimonialSlider";
import StatsCounter from "@/components/ui/StatsCounter";
import LogoSlider from "@/components/ui/LogoSlider";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance with sub-2-second load times", details: ["CDN Integration", "Image Optimization", "Code Splitting"] },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime", details: ["SSL Certificates", "DDoS Protection", "Regular Backups"] },
  { icon: Smartphone, title: "Fully Responsive", description: "Perfect experience on all devices", details: ["Mobile-First Design", "Touch Optimized", "Cross-Browser"] },
  { icon: Globe, title: "SEO Optimized", description: "Built for search engine visibility", details: ["Meta Tags", "Schema Markup", "Core Web Vitals"] },
  { icon: Server, title: "Scalable Architecture", description: "Grows with your business needs", details: ["Cloud Hosting", "Load Balancing", "Auto-Scaling"] },
  { icon: Palette, title: "Custom Design", description: "Unique designs tailored to your brand", details: ["UI/UX Design", "Brand Integration", "Animations"] },
];

const processSteps = [
  { title: "Discovery & Planning", description: "We analyze your requirements and create a detailed roadmap", icon: Lightbulb, details: ["Requirements gathering", "Competitor analysis", "Technical specifications", "Project timeline"] },
  { title: "Design & Prototyping", description: "Creating wireframes and visual designs for your approval", icon: Palette, details: ["Wireframe creation", "UI/UX design", "Interactive prototypes", "Design reviews"] },
  { title: "Development", description: "Building your website with clean, maintainable code", icon: Code, details: ["Frontend development", "Backend integration", "API development", "Database setup"] },
  { title: "Testing & QA", description: "Rigorous testing to ensure everything works perfectly", icon: FileSearch, details: ["Cross-browser testing", "Performance testing", "Security audits", "User acceptance testing"] },
  { title: "Launch & Support", description: "Deploying your site and providing ongoing support", icon: Rocket, details: ["Deployment", "DNS configuration", "Monitoring setup", "24/7 support"] },
];

const testimonials = [
  { name: "Sarah Johnson", role: "CEO", company: "TechStart Inc", content: "NEXORA transformed our online presence completely. The website they built exceeded our expectations and increased our conversions by 150%.", rating: 5 },
  { name: "Michael Chen", role: "Marketing Director", company: "GrowthLabs", content: "Professional team, excellent communication, and outstanding results. Our new website loads incredibly fast and looks amazing.", rating: 5 },
  { name: "Emily Davis", role: "Founder", company: "EcoShop", content: "The e-commerce platform they built handles thousands of orders daily without any issues. Highly recommended!", rating: 5 },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered", icon: Award },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Users },
  { value: 24, suffix: "/7", label: "Support Available", icon: Clock },
  { value: 50, suffix: "+", label: "Expert Developers", icon: Code },
];

const faqs = [
  { question: "How long does it take to build a website?", answer: "Typical projects take 4-12 weeks depending on complexity. A simple landing page might take 2-3 weeks, while a complex web application could take 3-6 months." },
  { question: "What technologies do you use?", answer: "We use modern technologies including React, Next.js, Node.js, TypeScript, and more. We select the best tech stack based on your specific requirements." },
  { question: "Do you provide hosting and maintenance?", answer: "Yes! We offer comprehensive hosting solutions and ongoing maintenance packages to keep your website secure, fast, and up-to-date." },
  { question: "Can you redesign my existing website?", answer: "Absolutely! We can modernize your existing website while preserving your content and improving performance, SEO, and user experience." },
  { question: "What is your pricing model?", answer: "We offer both fixed-price projects and retainer-based engagements. Pricing depends on project scope, complexity, and timeline requirements." },
];

const clientLogos = [
  { name: "TechCorp" }, { name: "Innovate" }, { name: "GrowthLabs" }, { name: "StartupX" }, { name: "CloudFirst" }, { name: "DataDrive" },
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <Breadcrumbs customLabels={{ "web-development": "Web Development" }} />
      </div>

      {/* Hero Section */}
      <SectionWrapper className="py-12 lg:py-20 section-glow overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Code size={16} />
              <span className="text-sm font-medium">Web Development</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom <span className="gradient-text">Web Development</span> Solutions
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From stunning landing pages to complex web applications, we build digital experiences that captivate users and drive business growth.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <StatsCounter stats={stats} />
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper className="py-16 lg:py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Choose Our <span className="gradient-text">Web Development</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We deliver websites that are fast, secure, and built to convert visitors into customers.</p>
            </div>
          </FadeInOnView>
          <FeatureGrid features={features} columns={3} />
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Development Process</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A proven methodology that delivers results on time, every time.</p>
            </div>
          </FadeInOnView>
          <ProcessTimeline steps={processSteps} />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-16 lg:py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
            </div>
          </FadeInOnView>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </SectionWrapper>

      {/* Client Logos */}
      <SectionWrapper className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <LogoSlider logos={clientLogos} title="Trusted by leading companies worldwide" />
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            </div>
          </FadeInOnView>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInOnView>
            <GlassCard className="py-12 lg:py-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss your project and create something amazing together.</p>
              <Button variant="glow" size="lg" asChild>
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default WebDevelopmentPage;