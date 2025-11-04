/**
 * interfaces/index.ts
 * Centralized TypeScript interfaces used across the app.
 */

export interface CardProps {
  id?: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void | Promise<void>;
  className?: string;
  disabled?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;        
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;        
  id?: string | number;        
  description?: string;   
  imageUrl?: string;

  reviews?: Review[];
  
}

export type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

// Example in types.ts or your component
export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Property {
  name: string;
  price: number;
  // other existing fields...
  reviews?: Review[]; // Add this line
}
