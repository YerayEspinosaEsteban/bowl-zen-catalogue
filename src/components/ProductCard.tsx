import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  labels: string[];
  materials: string[];
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  originalPrice,
  image,
  labels,
  materials,
  description
}) => {
  const { t } = useLanguage();

  return (
    <div className="surface-elevated rounded-2xl overflow-hidden group hover:shadow-large transition-all duration-300 hover:-translate-y-2">
      
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-surface-subtle">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        
        {/* Labels */}
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span 
              key={label}
              className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full font-medium"
            >
              {t(`labels.${label}`)}
            </span>
          ))}
        </div>

        {/* Name & Description */}
        <div>
          <h3 className="heading-md text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Materials */}
        <div className="flex gap-2">
          {materials.map((material) => (
            <span 
              key={material}
              className="text-xs px-2 py-1 bg-beige text-foreground rounded font-medium"
            >
              {t(`materials.${material}`)}
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Button className="btn-subtle w-full">
          {t('products.viewDetails')}
        </Button>

      </div>
    </div>
  );
};

export default ProductCard;