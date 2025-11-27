'use client';

import EducationPanel from './EducationPanel';
import AchievementsPanel from './AchievementsPanel';
import { useLocalizedData } from '@/hooks/useLocalizedData';
import styles from './styles/AboutSection.module.css';

export default function AboutSection() {
  const { about } = useLocalizedData();

  return (
  <section
      id="about"
      className="relative flex min-h-[80ch] w-full justify-center bg-base-50"
    >
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#fafafa"
          />
        </svg>
      </div>
      <article className="section-background-color mt-[80px] w-full pb-10">
        <div className="content text-black">
          <h1 className="section__title relative">{about.title}</h1>
          <div className="mb-10 mt-10 inline-block items-center text-center sm:mt-0">
            <div className="group relative mb-8 inline-block md:mb-0 md:block">
              <img
                src="/images/profile.webp"
                className="relative z-[1] float-left mx-8 mb-2 h-56 w-56 rotate-6 rounded-lg border-gray-400 duration-300 md:group-hover:rotate-0"
                alt="Profile photo"
              />
              <div className="absolute h-[244px] w-[244px] translate-x-[22px] translate-y-[-10px] rotate-6 rounded-lg bg-white shadow-xl shadow-primary-800/10 duration-300 md:group-hover:rotate-0"></div>
            </div>
            <p className="text-start text-base sm:text-lg">{about.summary}</p>
          </div>
          <EducationPanel 
            education={about.education.list}
            title={about.education.title}
          />
          <AchievementsPanel 
            achievements={about.achievements.list}
            title={about.achievements.title}
          />
        </div>
      </article>
    </section>
  );
}

