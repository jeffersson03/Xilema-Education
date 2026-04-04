import { LucideIcon } from 'lucide-react';

export interface Category {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  className?: string;
  color: string;
  hoverBg: string;
  hoverBorder: string;
  accentColor: string;
  isSpecial?: boolean;
}

export interface Course {
  title: string;
  duration: string;
  price: string;
  image: string;
  isBestseller?: boolean;
}

export interface Feature {
  category: string;
  phrase: string;
  summary: string;
  image: string;
  bgColor: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface GalleryImage {
  url: string;
  title: string;
}
