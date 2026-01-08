import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Coffee, Laptop, GraduationCap, Plane, Clock, Dumbbell, Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const workStyle = [
  { title: "Remote-First", description: "Work from anywhere. We believe in flexibility and trust." },
  { title: "Collaborative Spirit", description: "Open communication, brainstorming sessions, and shared goals." },
  { title: "Continuous Learning", description: "Weekly learning sessions and conference sponsorships." },
  { title: "Work-Life Balance", description: "Flexible hours, mental health days, and no weekend work." },
];

const perks = [
  { icon: Laptop, title: "Remote Work", description: "Work from anywhere in the world" },
  { icon: GraduationCap, title: "Learning Budget", description: "$1,000/year for courses & conferences" },
  { icon: Coffee, title: "Home Office Setup", description: "Equipment allowance for your setup" },
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
  { icon: Plane, title: "Paid Time Off", description: "Generous vacation policy" },
  { icon: Dumbbell, title: "Health & Wellness", description: "Gym membership reimbursement" },
  { icon: Gift, title: "Birthday Off", description: "Celebrate your special day" },
  { icon: Heart, title: "Team Events", description: "Monthly virtual hangouts & meetups" },
];

const CulturePage = () => {
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
            <Heart size={16} />
            <span className="text-sm font-medium">Our Culture</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Life at <span className="gradient-text">NEXORA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Where innovation meets work-life balance. Join a team that values your growth.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              How We <span className="gradient-text">Work</span>
            </h2>
          </FadeInOnView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workStyle.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Perks & Benefits */}
      <SectionWrapper className="py-20 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Perks & <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              We take care of our team so they can take care of our clients
            </p>
          </FadeInOnView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="h-full group hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{perk.title}</h3>
                        <p className="text-muted-foreground text-sm">{perk.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Life Gallery */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Team <span className="gradient-text">Life</span>
            </h2>
          </FadeInOnView>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-sm">Team Photo {item}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeInOnView>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about/careers">Join Our Team <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CulturePage;
