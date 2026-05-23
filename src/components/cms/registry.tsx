import React from 'react';
import { DynamicSection } from './DynamicSection';
import { DynamicGrid } from './DynamicGrid';
import { DynamicCard } from './DynamicCard';
import { DynamicHero } from './DynamicHero';

export const componentMap: Record<string, React.FC<{ content: any }>> = {
  section: DynamicSection,
  grid: DynamicGrid,
  card: DynamicCard,
  hero: DynamicHero,
};
