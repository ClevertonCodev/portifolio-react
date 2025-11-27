'use client';

import Link from 'next/link';
import GlassButton from '../GlassButton';
import ExperienceEntry from './ExperienceEntry';
import { useLocalizedData } from '@/hooks/useLocalizedData';

export default function ExperienceSection() {
  const { experience } = useLocalizedData();

  return (
    <section id="experience" className="section-background-color pt-10">
      <div className="text-black">
        <h1 className="section__title">
          {experience.title}
        </h1>
        <div className="content relative grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="before: top-24 text-center before:mx-auto before:mb-5 before:mt-[5px] before:hidden before:h-4 before:w-full before:rounded-lg before:bg-gradient-to-l before:from-primary-900 sm:sticky sm:text-left sm:before:mx-0 sm:before:block">
              <span className="inline-block text-balance pb-2 text-base sm:text-wrap">
                {experience.description}
              </span>
              <Link href="/cv.pdf" target="_blank" title="Download resume">
                <GlassButton title="Download resume" className="mx-auto mb-4">
                  <span className="px-2">{experience.download_button}</span>
                </GlassButton>
              </Link>
            </div>
          </div>
          <div className="relative col-span-12 space-y-6 ps-4 sm:col-span-9">
            <ul className="relative col-span-12 ps-4 before:absolute before:-left-3 before:bottom-0 before:top-[5px] before:w-0.5 before:bg-gray-300 sm:col-span-8">
              {experience.list.map((job) => (
                <ExperienceEntry key={`${job.position}-${job.startDate}`} job={job} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

