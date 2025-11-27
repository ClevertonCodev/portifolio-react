'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import ptHero from '@/data/i18n/pt/pt_hero';
import ptExperience from '@/data/i18n/pt/pt_experience';
import ptProjects from '@/data/i18n/pt/pt_projects';
import ptAbout from '@/data/i18n/pt/pt_about';
import ptContact from '@/data/i18n/pt/pt_contact';
import enHero from '@/data/i18n/en/en_hero';
import enExperience from '@/data/i18n/en/en_experience';
import enProjects from '@/data/i18n/en/en_projects';
import enAbout from '@/data/i18n/en/en_about';
import enContact from '@/data/i18n/en/en_contact';
import esHero from '@/data/i18n/es/es_hero';
import esExperience from '@/data/i18n/es/es_experience';
import esProjects from '@/data/i18n/es/es_projects';
import esAbout from '@/data/i18n/es/es_about';
import esContact from '@/data/i18n/es/es_contact';

const data = {
  pt: {
    hero: ptHero,
    experience: ptExperience,
    projects: ptProjects,
    about: ptAbout,
    contact: ptContact,
  },
  en: {
    hero: enHero,
    experience: enExperience,
    projects: enProjects,
    about: enAbout,
    contact: enContact,
  },
  es: {
    hero: esHero,
    experience: esExperience,
    projects: esProjects,
    about: esAbout,
    contact: esContact,
  },
};

export function useLocalizedData() {
  const { language } = useLanguage();
  return data[language];
}

