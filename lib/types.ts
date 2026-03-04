// Shared types
export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredProgramsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Youth Program
export interface DrupalProgram extends DrupalNode {
  programArea?: DrupalTerm[]
  ageGroup?: DrupalTerm[]
  schedule?: string
  location?: string
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Mentor
export interface DrupalMentor extends DrupalNode {
  specialty?: string
  email?: string
  phone?: string
  photo?: DrupalImage
  yearsExperience?: number
}

export interface MentorsData {
  nodeMentors: {
    nodes: DrupalMentor[]
  }
}

// Community Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  registrationUrl?: string
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Success Story
export interface DrupalSuccessStory extends DrupalNode {
  featured?: boolean
  participantName?: string
  programArea?: DrupalTerm[]
}

export interface SuccessStoriesData {
  nodeSuccessStories: {
    nodes: DrupalSuccessStory[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
