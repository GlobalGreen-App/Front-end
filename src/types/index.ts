export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
}