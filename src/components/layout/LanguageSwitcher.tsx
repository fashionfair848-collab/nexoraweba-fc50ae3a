import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languages, type LanguageCode } from "@/i18n/config";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get current language, fallback to English if not found
  const currentLangCode = languages.find(lang => lang.code === i18n.language)?.code || 
                          languages.find(lang => i18n.language?.startsWith(lang.code))?.code || 
                          'en';
  const currentLanguage = languages.find(lang => lang.code === currentLangCode) || languages[0];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  const changeLanguage = useCallback((langCode: LanguageCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Update document direction for RTL languages
    const language = languages.find(l => l.code === langCode);
    if (language) {
      document.documentElement.dir = language.dir;
      document.documentElement.lang = langCode;
    }
    
    // Focus back to button after selection
    buttonRef.current?.focus();
  }, [i18n]);

  // Handle keyboard navigation in dropdown
  const handleKeyDown = useCallback((event: React.KeyboardEvent, langCode: LanguageCode) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      changeLanguage(langCode);
    }
  }, [changeLanguage]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(prev => !prev);
          }
        }}
        className="flex items-center gap-1.5 xl:gap-2 px-2 xl:px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={16} className="shrink-0" />
        <span className="font-medium">{currentLanguage.flag}</span>
        <span className="hidden xl:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            style={{ zIndex: 9999 }}
            role="listbox"
            aria-label="Language options"
          >
            <div className="p-2 bg-card">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Language
              </div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => changeLanguage(language.code)}
                  onKeyDown={(e) => handleKeyDown(e, language.code)}
                  role="option"
                  aria-selected={currentLangCode === language.code}
                  tabIndex={0}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    currentLangCode === language.code
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{language.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-sm">{language.name}</div>
                      <div className="text-xs text-muted-foreground">{language.nativeName}</div>
                    </div>
                  </div>
                  {currentLangCode === language.code && (
                    <Check size={16} className="text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
