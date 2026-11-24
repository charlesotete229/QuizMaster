import React from 'react';
import {
  Code2,
  BrainCircuit,
  Atom,
  Landmark,
  Calculator,
  Globe2,
  HelpCircle,
  Sparkles,
  Brain,
  Clock,
  Play,
  PlayCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Trash2,
  BarChart2,
  BarChart3,
  Trophy,
  Menu,
  X,
  ChevronRight,
  Layers,
  Home,
  LayoutGrid,
  History,
  AlertCircle,
  Award,
  Check,
  Target,
  BookOpen
} from 'lucide-react';

const iconMap = {
  Code2,
  BrainCircuit,
  Atom,
  Landmark,
  Calculator,
  Globe2,
  HelpCircle,
  Sparkles,
  Brain,
  Clock,
  Play,
  PlayCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Trash2,
  BarChart2,
  BarChart3,
  Trophy,
  Menu,
  X,
  ChevronRight,
  Layers,
  Home,
  LayoutGrid,
  History,
  AlertCircle,
  Award,
  Check,
  Target,
  BookOpen
};

/**
 * Composant pour instancier une icône Lucide à partir de son nom sous forme de chaîne.
 * Comprend un composant de secours (HelpCircle) si le nom n'est pas trouvé.
 */
export const DynamicIcon = ({ name, size = 24, color, className = '', ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent size={size} color={color} className={className} {...props} />;
};

export default DynamicIcon;
