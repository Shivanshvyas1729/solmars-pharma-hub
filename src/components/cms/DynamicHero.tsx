import React from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const DynamicHero = ({ content }: { content: any }) => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                {content.title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                {content.subtitle}
              </p>
            </div>
            {content.buttons && content.buttons.length > 0 && (
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                {content.buttons.map((btn: any, idx: number) => (
                  <Button 
                    key={idx} 
                    variant={btn.style === 'secondary' ? 'outline' : 'default'} 
                    size="lg" 
                    asChild
                  >
                    <Link to={btn.url}>{btn.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
          {content.image && (
            <div className="mx-auto lg:max-w-none w-full animate-fade-in lg:ml-auto">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-2xl">
                {/* Fallback pattern if image is just placeholder path that doesn't exist */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5"></div>
                <img
                  src={content.image}
                  alt="Hero"
                  className="object-cover w-full h-full mix-blend-multiply opacity-90"
                  onError={(e) => {
                    // if it fails to load, just hide the broken image icon so gradient shows
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
