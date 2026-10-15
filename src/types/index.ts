export type PillarId = 'financial' | 'physical' | 'spiritual' | 'mental' | 'social';

export interface PillarDetail {
  id: PillarId;
  name: string;
  tagline: string;
  summary: string;
  iconName: string;
  whatItMeans: string;
  whyItMatters: string;
  commonChallenges: string[];
  practicalHabits: string[];
  peerSupportMechanisms: string[];
  discussionTopics: string[];
  scriptureReference: string;
  scriptureText: string;
}

export type LivingCreatureId = 'human' | 'lion' | 'ox' | 'eagle';

export interface LivingCreature {
  id: LivingCreatureId;
  name: string;
  symbol: string;
  qualities: string[];
  application: string;
  biblicalPrinciple: string;
  iconKey: string;
}

export interface CoreValue {
  name: string;
  tagline: string;
  description: string;
  scripture?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  actionableHabit: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: PillarId | 'brotherhood' | 'outreach';
  frequency: string;
  format: 'In-Person & Virtual' | 'Virtual Intensive' | 'Local Gathering';
  description: string;
  status: 'upcoming' | 'gathering_soon';
  targetAudience: string;
}

export interface MembershipFormData {
  fullName: string;
  email: string;
  ageRange: string;
  location: string;
  growthPillars: string[];
  hopesAndContributions: string;
  optionalMessage: string;
  consent: boolean;
  guardianConsent?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BrotherStory {
  id: string;
  name: string;
  age: number;
  location: string;
  pillarFocus: string;
  timeInBrotherhood: string;
  rawChallenge: string;
  brotherhoodTurningPoint: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'joining' | 'finances' | 'spirituality' | 'brotherhood';
}

export interface StewardLetter {
  title: string;
  signatories: string[];
  scripture: string;
  paragraphs: string[];
}
