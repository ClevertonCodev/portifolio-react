'use client';

import { useState, useEffect } from 'react';
import ChevronIcon from './icons/ChevronIcon';
import BrazilIcon from './icons/BrazilIcon';
import EnglishIcon from './icons/EnglishIcon';
import SpanishIcon from './icons/SpanishIcon';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageOption {
  language: string;
  flagIcon: typeof BrazilIcon;
  code: string;
}

export default function LanguageSelector() {
  const [langDropdown, setLangDropdown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language: selectedLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const languageOptions: LanguageOption[] = [
    { language: 'Português', flagIcon: BrazilIcon, code: 'pt' },
    { language: 'English', flagIcon: EnglishIcon, code: 'en' },
    { language: 'Español', flagIcon: SpanishIcon, code: 'es' },
  ];

  const selectedOption = languageOptions.find(opt => opt.code === selectedLanguage) || languageOptions[0];

  const changeLanguage = (option: LanguageOption) => {
    setLanguage(option.code as 'pt' | 'en' | 'es');
    setLangDropdown(false);
  };

  const SelectedFlag = selectedOption.flagIcon;

  // Return placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <form className="mx-auto max-w-sm">
        <div className="relative flex">
          <button
            className="dropdown-toggle z-10 inline-flex flex-shrink-0 items-center gap-x-2 rounded-lg border border-gray-200 bg-gray-50/50 p-2.5 text-center text-sm font-semibold uppercase text-gray-800"
            disabled
          >
            <BrazilIcon className="w-4 h-4" />
            pt
            <ChevronIcon className="" />
          </button>
        </div>
      </form>
    );
  }

  return (
    <form className="mx-auto max-w-sm">
      {langDropdown && (
        <div
          className="absolute left-0 top-0 h-screen w-screen"
          onClick={() => setLangDropdown(false)}
        />
      )}
      <div className="relative flex">
        <button
          id="states-button"
          onClick={(e) => {
            e.preventDefault();
            setLangDropdown(!langDropdown);
          }}
          className="dropdown-toggle z-10 inline-flex flex-shrink-0 items-center gap-x-2 rounded-lg border border-gray-200 bg-gray-50/50 p-2.5 text-center text-sm font-semibold uppercase text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
          type="button"
        >
          <SelectedFlag className="w-4 h-4" />
          {selectedLanguage}
          <ChevronIcon className="" />
        </button>
        {langDropdown && (
          <div
            id="dropdown-states"
            className="absolute top-10 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow"
          >
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="states-button">
              {languageOptions.map((option) => {
                const OptionFlag = option.flagIcon;
                return (
                  <li key={option.language}>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => changeLanguage(option)}
                    >
                      <OptionFlag className="w-4 h-4" /> {option.language}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
}
