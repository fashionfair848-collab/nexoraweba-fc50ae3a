import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/i18n/config";

export const useLanguageDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = languages.find(lang => lang.code === i18n.language);
    if (currentLanguage) {
      document.documentElement.dir = currentLanguage.dir;
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return {
    isRTL: i18n.language === 'ar',
    language: i18n.language,
    dir: languages.find(lang => lang.code === i18n.language)?.dir || 'ltr'
  };
};
