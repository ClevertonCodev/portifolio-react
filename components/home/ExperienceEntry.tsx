import { JobEntry } from '@/types';
import { getDate, getTimeBetween } from '@/utils/dateUtils';

interface ExperienceEntryProps {
  job: JobEntry;
}

export default function ExperienceEntry({ job }: ExperienceEntryProps) {
  const timeBetween = getTimeBetween(job.startDate, job.endDate);
  const CompanyTag = job.url === '#' ? 'h2' : 'a';
  
  return (
    <li className="relative pb-8 before:absolute before:-left-3 before:top-[6px] before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary-900">
      <article>
        <h1 className="text-xl font-bold text-primary-900">
          {job.position}
        </h1>
        <time className="gap-2 font-mono text-sm font-semibold text-gray-700 sm:flex sm:text-sm">
          {getDate(job.startDate)} - {getDate(job.endDate)}
          <p>({timeBetween})</p>
        </time>
        <span className="block">
          <CompanyTag
            href={job.url === '#' ? undefined : job.url}
            className={`inline-flex items-center gap-x-1 text-base font-semibold sm:text-lg ${
              job.url === '#' 
                ? 'cursor-default' 
                : 'hover:cursor-pointer hover:text-primary-700'
            }`}
            target={job.url === '#' ? undefined : '_blank'}
            rel={job.url === '#' ? undefined : 'noopener noreferrer'}
          >
            @ {job.company}
            {job.url !== '#' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z" />
                  <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
                </g>
              </svg>
            )}
          </CompanyTag>
        </span>
        <div className="pt-1 text-sm sm:text-base">
          {job.description && <p>{job.description}</p>}
          {job.highlights && job.highlights.length > 0 && (
            <ul className="list-inside list-disc text-sm">
              {job.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </li>
  );
}

