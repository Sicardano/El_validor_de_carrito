import React from 'react';
import { styles } from '../styles/classNames';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  text: string;
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ text, links }) => (
  <footer className={styles.container.footer}>
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm text-grey-medium mb-6">{text}</p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-bold uppercase tracking-widest text-earthy-green hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
