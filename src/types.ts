/**
 * Durinoxx Types & Interfaces
 */

export type SectorId = 'agua' | 'biogas' | 'quimico';

export interface SectorDetail {
  id: SectorId;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  specs: {
    recommendedInox: string;
    avgTemp: string;
    standards: string[];
  };
}

export type ProductId = 'tanques' | 'bombas' | 'agitadores' | 'separadores';

export interface ProductDetail {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  techSpec: {
    material: string;
    capacityOrFlow: string;
    efficiency: string;
    compliance: string;
  };
}

export interface QuoteSimulation {
  sector: SectorId;
  volume: number; // in m³
  height: number; // in meters
  diameter: number; // in meters
  inoxType: 'AISI 304' | 'AISI 316' | 'AISI 316Ti';
  hasAgitator: boolean;
  hasPump: boolean;
  hasSeparator: boolean;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  sector: SectorId | 'other';
  volumeRequired: string;
  message: string;
  agreedToTerms: boolean;
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  segment: string;
  content: string;
  rating: number;
}
