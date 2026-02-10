
import React from 'react';

export const LeafIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
);

export const CartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4V2M17 4V2M2 6H22L20 17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17L2 6Z" />
    <circle cx="8" cy="22" r="1.5" fill="currentColor" />
    <circle cx="16" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

export const GiftIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8h-3V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-8-2h4v4h-4V6zM4 10h5v12H4v-12zm7 0h2v12h-2v-12zm3 0h5v12h-5v-12z" />
  </svg>
);

export const BoxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 7L12 2 3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7zm-9 10.5h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
  </svg>
);
