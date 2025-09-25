import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from './ProductCard';
import bowlSet1 from '@/assets/bowl-set-1.jpg';
import bowlWood from '@/assets/bowl-wood.jpg';
import bowlSteel from '@/assets/bowl-steel.jpg';
import heroImage from '@/assets/bowl-hero.jpg';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: '1',
      name: 'Ceramic Bowl Set',
      price: 19.99,
      originalPrice: 24.99,
      image: bowlSet1,
      labels: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['ceramic'],
      description: 'Conjunto de tres bowls en colores elegantes, perfectos para cualquier ocasión.'
    },
    {
      id: '2', 
      name: 'Natural Wood Bowl',
      price: 34.99,
      image: bowlWood,
      labels: ['foodGrade'],
      materials: ['wood'],
      description: 'Bowl artesanal en madera natural con acabado premium y textura única.'
    },
    {
      id: '3',
      name: 'Stainless Steel Bowl',
      price: 29.99,
      image: bowlSteel,
      labels: ['foodGrade', 'microwaveSafe'],
      materials: ['stainless'],
      description: 'Bowl de acero inoxidable con acabado mate, resistente y moderno.'
    },
    {
      id: '4',
      name: 'Sage Green Bowl',
      price: 22.99,
      image: heroImage,
      labels: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      materials: ['ceramic'],
      description: 'Bowl cerámico en elegante verde salvia, ideal para presentaciones sofisticadas.'
    }
  ];

  return (
    <section className="py-16 surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="heading-lg text-foreground mb-4">
            {t('products.title')}
          </h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Descubre nuestra cuidada selección de bowls, diseñados para combinar funcionalidad y elegancia en cada detalle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;