import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
// Service Pages
import WebDevelopmentPage from "@/pages/services/WebDevelopmentPage";
import AppDevelopmentPage from "@/pages/services/AppDevelopmentPage";
import CustomSoftwarePage from "@/pages/services/CustomSoftwarePage";
import UIUXDesignPage from "@/pages/services/UIUXDesignPage";
import EcommercePage from "@/pages/services/EcommercePage";
import SEOPage from "@/pages/services/SEOPage";
import SocialMediaPage from "@/pages/services/SocialMediaPage";
import EmailMarketingPage from "@/pages/services/EmailMarketingPage";
import ContentWritingPage from "@/pages/services/ContentWritingPage";
import PPCPage from "@/pages/services/PPCPage";
// Industry Pages
import IndustriesMainPage from "@/pages/industries/IndustriesMainPage";
import StartupsPage from "@/pages/industries/StartupsPage";
import EcommerceIndustryPage from "@/pages/industries/EcommerceIndustryPage";
import HealthcarePage from "@/pages/industries/HealthcarePage";
import RealEstatePage from "@/pages/industries/RealEstatePage";
import EducationPage from "@/pages/industries/EducationPage";
import RetailPage from "@/pages/industries/RetailPage";
import FintechPage from "@/pages/industries/FintechPage";
// Process Pages
import ProcessPage from "@/pages/process/ProcessPage";

const queryClient = new QueryClient();

const AppContent = () => {
  useSmoothScroll();
  
  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/app-development" element={<AppDevelopmentPage />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/services/content-writing" element={<ContentWritingPage />} />
          <Route path="/services/ppc" element={<PPCPage />} />
          {/* Industries */}
          <Route path="/industries" element={<IndustriesMainPage />} />
          <Route path="/industries/startups" element={<StartupsPage />} />
          <Route path="/industries/ecommerce" element={<EcommerceIndustryPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/real-estate" element={<RealEstatePage />} />
          <Route path="/industries/education" element={<EducationPage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/fintech" element={<FintechPage />} />
          {/* Process */}
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/process/:page" element={<ProcessPage />} />
          {/* Company */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:page" element={<AboutPage />} />
          {/* Other */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
