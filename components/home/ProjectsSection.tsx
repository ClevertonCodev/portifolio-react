'use client';

import ProjectCard from './ProjectCard';
import ProjectAltCard from './ProjectAltCard';
import { useLocalizedData } from '@/hooks/useLocalizedData';
import styles from './styles/ProjectsSection.module.css';

export default function ProjectsSection() {
  const { projects } = useLocalizedData();

  return (
    <section className="relative flex min-h-[100vh] w-full items-center justify-center bg-base-50 pb-32">
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="section-background-color !bg-transparent"
        >
          <path d="M1200 120L0 10 0 0 1200 0 1200 120z" fill="currentColor"></path>
        </svg>
      </div>
      <div id="projects" className="content mt-[60px]">
        <h1 className="section__title pt-10">{projects.title}</h1>
        
        <ul className="space-y-8 pb-10 pt-8">
          {projects.main.map((project, index) => (
            <li key={index}>
              <ProjectCard
                name={project.name}
                techstack={project.techstack}
                image={project.image}
                description={project.description}
                src={project.src}
                url={project.url}
                status={project.status || ''}
                sourceText={projects.source}
                websiteText={projects.website}
              />
            </li>
          ))}
        </ul>
        
        <ul className="grid gap-10 md:grid-cols-2">
          {projects.other.map((project, index) => (
            <li key={index} className="flex w-full">
              <ProjectAltCard
                name={project.name}
                description={project.description}
                src={project.src}
                url={project.url}
                techstack={project.techstack}
                sourceText={projects.source}
                websiteText={projects.website}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

