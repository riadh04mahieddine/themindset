'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SupportIcon() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-24 h-24 flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-24 h-24 text-sky-200"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-24 h-24">
      <Image 
        src="/images/support-icon.svg" 
        width={96} 
        height={96} 
        alt="Support Icon"
        className="opacity-80"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
