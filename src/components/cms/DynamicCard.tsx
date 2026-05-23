import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DynamicCard = ({ content }: { content: any }) => {
  return (
    <Card className="flex flex-col h-full w-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      {content.image && (
        <div className="w-full h-48 overflow-hidden rounded-t-xl">
          <img 
            src={content.image} 
            alt={content.title || "Card image"} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <CardHeader>
        {content.title && <CardTitle className="text-xl text-primary">{content.title}</CardTitle>}
      </CardHeader>
      <CardContent className="flex-grow">
        {content.content && <p className="text-muted-foreground leading-relaxed">{content.content}</p>}
      </CardContent>
    </Card>
  );
};
