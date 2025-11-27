import CollapsiblePanel from '../CollapsiblePanel';
import TrophyIcon from '../icons/TrophyIcon';
import { AchievementEntry } from '@/types';

interface AchievementsPanelProps {
  achievements: AchievementEntry[];
  title: string;
}

export default function AchievementsPanel({ achievements, title }: AchievementsPanelProps) {
  return (
    <div className="mt-5">
      <CollapsiblePanel header={title} icon={<TrophyIcon className="h-8 w-8" />}>
        <div className="bg-white grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
          {achievements.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <i className={`${tech.icon} !text-primary-600 text-5xl`} />
              <span className="text-gray-700 text-lg font-medium whitespace-pre-line">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </CollapsiblePanel>
    </div>
  );
}

