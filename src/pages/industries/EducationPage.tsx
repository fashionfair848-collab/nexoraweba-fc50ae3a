import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Video, Award, Users, BarChart3, CheckCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: BookOpen, title: "Learning Management", description: "Complete LMS with courses, quizzes, and certifications" },
  { icon: Video, title: "Video Streaming", description: "High-quality video hosting and streaming" },
  { icon: Award, title: "Certification System", description: "Automated certificates and badges" },
  { icon: Users, title: "Student Management", description: "Enrollment, progress tracking, and reporting" },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Learning analytics and performance insights" },
  { icon: Play, title: "Interactive Content", description: "Quizzes, assignments, and interactive lessons" },
];

const features = [
  "Course Builder", "Video Hosting", "Quiz Engine", "Progress Tracking",
  "Discussion Forums", "Live Classes", "Mobile Apps", "Payment Integration"
];

const EducationPage = () => {
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
              <GraduationCap size={16} />
              <span className="text-sm font-medium">Education & E-learning</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transform <span className="gradient-text">Education</span> Delivery
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Build engaging e-learning platforms that inspire students and simplify teaching.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Build Your LMS <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <p className="text-sm text-muted-foreground">Students Taught</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-sm text-muted-foreground">Platforms Built</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
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
                E-learning <span className="gradient-text">Solutions</span>
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

      {/* Pricing */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                LMS <span className="gradient-text">Packages</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter LMS", price: "$8,000", features: ["5 courses", "Basic video hosting", "Quiz engine", "Student dashboard"] },
              { name: "Professional", price: "$20,000", features: ["Unlimited courses", "HD video streaming", "Live classes", "Mobile apps", "Analytics"], popular: true },
              { name: "Enterprise", price: "Custom", features: ["White-label", "Custom features", "API access", "Priority support"] },
            ].map((pkg, index) => (
              <FadeInOnView key={pkg.name} delay={index * 0.15}>
                <GlassCard className={`h-full ${pkg.popular ? "border-primary/50" : ""}`}>
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
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Ready to Revolutionize Learning?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Build an e-learning platform that engages students and scales with your growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default EducationPage;
