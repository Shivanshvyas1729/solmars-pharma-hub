import React from 'react';
import { ComponentEngine } from './ComponentEngine';

export const DynamicSection = ({ content }: { content: any }) => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {content.heading && (
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            {content.heading}
          </h2>
        )}
        {content.content && (
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            {content.content}
          </p>
        )}
        {content.children && (
          <div className="mt-8">
            {content.children.map((child: any, index: number) => (
              <ComponentEngine key={index} componentData={child} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
