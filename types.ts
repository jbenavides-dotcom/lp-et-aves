import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface WhyCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ExperienceStep {
  icon: ReactNode;
  step: string;
  title: string;
  description: string;
}

export interface BirdSpecies {
  name: string;
  image: string;
}

export interface ConservationPoint {
  text: string;
}

export interface ComplementaryExperience {
  emoji: string;
  title: string;
}
