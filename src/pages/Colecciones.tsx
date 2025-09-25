import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Collections from '@/components/Collections';
import { useLanguage } from '@/contexts/LanguageContext';

const Colecciones = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-lg text-foreground mb-4">
            {t('collections.title')}
          </h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Descubre nuestras colecciones temáticas, cada una diseñada para adaptarse a diferentes estilos de vida y preferencias estéticas.
          </p>
        </div>
      </section>

      <Collections />
      <Footer />
    </div>
  );
};

export default Colecciones;