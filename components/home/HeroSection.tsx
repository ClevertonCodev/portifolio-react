'use client';

import Link from 'next/link';
import GlassButton from '../GlassButton';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { useLocalizedData } from '@/hooks/useLocalizedData';
import styles from './styles/HeroSection.module.css';

export default function HeroSection() {
  const { hero } = useLocalizedData();

  return (
    <>
      <section className={`${styles.hero} relative flex w-full items-center justify-center`}>
        <div className={`${styles.heroBg} absolute inset-0`}></div>

        <div className="content relative space-y-8 text-center">
          <h1 className="source-sans text-balance text-5xl font-black uppercase tracking-wide text-primary-950 md:text-6xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto max-w-[60ch] whitespace-pre-line text-pretty text-base text-left sm:text-lg md:text-xl lg:max-w-[75ch]">
            {hero.subtitle}
          </p>
          <div className="flex justify-center gap-x-3">
            <Link href="#contact">
              <GlassButton title="Contact">
                <span className="px-2">{hero.contact_button}</span>
              </GlassButton>
            </Link>
          </div>
          <div className="flex justify-center gap-x-3">
            {hero.profiles.github && (
              <a
                href={hero.profiles.github}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-neutral-700" title="GitHub profile">
                  <GithubIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
            {hero.profiles.linkedin && (
              <a
                href={hero.profiles.linkedin}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-sky-700" title="LinkedIn profile">
                  <LinkedinIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
            {hero.profiles.youtube && (
              <a
                href={hero.profiles.youtube}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-red-700" title="Youtube channel">
                  <YoutubeIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
            {hero.profiles.twitter && (
              <a
                href={hero.profiles.twitter}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-slate-800" title="Twitter profile">
                  <TwitterIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
            {hero.profiles.instagram && (
              <a
                href={hero.profiles.instagram}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-rose-700" title="Instagram profile">
                  <InstagramIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
            {hero.profiles.facebook && (
              <a
                href={hero.profiles.facebook}
                target="_blank"
                rel="noopener"
              >
                <GlassButton size="small" bg="bg-blue-800" title="Facebook profile">
                  <FacebookIcon className="h-6 w-6" />
                </GlassButton>
              </a>
            )}
          </div>
        </div>
        <div className={styles.customShapeDividerBottom1713476723}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 130"
            preserveAspectRatio="none"
            className="section-background-color !bg-transparent"
          >
            <path
              d="M598.97 114.72L0 0 0 130 1200 130 1200 0 598.97 114.72z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

