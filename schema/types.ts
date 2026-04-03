// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventDate: { time: string };
  eventType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  registrationUrl: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredProgramsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeMentor {
  id: string;
  body: { value: string; summary?: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  specialty: string;
  title: string;
  yearsExperience: number;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  ageGroup: any[];
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  programArea: any[];
  schedule: string;
  title: string;
}

export interface NodeSuccessStory {
  id: string;
  body: { value: string; summary?: string };
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  participantName: string;
  path: string;
  programArea: any[];
  title: string;
}
