import React from 'react';

export default function BankIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="5" y1="21" x2="19" y2="21" />
      <line x1="5" y1="21" x2="5" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <line x1="13" y1="21" x2="13" y2="9" />
      <line x1="17" y1="21" x2="17" y2="9" />
      <line x1="19" y1="21" x2="19" y2="9" />
      <path d="M3 9l9-7 9 7" />
    </svg>
  );
}

