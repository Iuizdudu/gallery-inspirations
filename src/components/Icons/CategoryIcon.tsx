import React from 'react';
import {
  Layout,
  Layers,
  Compass,
  Sparkles,
  Box,
  Globe,
  ShoppingCart,
  Smartphone,
  Moon,
  Navigation,
  PanelBottom,
  AlertCircle,
  BarChart3,
  Feather,
  Type,
  Palette,
  PlayCircle,
  Briefcase,
  Folder,
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = "w-4 h-4" }) => {
  switch (name) {
    case 'Layout':
      return <Layout className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Box':
      return <Box className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'ShoppingCart':
      return <ShoppingCart className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Moon':
      return <Moon className={className} />;
    case 'Navigation':
      return <Navigation className={className} />;
    case 'PanelBottom':
      return <PanelBottom className={className} />;
    case 'AlertCircle':
      return <AlertCircle className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Feather':
      return <Feather className={className} />;
    case 'Type':
      return <Type className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'PlayCircle':
      return <PlayCircle className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    default:
      return <Folder className={className} />;
  }
};
