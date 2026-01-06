import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Calendar, Video, FileText, Activity, Lock, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const solutions = [
  { icon: Users, title: "Patient Portals", description: "Secure access to health records and appointments" },
  { icon: Video, title: "Telemedicine Platforms", description: "HIPAA-compliant video consultations" },
  { icon: FileText, title: "EHR/EMR Systems", description: "Digital health record management" },
  { icon: Calendar, title: "Appointment Scheduling", description: "Automated booking and reminders" },
  { icon: Activity, title: "Health Tracking Apps", description: "Patient monitoring and wellness tools" },
  { icon: Shield, title: "Medical Billing", description: "Secure billing and claims processing" },
];

const compliance = [
  { title: "HIPAA Compliance", description: "Full compliance with healthcare data regulations" },
  { title: "End-to-End Encryption", description: "All data encrypted in transit and at rest" },
  { title: "Secure Authentication", description: "Multi-factor authentication for all users" },
  { title: "Audit Trails", description: "Complete logging of all data access" },
  { title: "Data Backup", description: "Automated backups with disaster recovery" },
];

const HealthcarePage = () => {
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
              <Heart size={16} />
              <span className="text-sm font-medium">Healthcare & Medical</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              HIPAA-Compliant <span className="gradient-text">Healthcare Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Secure, compliant technology solutions for modern healthcare providers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2" size={18} /></Link>
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
                Healthcare <span className="gradient-text">Solutions</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <FadeInOnView key={solution.title} delay={index * 0.1}>
                <GlassCard className="h-full group hover:-translate-y-2 transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground text-sm">{solution.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compliance & Security */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Compliance & <span className="gradient-text">Security</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We prioritize security and compliance in every healthcare solution we build.
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {compliance.map((item, index) => (
              <FadeInOnView key={item.title} delay={index * 0.1}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <Lock className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Case Study */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-primary font-medium">Case Study</span>
                  <h3 className="font-display text-2xl font-bold mb-4 mt-2">Telehealth Platform</h3>
                  <p className="text-muted-foreground mb-6">
                    Built a HIPAA-compliant telemedicine platform serving 10,000+ patients with video consultations, 
                    prescription management, and integrated billing.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">10K+</div>
                      <p className="text-sm text-muted-foreground">Active Patients</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">99.9%</div>
                      <p className="text-sm text-muted-foreground">Uptime</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Heart className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Healthcare <span className="gradient-text">Packages</span>
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Patient Portal", price: "$15,000 - $30,000", features: ["Secure login", "Health records access", "Appointment booking", "Messaging system"] },
              { name: "Telemedicine", price: "$25,000 - $50,000", features: ["Video consultations", "E-prescriptions", "Payment integration", "Mobile apps"], popular: true },
              { name: "Custom EHR", price: "$50,000+", features: ["Full EHR system", "Multi-provider", "Custom workflows", "Integration APIs"] },
            ].map((pkg, index) => (
              <FadeInOnView key={pkg.name} delay={index * 0.15}>
                <GlassCard className={`h-full ${pkg.popular ? "border-primary/50" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">Most Popular</span>
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
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
              <h2 className="font-display text-3xl font-bold mb-4">Transform Healthcare Delivery</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's build secure, compliant solutions that improve patient care.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule Consultation <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HealthcarePage;
