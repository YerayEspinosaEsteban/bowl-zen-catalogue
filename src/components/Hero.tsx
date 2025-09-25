import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/bowl-hero.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <h1 className="heading-xl text-foreground leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-elegant max-w-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Elegant ceramic bowl collection"
                className="w-full h-auto rounded-3xl shadow-large"
              />
              
              {/* Floating promotion badge */}
              <div className="absolute top-6 right-6 surface-elevated rounded-full px-4 py-2 shadow-medium">
                <div className="text-sm font-medium text-primary">
                  {t('promotion.weekend')}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t('promotion.discount')}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;