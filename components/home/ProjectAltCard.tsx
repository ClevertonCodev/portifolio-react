import GlassButton from '../GlassButton';
import GithubIcon from '../icons/GithubIcon';
import WebIcon from '../icons/WebIcon';

interface ProjectAltCardProps {
  name: string;
  techstack: string[];
  description: string;
  src: string;
  url: string;
  sourceText: string;
  websiteText: string;
}

export default function ProjectAltCard({
  name,
  techstack,
  description,
  src,
  url,
  sourceText,
  websiteText
}: ProjectAltCardProps) {
  return (
    <article className="h-full w-full rounded-xl border border-gray-200 bg-white p-5 shadow-md">
      <div className="flex h-full flex-col justify-evenly gap-1">
        <h2 className="text-ltext1 text-xl font-semibold md:text-2xl">{name}</h2>
        <div className="my-1 flex flex-wrap gap-2">
          {techstack.map((tag) => (
            <span
              key={tag.toLowerCase()}
              className="relative flex flex-nowrap whitespace-nowrap rounded-md bg-base-200 px-2 py-1 text-xs font-normal"
            >
              {tag}
            </span>
          ))}
        </div>
        <label>
          <span className="sr-only">Project description</span>
          <textarea
            role="textbox"
            value={description}
            aria-readonly="true"
            className="text-ltext2 h-20 w-full resize-none text-sm font-normal focus:outline-none focus:ring-0 sm:h-28 md:text-base"
            readOnly
          />
        </label>
        <div className="flex justify-end space-x-2">
          {src && src !== '' && (
            <a href={src} target="_blank" rel="noreferrer noopener">
              <GlassButton bg="bg-gray-600" size="small" icon={<GithubIcon className="h-6 w-6" />}>
                {sourceText}
              </GlassButton>
            </a>
          )}
          {url && url !== '' && (
            <a href={url} target="_blank" rel="noreferrer noopener">
              <GlassButton bg="bg-primary-600" size="small" icon={<WebIcon className="h-6 w-6" />}>
                {websiteText}
              </GlassButton>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

