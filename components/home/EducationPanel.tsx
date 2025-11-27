import CollapsiblePanel from '../CollapsiblePanel';
import EducationIcon from '../icons/EducationIcon';
import { getDate } from '@/utils/dateUtils';
import { EducationEntry } from '@/types';

interface EducationPanelProps {
  education: EducationEntry[];
  title: string;
}

export default function EducationPanel({ education, title }: EducationPanelProps) {
  return (
    <CollapsiblePanel header={title} icon={<EducationIcon className="me-1 h-8 w-8" />}>
      <ul className="space-y-5">
        {education.map((edu) => (
          <li key={edu.title} className="flex flex-col">
            <p className="source-sans text-xl font-semibold tracking-wide text-gray-800">
              {edu.title}
            </p>
            <time className="source-sans text-sm uppercase text-gray-800">
              {getDate(edu.startDate)} - {getDate(edu.endDate)}
            </time>

            <p className="open-sans font-semibold text-gray-700">@ {edu.institution}</p>
            <div className="-mx-2 w-full">
              {edu.courses.map((course) => (
                <span
                  key={course}
                  className="source-sans mx-2 inline-block min-w-1 rounded-md bg-base-200 px-3 py-1 text-xs uppercase"
                >
                  {course}
                </span>
              ))}
            </div>
            <p className="">
              {edu.description}
            </p>
          </li>
        ))}
      </ul>
    </CollapsiblePanel>
  );
}

