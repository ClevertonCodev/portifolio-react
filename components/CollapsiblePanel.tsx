'use client';

import { useState, ReactNode } from 'react';

interface CollapsiblePanelProps {
  header?: string;
  toggleable?: boolean;
  defaultExpanded?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export default function CollapsiblePanel({
  header = '',
  toggleable = true,
  defaultExpanded = true,
  icon,
  children
}: CollapsiblePanelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => {
    if (toggleable) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="panel rounded-2xl border-2 border-base-200">
      <div
        className={`sticky top-[70px] z-[2] flex cursor-pointer rounded-t-2xl border-b-2 bg-gray-50 px-2 py-2 transition-all duration-300 ${
          expanded 
            ? 'rounded-b-none border-base-200 delay-0' 
            : 'rounded-b-xl border-transparent'
        }`}
        onClick={toggle}
      >
        <header className="flex space-x-2 ps-1 text-base-800">
          {icon}
          {header && (
            <span className="source-sans my-auto text-xl font-semibold sm:text-2xl">
              {header}
            </span>
          )}
        </header>

        {toggleable && (
          <button
            title="Expand or collapse panel"
            type="button"
            className="panel-toggler my-auto ml-auto h-6 w-6 self-end"
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="text-base-600"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path 
                className="transition duration-300" 
                d="M12 5l0 14" 
                opacity={expanded ? '0' : '1'} 
              />
              <path d="M5 12l14 0" />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`overflow-hidden rounded-b-2xl bg-white transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[5000px]' : 'max-h-0'
        }`}
      >
        {expanded && <div className="p-3 px-5 pb-5">{children}</div>}
      </div>
    </div>
  );
}

