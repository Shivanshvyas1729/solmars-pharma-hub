import React from 'react';
import { ComponentEngine } from './ComponentEngine';

export const DynamicGrid = ({ content }: { content: any }) => {
  const cols = content.columns || 3;
  
  // Tailwind grid classes dynamically
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[cols as 1 | 2 | 3 | 4] || 'grid-cols-1 md:grid-cols-3';

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className={`grid gap-8 ${gridClasses}`}>
          {content.items?.map((item: any, index: number) => (
            <div key={index} className="h-full flex">
              <ComponentEngine componentData={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
