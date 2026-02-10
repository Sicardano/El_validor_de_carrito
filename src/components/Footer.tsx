import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  text: string;
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ text, links }) => {
  return (
    <footer className="bg-pure-white dark:bg-[#1f1f1f] border-t border-light-grey dark:border-[#333] py-8 sm:py-12 px-4 transition-colors duration-300">
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
};

export default Footer;
