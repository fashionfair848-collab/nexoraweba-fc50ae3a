import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Rocket, Users, Heart, Shield, Code, Zap, Layers, Star, CheckCircle, TrendingUp, Clock, Award, Target, Sparkles, Globe, BarChart3, MessageSquare, Linkedin, Github, Twitter, Play, Phone, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";

import aliHaiderImg from "@/assets/team/ali-haider.jpg";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInOnView from "@/components/ui/FadeInOnView";
import HeroBackground from "@/components/hero/HeroBackground";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import { ReactIcon, NodeIcon, MongoIcon, ExpressIcon, NextIcon, TypeScriptIcon, TailwindIcon, ThreeIcon, TechStackItem } from "@/components/icons/TechIcons";

const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind", icon: <TailwindIcon /> },
  { name: "Three.js", icon: <ThreeIcon /> },
];

const HomePage = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Thompson",
      company: "CEO, GrowthLabs",
      text: t('testimonials.sarah', "Working with NEXORA was like finding a secret weapon. Our new website doesn't just look incredible—it brought us 10x more leads in the first month. Ali is a genius!"),
      rating: 5,
      avatar: "ST",
    },
    {
      name: "Michael Chen",
      company: "Founder, TechStart",
      text: t('testimonials.michael', "The attention to detail and professionalism exceeded all expectations. Our web app handles thousands of users flawlessly. Highly recommended!"),
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Director, BrandCo",
      text: t('testimonials.emily', "NEXORA transformed our online presence completely. The design is stunning and the performance is outstanding. Best investment we've made!"),
      rating: 5,
      avatar: "ER",
    },
  ];

  const services = [
    {
      icon: Code,
      title: t('services.websitesTitle'),
      description: t('services.websitesDesc'),
      features: [t('services.responsiveDesign'), t('services.seoOptimized'), t('services.fastLoading')],
    },
    {
      icon: Zap,
      title: t('services.appsTitle'),
      description: t('services.appsDesc'),
      features: [t('services.realTimeFeatures'), t('services.scalableBackend'), t('services.userFriendly')],
    },
    {
      icon: Layers,
      title: t('services.ecosystemsTitle'),
      description: t('services.ecosystemsDesc'),
      features: [t('services.fullStack'), t('services.paymentIntegration'), t('services.authentication')],
    },
  ];

  const stats = [
    { value: 50, suffix: "+", label: t('stats.projects'), icon: Rocket },
    { value: 40, suffix: "+", label: t('stats.clients'), icon: Users },
    { value: 100, suffix: "%", label: t('stats.satisfaction'), icon: Heart },
    { value: 24, suffix: "/7", label: t('stats.support'), icon: Shield },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: t('whyChooseUs.growthFocused'),
      description: t('whyChooseUs.growthDesc')
    },
    {
      icon: Clock,
      title: t('whyChooseUs.fastDelivery'),
      description: t('whyChooseUs.fastDesc')
    },
    {
      icon: Award,
      title: t('whyChooseUs.premiumQuality'),
      description: t('whyChooseUs.qualityDesc')
    },
    {
      icon: Target,
      title: t('whyChooseUs.resultsDriven'),
      description: t('whyChooseUs.resultsDesc')
    },
  ];

  const results = [
    { metric: "300%", label: t('results.leadsIncrease') },
    { metric: "50%", label: t('results.bounceReduction') },
    { metric: "10x", label: t('results.roi') },
    { metric: "2 sec", label: t('results.loadTime') },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Sparkles size={16} />
                {t('hero.badge')}
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title')}{" "}
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">{t('hero.ctaSecondary')}</Link>
              </Button>
            </motion.div>
            
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>{t('hero.projectsDelivered')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>{t('hero.satisfaction')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>{t('hero.support')}</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">{t('hero.scrollToExplore')}</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2️⃣ Key Stats / Achievements */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <FadeInOnView key={stat.label} delay={index * 0.1}>
                <GlassCard className="text-center group hover:-translate-y-2 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3️⃣ Why Businesses Choose Us */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('whyChooseUs.title')} <span className="gradient-text">{t('whyChooseUs.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('whyChooseUs.subtitle')}
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <FadeInOnView key={item.title} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4️⃣ Real Results That Matter */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInOnView>
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                  {t('results.title')} <span className="gradient-text">{t('results.titleHighlight')}</span> {t('results.titleEnd')}
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {t('results.description')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result) => (
                    <div key={result.label} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{result.metric}</div>
                      <p className="text-muted-foreground text-sm">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnView>
            
            {/* 5️⃣ Client Success Story */}
            <FadeInOnView delay={0.2}>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-xl font-semibold">{t('results.successStory')}</h3>
                </div>
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{t('results.testimonial')}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t('results.clientName')}</p>
                    <p className="text-sm text-muted-foreground">{t('results.clientRole')}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeInOnView>
          </div>
        </div>
      </SectionWrapper>

      {/* 6️⃣ What We Craft / Services */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('services.title')} <span className="gradient-text">{t('services.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInOnView key={service.title} delay={index * 0.15}>
                <GlassCard className="h-full group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1"
                      >
                        <CheckCircle size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
          
          <FadeInOnView delay={0.5}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild className="group">
                <Link to="/services">
                  {t('services.exploreAll')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* 7️⃣ Simple 3-Step Process */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('process.title')} <span className="gradient-text">{t('process.titleHighlight')}</span> {t('process.titleEnd')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('process.subtitle')}
              </p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
            
            {[
              { step: 1, icon: MessageSquare, title: t('process.step1Title'), desc: t('process.step1Desc') },
              { step: 2, icon: Code, title: t('process.step2Title'), desc: t('process.step2Desc') },
              { step: 3, icon: Globe, title: t('process.step3Title'), desc: t('process.step3Desc') },
            ].map((item, index) => (
              <FadeInOnView key={item.step} delay={index * 0.15}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="font-display text-xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
          
          <FadeInOnView delay={0.5}>
            <div className="text-center mt-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  {t('process.bookConsultation')}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* 8️⃣ AI-Powered Solutions */}
      <AIAgentsSection />

      {/* 9️⃣ Live Demo CTA */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                    <Bot size={16} />
                    {t('liveDemo.title')}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    {t('liveDemo.restaurantCta').split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t('liveDemo.restaurantCta').split(' ').slice(-1)}</span>
                  </h3>
                  <p className="text-muted-foreground max-w-xl">
                    {t('liveDemo.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      <Play className="mr-2" size={20} />
                      {t('liveDemo.requestDemo')}
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href="tel:+1234567890">
                      <Phone className="mr-2" size={18} />
                      {t('common.contactUs', 'Call Now')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInOnView>
        </div>
      </SectionWrapper>

      {/* 🔟 Meet Your Digital Partner / Founder */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('founder.title')} <span className="gradient-text">{t('founder.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('founder.description')}
              </p>
            </div>
          </FadeInOnView>
          
          <div className="max-w-3xl mx-auto">
            <FadeInOnView>
              <GlassCard className="group overflow-hidden py-12 px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="relative shrink-0">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-card overflow-hidden">
                        <img 
                          src={aliHaiderImg} 
                          alt="Ali Haider - Founder"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-primary-foreground whitespace-nowrap">{t('founder.badge')}</span>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <h3 className="font-display text-3xl font-bold text-foreground mb-2">Ali Haider</h3>
                    <p className="text-primary font-medium text-lg mb-4">CEO & Lead Developer</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t('founder.description')}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <Twitter size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeInOnView>

            <FadeInOnView delay={0.2}>
              <div className="text-center mt-10">
                <Button variant="glow" asChild>
                  <Link to="/about">
                    {t('about.meetTeam')} {t('about.teamHighlight')}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </SectionWrapper>

      {/* 1️⃣1️⃣ Tech Stack / Powered by Excellence */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('techStack.title')} <span className="gradient-text">{t('techStack.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground">{t('techStack.subtitle')}</p>
            </div>
          </FadeInOnView>
          
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <TechStackItem key={tech.name} icon={tech.icon} name={tech.name} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 1️⃣2️⃣ Client Testimonials (Additional) */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                {t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground">{t('testimonials.subtitle', 'What our clients say about working with us')}</p>
            </div>
          </FadeInOnView>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInOnView key={testimonial.name} delay={index * 0.15}>
                <GlassCard className="h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-sm font-semibold text-primary-foreground">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 1️⃣3️⃣ Final CTA – Ready to Dominate Online? */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInOnView>
            <GlassCard className="text-center py-16 px-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  {t('cta.title')} <span className="gradient-text">{t('cta.titleHighlight')}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      {t('cta.getStarted')}
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/portfolio">{t('cta.viewPortfolio')}</Link>
                  </Button>
                </div>
                
                {/* Urgency text */}
                <p className="mt-6 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{t('cta.limitedSpots')}</span>
                </p>
              </div>
            </GlassCard>
          </FadeInOnView>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
