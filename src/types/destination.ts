export interface Activity {
  name: string;
  description: string;
  duration: string;
  price: string;
}

export interface PracticalInfo {
  bestPeriod: string;
  access: string;
  accommodation: string;
  mustBring: string[];
}

export interface Destination {
  id: number;
  name: string;
  slug: string;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  highlights: string[];
  activities: Activity[];
  practicalInfo: PracticalInfo;
  region: string;
  category: string[];
  price: {
    from: number;
    currency: string;
  };
} 