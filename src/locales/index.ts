import { en } from './en';
import { es } from './es';

export const supported_langs = ['en', 'es'] 
export const default_lang = 'en';


export const translations = {
  en,
  es,
};


type Lang = keyof typeof translations;

export const useTranslations = (lang: string) => {
  const dict = translations[(lang as Lang)] || translations[default_lang as Lang];
  
  return (key: string) => {
    // Navega en el objeto por puntos: profile.welcome → dict.profile.welcome
    return key.split('.').reduce((obj: any, part: string) => obj?.[part], dict) || key;
  };
};