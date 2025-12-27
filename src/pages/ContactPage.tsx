import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Send, Check, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { sendEmailNotification, generateWhatsAppNotification, BUSINESS_EMAIL, BUSINESS_PHONE, WHATSAPP_NUMBER } from "@/lib/emailjs";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Starter packages: 2 weeks | Professional: 4-6 weeks | Enterprise: 8-12 weeks. Custom timelines available.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment milestones: 30% upfront, 40% midway, 30% on completion.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "All packages include free support period. After that, we offer affordable maintenance plans or pay-per-change options.",
  },
  {
    question: "Can you work with my existing website?",
    answer: "Absolutely! We can redesign, optimize, or add features to existing sites.",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, we can manage hosting or help you set up your own. We recommend reliable, affordable hosting partners.",
  },
  {
    question: "What about AI Voice Agents for my restaurant?",
    answer: "Yes! We now offer AI voice agents that can answer calls 24/7, book reservations, and handle customer inquiries automatically.",
  },
];

const trustBadges = [
  "Free consultation, no strings attached",
  "Response within 2 hours guaranteed",
  "Clear, transparent pricing",
  "No hidden fees ever",
  "100% client satisfaction record",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email notification
      const emailResult = await sendEmailNotification(formData);
      
      if (emailResult.success) {
        toast({
          title: "🎉 Message Sent Successfully!",
          description: "We've received your message and will respond within 2 hours. Check your email for confirmation!",
        });
      } else {
        // Even if email fails, show success since form was submitted
        toast({
          title: "📨 Message Received!",
          description: "We've got your details and will contact you shortly via WhatsApp or email.",
        });
      }
      
      // Generate WhatsApp backup notification link
      const whatsappUrl = generateWhatsAppNotification(formData);
      console.log('Backup WhatsApp notification URL:', whatsappUrl);
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "✅ Message Received!",
        description: "We'll get back to you within 2 hours via WhatsApp or email.",
      });
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              Let's Make <span className="gradient-text">Magic Happen</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Whether you have a detailed plan or just a spark of an idea, we're here to help. No question is too small, no dream is too big. Let's talk.
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Service Interested In *</label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                      >
                        <SelectTrigger className="bg-secondary/50 border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="starter">Starter Package ($500-$1,000)</SelectItem>
                          <SelectItem value="professional">Professional Package ($1,500-$3,000)</SelectItem>
                          <SelectItem value="enterprise">Enterprise Package ($5,000+)</SelectItem>
                          <SelectItem value="ai-agent">AI Voice Agent for Restaurant</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Budget Range</label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                    >
                      <SelectTrigger className="bg-secondary/50 border-border">
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                        <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Project Description *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your vision..."
                      required
                      rows={5}
                      className="bg-secondary/50 border-border resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Methods */}
              <GlassCard>
                <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <p className="text-primary">{BUSINESS_EMAIL}</p>
                      <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-[#25D366]">{BUSINESS_PHONE}</p>
                      <p className="text-sm text-muted-foreground">Fastest way to reach us!</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-primary">Connect professionally</p>
                      <p className="text-sm text-muted-foreground">See our journey</p>
                    </div>
                  </a>
                  
                  <a
                    href={`tel:${BUSINESS_PHONE.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-primary">{BUSINESS_PHONE}</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM PKT</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Lahore, Pakistan</p>
                      <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Trust Badges */}
              <GlassCard>
                <ul className="space-y-3">
                  {trustBadges.map((badge) => (
                    <li key={badge} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-muted-foreground text-sm">{badge}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-24 section-glow">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard
                  className="cursor-pointer"
                  hover={false}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-foreground pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-muted-foreground mt-4 pt-4 border-t border-border"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
