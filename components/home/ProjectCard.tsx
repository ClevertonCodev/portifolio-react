import Image from 'next/image';
import GlassButton from '../GlassButton';
import GithubIcon from '../icons/GithubIcon';
import WebIcon from '../icons/WebIcon';
import XMarkIcon from '../icons/XMarkIcon';

interface ProjectCardProps {
  name: string;
  techstack: string[];
  image?: string;
  description: string;
  src: string;
  url: string;
  status: string;
  sourceText: string;
  websiteText: string;
}

export default function ProjectCard({
  name,
  techstack,
  image,
  description,
  src,
  url,
  status,
  sourceText,
  websiteText
}: ProjectCardProps) {
  return (
    <article className="relative w-full rounded-xl border border-gray-200 bg-white py-6 shadow-md">
      <div className="relative flex flex-col gap-2 md:flex-row">
        <div className="order-2 flex w-full flex-col justify-center gap-y-2 px-6 py-3 md:w-1/2 md:px-2">
          <h2 className="open-sans text-ltext1 text-center text-2xl font-bold text-slate-700 sm:text-start sm:text-4xl">
            {name}
          </h2>
          <div className="source-sans my-2 flex flex-wrap justify-center gap-2 font-medium sm:justify-start">
            {techstack.map((tech) => (
              <span
                key={tech.toLowerCase()}
                className="relative flex flex-nowrap whitespace-nowrap rounded-md bg-base-200 px-2 py-1 text-xs font-normal sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-ltext2 text-justify text-base font-normal sm:text-start">
            {description}
          </p>
          <div className="flex justify-center gap-5 pt-3 sm:justify-start">
            {src ? (
              <a
                href={src}
                title={`${name} github repository`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GlassButton
                  title={`${name} github repository`}
                  bg="bg-slate-600"
                  padding="16"
                  icon={<GithubIcon className="h-6 w-6" />}
                >
                  {sourceText}
                </GlassButton>
              </a>
            ) : (
              <GlassButton
                title={name}
                bg="bg-red-600"
                padding="16"
                icon={<XMarkIcon className="h-6 w-6" />}
              >
                {status}
              </GlassButton>
            )}
            {url && url !== '' && (
              <a href={url} target="_blank" rel="noreferrer noopener">
                <GlassButton 
                  padding="16" 
                  title={`${name} website`}
                  icon={<WebIcon className="h-6 w-6" />}
                >
                  {websiteText}
                </GlassButton>
              </a>
            )}
          </div>
        </div>
        <div className="group mx-auto max-w-[90vw] px-6 md:w-1/2 md:px-0">
          <div className="container">
            <div className="tilt-box-wrap">
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <span className="t_over"></span>
              <div className="tilt-box">
                <img
                  src={`/images/projects/${image}`}
                  alt={`${name} main image`}
                  className="mx-auto object-cover object-center sm:max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

