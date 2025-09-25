import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import collectionColorful from '@/assets/collection-colorful.jpg';
import collectionClassic from '@/assets/collection-classic.jpg';
import bowlSet1 from '@/assets/bowl-set-1.jpg';

const Collections = () => {
  const { t } = useLanguage();

  const collections = [
    {
      id: 'minimalist',
      name: t('collections.minimalist'),
      description: 'Diseños limpios y elegantes que destacan por su simplicidad y funcionalidad.',
      image: bowlSet1,
      count: 12
    },
    {
      id: 'colorful', 
      name: t('collections.colorful'),
      description: 'Bowls vibrantes que aportan alegría y personalidad a tu mesa.',
      image: collectionColorful,
      count: 18
    },
    {
      id: 'classic',
      name: t('collections.classic'),
      description: 'Piezas atemporales en tonos neutros, perfectas para cualquier estilo.',
      image: collectionClassic,
      count: 15
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="heading-lg text-foreground mb-4">
            {t('collections.title')}
          </h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Explora nuestras colecciones cuidadosamente curadas, cada una con su propia personalidad y estilo único.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="group cursor-pointer"
            >
              <div className="surface-elevated rounded-3xl overflow-hidden hover:shadow-large transition-all duration-500 hover:-translate-y-2">
                
                {/* Collection Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Collection Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="heading-md text-foreground">
                      {collection.name}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-beige px-3 py-1 rounded-full">
                      {collection.count} productos
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {collection.description}
                  </p>

                  <Button className="btn-subtle group w-full">
                    Explorar colección
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;