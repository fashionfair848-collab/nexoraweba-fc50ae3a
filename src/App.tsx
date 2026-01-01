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
// Industry & Process Pages
import IndustryPage from "@/pages/industries/IndustryPage";
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
          <Route path="/industries/:industry" element={<IndustryPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/process/:page" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:page" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
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
