import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Rocket, Star, Zap, Clock, MessageSquare, FileText, Code2, Palette, Shield, TrendingUp, Users, Headphones, Award, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";

const ServicesPage = () => {
  const { t } = useTranslation();

  const packages = [
    {
      name: t('servicesPage.starter'),
      icon: Rocket,
      price: "$500 - $1,000",
      tagline: t('servicesPage.starterTagline', "Perfect for ambitious startups ready to make their mark"),
      features: [
        t('servicesPage.starterFeature1', "Stunning, modern landing page"),
        t('servicesPage.starterFeature2', "Fully responsive design"),
        t('servicesPage.starterFeature3', "Up to 3 pages"),
        t('servicesPage.starterFeature4', "Professional contact form"),
        t('servicesPage.starterFeature5', "Basic SEO setup"),
        t('servicesPage.starterFeature6', "Fast loading speeds"),
        t('servicesPage.starterFeature7', "2-week delivery"),
        t('servicesPage.starterFeature8', "1 month free support"),
      ],
      bestFor: t('servicesPage.starterBestFor', "New businesses, consultants, freelancers, small services"),
      timeline: "10-14 days",
      popular: false,
    },
    {
      name: t('servicesPage.professional'),
      icon: Star,
      price: "$1,500 - $3,000",
      tagline: t('servicesPage.professionalTagline', "For growing businesses ready to dominate their industry"),
      features: [
        t('servicesPage.proFeature1', "Complete custom website"),
        t('servicesPage.proFeature2', "Content Management System"),
        t('servicesPage.proFeature3', "Up to 10 pages"),
        t('servicesPage.proFeature4', "Advanced SEO & Analytics"),
        t('servicesPage.proFeature5', "Blog/News section"),
        t('servicesPage.proFeature6', "Social media integration"),
        t('servicesPage.proFeature7', "Newsletter signup"),
        t('servicesPage.proFeature8', "4-6 week delivery"),
        t('servicesPage.proFeature9', "3 months premium support"),
      ],
      bestFor: t('servicesPage.proBestFor', "Established businesses, e-commerce stores, agencies, restaurants"),
      timeline: "4-6 weeks",
      popular: true,
    },
    {
      name: t('servicesPage.enterprise'),
      icon: Zap,
      price: "$5,000+",
      tagline: t('servicesPage.enterpriseTagline', "For visionaries who refuse to settle for ordinary"),
      features: [
        t('servicesPage.entFeature1', "Full-stack web application"),
        t('servicesPage.entFeature2', "Custom backend & API"),
        t('servicesPage.entFeature3', "Database design"),
        t('servicesPage.entFeature4', "User authentication"),
        t('servicesPage.entFeature5', "Admin dashboard"),
        t('servicesPage.entFeature6', "Payment integration"),
        t('servicesPage.entFeature7', "Real-time features"),
        t('servicesPage.entFeature8', "8-12 week delivery"),
        t('servicesPage.entFeature9', "6 months VIP support"),
      ],
      bestFor: t('servicesPage.entBestFor', "SaaS companies, booking platforms, marketplaces"),
      timeline: "8-12 weeks",
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: t('portfolio.discovery'),
      icon: MessageSquare,
      description: t('portfolio.discoveryDesc'),
      duration: t('servicesPage.week1', "Week 1"),
    },
    {
      step: 2,
      title: t('portfolio.design'),
      icon: Palette,
      description: t('portfolio.designDesc'),
      duration: t('servicesPage.week23', "Week 2-3"),
    },
    {
      step: 3,
      title: t('portfolio.development'),
      icon: Code2,
      description: t('portfolio.developmentDesc'),
      duration: t('servicesPage.week38', "Week 3-8"),
    },
    {
      step: 4,
      title: t('portfolio.launch'),
      icon: Rocket,
      description: t('portfolio.launchDesc'),
      duration: t('servicesPage.week8plus', "Week 8+"),
    },
  ];

  const guarantees = [
    { icon: Shield, title: t('servicesPage.moneyBack', "Money-Back Guarantee"), desc: t('servicesPage.moneyBackDesc', "Not satisfied? Full refund within 30 days") },
    { icon: Clock, title: t('servicesPage.onTimeDelivery', "On-Time Delivery"), desc: t('servicesPage.onTimeDesc', "We deliver when we promise, every time") },
    { icon: TrendingUp, title: t('servicesPage.performanceGuaranteed', "Performance Guaranteed"), desc: t('servicesPage.performanceDesc', "Your site will load in under 3 seconds") },
    { icon: Headphones, title: t('servicesPage.lifetimeSupport', "Lifetime Support"), desc: t('servicesPage.lifetimeDesc', "We're here whenever you need us") },
  ];

  const faqs = [
    { q: t('faq.projectTime.question', "How long does a typical project take?"), a: t('faq.projectTime.answer', "Most projects take 2-8 weeks depending on complexity. We'll give you an exact timeline during our consultation.") },
    { q: t('faq.changesAfterLaunch.question', "What if I need changes after launch?"), a: t('faq.changesAfterLaunch.answer', "All packages include free support period. After that, we offer affordable maintenance plans.") },
    { q: t('faq.international.question', "Do you work with international clients?"), a: t('faq.international.answer', "Absolutely! We've worked with clients from 15+ countries and handle timezone differences seamlessly.") },
    { q: t('faq.different.question', "What makes NEXORA different from other agencies?"), a: t('faq.different.answer', "We focus on results, not just pretty designs. Every decision is made to increase your conversions and ROI.") },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                {t('servicesPage.badge')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              {t('servicesPage.title')} <span className="gradient-text">{t('servicesPage.titleHighlight')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {t('servicesPage.subtitle')}
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Guarantees Section */}
      <SectionWrapper className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((item, index) => (
              <FadeInOnView key={item.title} delay={index * 0.1}>
                <div className="text-center p-4 rounded-xl bg-card/30 border border-border/30">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Packages Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('servicesPage.choosePlan')} <span className="gradient-text">{t('servicesPage.planHighlight')}</span>
              </h2>
              <p className="text-muted-foreground">{t('servicesPage.findPerfect')}</p>
            </div>
          </FadeInOnView>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <FadeInOnView key={pkg.name} delay={index * 0.15}>
                <div className="relative h-full">
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        {t('servicesPage.mostPopular')}
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
                        <span className="text-muted-foreground">{t('servicesPage.timeline')}: {pkg.timeline}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <strong>{t('servicesPage.bestFor')}:</strong> {pkg.bestFor}
                      </p>
                    </div>
                    
                    <Button
                      variant={pkg.popular ? "glow" : "outline"}
                      className="w-full mt-6"
                      asChild
                    >
                      <Link to="/contact">
                        {t('servicesPage.choose')} {pkg.name}
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </GlassCard>
                </div>
              </FadeInOnView>
            ))}
          </div>
          
          {/* Custom Solutions */}
          <FadeInOnView delay={0.5}>
            <GlassCard className="text-center py-12 mt-12">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">{t('servicesPage.customSolutions')}</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                {t('servicesPage.customDesc')}
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  {t('servicesPage.getCustomQuote')}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* Process Timeline */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('servicesPage.howWeWork')} <span className="gradient-text">{t('servicesPage.workHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('servicesPage.provenProcess')}
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FadeInOnView key={step.title} delay={index * 0.15}>
                <div className="relative">
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
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('servicesPage.faqTitle')} <span className="gradient-text">{t('servicesPage.faqHighlight')}</span> {t('servicesPage.faqTitleEnd')}
              </h2>
            </div>
          </FadeInOnView>
          
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <FadeInOnView key={faq.q} delay={index * 0.1}>
                <GlassCard className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper className="py-16 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold text-foreground">50+</span>
                  <span className="text-muted-foreground">{t('portfolio.projectsCompleted', 'Happy Clients')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold text-foreground">100%</span>
                  <span className="text-muted-foreground">{t('portfolio.clientSatisfaction', 'Satisfaction Rate')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="text-2xl font-bold text-foreground">300%</span>
                  <span className="text-muted-foreground">{t('portfolio.avgRoiIncrease', 'Avg. ROI Increase')}</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                {t('servicesPage.joinBusinesses', "Join businesses from 15+ countries who trust NEXORA with their digital success")}
              </p>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-16 px-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('servicesPage.getStarted')} <span className="gradient-text">{t('servicesPage.startedHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('servicesPage.ctaDesc', "Book a free consultation and let's discuss how we can bring your vision to life. No pressure, no commitment—just a friendly chat about your goals.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    {t('servicesPage.bookConsultation')}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/portfolio">{t('servicesPage.viewWork')}</Link>
                </Button>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServicesPage;
