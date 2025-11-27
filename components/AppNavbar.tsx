'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import MenuIcon from './icons/MenuIcon';
import { useLocalizedData } from '@/hooks/useLocalizedData';

export default function AppNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { hero, experience, projects, about, contact } = useLocalizedData();

  const navLinks = useMemo(() => [
    { href: '/', label: hero.home },
    { href: '/#experience', label: experience.title },
    { href: '/#projects', label: projects.title },
    { href: '/#about', label: about.title },
    { href: '/#contact', label: contact.title },
  ], [hero.home, experience.title, projects.title, about.title, contact.title]);

  return (
    <>
      <header className="fixed z-50 w-full bg-white">
        <div className="z-10 bg-base-50 text-xl uppercase text-zinc-800 shadow duration-300">
          <div className="content mx-auto flex w-full items-center justify-between py-3 px-4 max-w-[1000px] md:px-0">
            <Link
              href="/"
              className="group my-auto flex items-center gap-2 font-bold text-primary-900 open-sans"
            >
              <img
                src="/profile.webp"
                alt="Cleverton's picture"
                className="h-10 w-10 rounded-full rounded-tl-none duration-500 sm:group-hover:rounded-br-sm sm:group-hover:rounded-tl-full"
              />
              Cleverton
            </Link>
            <div className="flex items-center gap-x-6 font-semibold">
              <nav className="hidden items-center  md:flex [&>a]:px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="source-sans text-black">
                <LanguageSelector />
              </div>
              <button
                className="md:hidden"
                onClick={() => setShowMenu(!showMenu)}
                title="open navigation menu"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
          {showMenu && (
            <div className="flex items-center">
              <nav className="relative z-10 flex w-full flex-col divide-y bg-white text-zinc-700 [&>a]:px-10 [&>a]:py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    onClick={() => setShowMenu(false)}
                    href={link.href}
                    className="hover:text-primary-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
        {showMenu && (
          <div
            onClick={() => setShowMenu(false)}
            className="absolute left-0 top-0 z-[-1] h-screen w-screen bg-black/50"
          />
        )}
      </header>
    </>
  );
}

