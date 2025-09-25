import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.home': 'Home',
    'nav.products': 'Productos', 
    'nav.collections': 'Colecciones',
    'nav.cta': 'Comprar Ahora',
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
    'hero.cta': 'Explorar Colección',
    'products.title': 'Nuestros Productos',
    'products.viewDetails': 'Ver Detalles',
    'collections.title': 'Colecciones',
    'collections.minimalist': 'Minimalistas',
    'collections.colorful': 'Coloridos', 
    'collections.classic': 'Clásicos',
    'footer.contact': 'Contacto',
    'footer.about': 'Acerca de',
    'footer.shipping': 'Envíos',
    'footer.returns': 'Devoluciones',
    'promotion.weekend': 'Oferta fin de semana',
    'promotion.discount': '15% descuento',
    'labels.foodGrade': 'Food grade',
    'labels.microwaveSafe': 'Microwave safe',
    'labels.ovenSafe': 'Oven safe',
    'materials.ceramic': 'Cerámica',
    'materials.stainless': 'Acero inox',
    'materials.wood': 'Madera'
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.collections': 'Collections', 
    'nav.cta': 'Shop Now',
    'hero.title': 'Bowl Collection',
    'hero.subtitle': 'Explore our elegant bowls that blend style and practicality, perfect for enhancing any dining experience.',
    'hero.cta': 'Explore Collection',
    'products.title': 'Our Products',
    'products.viewDetails': 'View Details',
    'collections.title': 'Collections',
    'collections.minimalist': 'Minimalist',
    'collections.colorful': 'Colorful',
    'collections.classic': 'Classic',
    'footer.contact': 'Contact',
    'footer.about': 'About',
    'footer.shipping': 'Shipping',
    'footer.returns': 'Returns',
    'promotion.weekend': 'Weekend special',
    'promotion.discount': '15% off',
    'labels.foodGrade': 'Food grade',
    'labels.microwaveSafe': 'Microwave safe', 
    'labels.ovenSafe': 'Oven safe',
    'materials.ceramic': 'Ceramic',
    'materials.stainless': 'Stainless',
    'materials.wood': 'Wood'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};