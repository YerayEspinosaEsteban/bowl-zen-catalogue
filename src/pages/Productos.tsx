import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Products from '@/components/Products';
import { useLanguage } from '@/contexts/LanguageContext';

const Productos = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-lg text-foreground mb-4">
            {t('products.title')}
          </h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Explora nuestra cuidada selección de bowls premium, diseñados para elevar tu experiencia culinaria con estilo y funcionalidad excepcionales.
          </p>
        </div>
      </section>

      <Products />
      <Footer />
    </div>
  );
};

export default Productos;