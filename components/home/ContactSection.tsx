'use client';

import { useState } from 'react';
import GlassButton from '../GlassButton';
import CopyIcon from '../icons/CopyIcon';
import CheckIcon from '../icons/CheckIcon';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { useLocalizedData } from '@/hooks/useLocalizedData';
import profiles from '@/data/i18n/profiles';
import styles from './styles/ContactSection.module.css';

export default function ContactSection() {
  const { contact } = useLocalizedData();
  const email = 'clevertonsantoscodev@gmail.com';
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    if (copied) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section
      id="contact"
      className="relative flex min-h-[100ch] w-full items-center justify-center bg-[#fff] pb-10"
    >
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -10 1200 130"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,66.44c58-10.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45,0.39C823.78,31,906.67,82,985.66,102.83c70.05,18.48,146.53,26.09,214.34,5V-10H0V47.35A600.21,600.21,0,0,0,321.39,66.44Z"
            fill="#fafafa"
          />
        </svg>
      </div>
      <div className="content mt-10">
        <h1 className="section__title">{contact.title}</h1>
        <div className="flex w-full flex-col gap-y-5">
          <p className="text-center sm:text-lg">{contact.description}</p>
          <span className="h-1 w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <span className="text-center">
            <p className="text-center sm:text-lg">{contact.social}</p>
            <div className="flex w-full flex-wrap items-center justify-center gap-2 pt-3">
              <div className="flex items-center">
                <input
                  type="email"
                  className="min-h-[45px] w-[200px] select-all rounded-s-md border-[1px] bg-gray-50 px-3 focus:outline-none"
                  id="Email"
                  name="Email"
                  placeholder={contact.email}
                  autoComplete="off"
                  value={contact.email}
                  readOnly
                />
                <button
                  className={`flex min-h-[45px] min-w-[85px] select-none items-center justify-center rounded-e-md border-none px-2 text-sm text-white transition-colors duration-300 ease-in-out ${
                    copied
                      ? 'cursor-default bg-neutral-600'
                      : 'cursor-pointer bg-primary-800 hover:bg-primary-900'
                  }`}
                  onClick={copyEmail}
                  disabled={copied}
                  title={contact.copy}
                  type="button"
                >
                  {!copied ? (
                    <span className="flex items-center gap-x-1 text-sm sm:text-base">
                      <CopyIcon className="h-4 w-4" />
                      {contact.copy}
                    </span>
                  ) : (
                    <span className="flex items-center gap-x-1 text-base">
                      <CheckIcon className="my-auto h-4 w-4 text-white" />
                      {contact.copied}
                    </span>
                  )}
                </button>
              </div>
              {profiles.github && (
                <a href={profiles.github} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-neutral-700" title="GitHub profile">
                    <GithubIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
              {profiles.linkedin && (
                <a href={profiles.linkedin} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-sky-700" title="LinkedIn profile">
                    <LinkedinIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
              {profiles.youtube && (
                <a href={profiles.youtube} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-red-700" title="Youtube channel">
                    <YoutubeIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
              {profiles.twitter && (
                <a href={profiles.twitter} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-slate-800" title="Twitter profile">
                    <TwitterIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
              {profiles.instagram && (
                <a href={profiles.instagram} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-rose-700" title="Instagram profile">
                    <InstagramIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
              {profiles.facebook && (
                <a href={profiles.facebook} target="_blank" rel="noopener">
                  <GlassButton size="small" bg="bg-blue-800" title="Facebook profile">
                    <FacebookIcon className="h-6 w-6" />
                  </GlassButton>
                </a>
              )}
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}

