import React from 'react';
import { componentMap } from './registry';

export const ComponentEngine = ({ componentData }: { componentData: any }) => {
  if (!componentData || !componentData.type) {
    return null;
  }

  const Component = componentMap[componentData.type];

  if (!Component) {
    console.warn(`No component mapping found for type: ${componentData.type}`);
    return null;
  }

  return <Component content={componentData} />;
};
