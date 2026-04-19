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
  images: string[];
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

export interface CourseModule {
  title: string;
  description: string;
  lessons: string[];
}

export interface CourseDetail {
  id: string;
  category: string;
  title: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
  logo?: string;
  themeColor?: 'green' | 'blue' | 'cyan' | 'orange' | 'yellow' | 'red' | 'emerald';
  metrics: {
    hours: string;
    certification: string;
    price: string;
    modality: string;
  };
  modules: CourseModule[];
}
