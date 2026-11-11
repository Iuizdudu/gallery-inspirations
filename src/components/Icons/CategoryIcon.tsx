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
  Presentation,
  Image,
  Paintbrush,
  Shapes,
  PenTool,
  Code2,
  Cpu,
  Archive,
  Coins,
  Megaphone,
  Mail,
  Film,
  LineChart,
  Brush,
  Grid,
  FileText,
  Columns,
  Newspaper,
  Camera,
  Search,
  Component,
  Zap,
  BookOpen,
  Eye,
  Quote,
  TrendingUp,
  Package,
  Contrast,
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
    case 'Presentation':
      return <Presentation className={className} />;
    case 'Image':
      return <Image className={className} />;
    case 'Paintbrush':
      return <Paintbrush className={className} />;
    case 'Shapes':
      return <Shapes className={className} />;
    case 'PenTool':
      return <PenTool className={className} />;
    case 'Code2':
      return <Code2 className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Archive':
      return <Archive className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Megaphone':
      return <Megaphone className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Film':
      return <Film className={className} />;
    case 'LineChart':
      return <LineChart className={className} />;
    case 'Brush':
      return <Brush className={className} />;
    case 'Grid':
      return <Grid className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Columns':
      return <Columns className={className} />;
    case 'Newspaper':
      return <Newspaper className={className} />;
    case 'Camera':
      return <Camera className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Component':
      return <Component className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'Quote':
      return <Quote className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Package':
      return <Package className={className} />;
    case 'Contrast':
      return <Contrast className={className} />;
    default:
      return <Folder className={className} />;
  }
};
