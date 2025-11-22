import React from 'react';

export default function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21h18" />
      <line x1="9" y1="8" x2="10" y2="8" />
      <line x1="9" y1="12" x2="10" y2="12" />
      <line x1="9" y1="16" x2="10" y2="16" />
      <line x1="14" y1="8" x2="15" y2="8" />
      <line x1="14" y1="12" x2="15" y2="12" />
      <line x1="14" y1="16" x2="15" y2="16" />
      <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
    </svg>
  );
}

