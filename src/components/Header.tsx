import React from 'react';
import { LeafIcon } from './Icons';
import { styles } from '../styles/classNames';

interface HeaderProps {
  title: string;
  isDarkMode: boolean;
  toggleLabel: string;
  lightIcon: React.ReactNode;
  darkIcon: React.ReactNode;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  isDarkMode,
  toggleLabel,
  lightIcon,
  darkIcon,
  onToggle
}) => (
  <header className={styles.container.header}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <LeafIcon className="w-8 h-8 text-earthy-green" />
        <h1 className="text-xl font-bold tracking-tight dark:text-white">{title}</h1>
      </div>
      <button
        onClick={onToggle}
        className="p-2 rounded-full hover:bg-grey-light dark:hover:bg-[#2a2a2a] transition-colors"
        aria-label={toggleLabel}
      >
        <span className="text-xl">{isDarkMode ? lightIcon : darkIcon}</span>
      </button>
    </div>
  </header>
);

export default Header;
