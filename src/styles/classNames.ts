// Common Tailwind class patterns to reduce duplication

export const styles = {
  container: {
    section: 'bg-pure-white dark:bg-[#1f1f1f] rounded-2xl p-6 sm:p-10 shadow-card dark:shadow-none dark:border dark:border-[#333] animate-[slideIn_0.3s_ease-out]',
    header: 'sticky top-0 z-50 bg-pure-white dark:bg-[#1f1f1f] border-b border-light-grey dark:border-[#333] shadow-subtle transition-colors duration-300',
    footer: 'bg-pure-white dark:bg-[#1f1f1f] border-t border-light-grey dark:border-[#333] py-8 sm:py-12 px-4 transition-colors duration-300',
    main: 'flex-grow flex items-center justify-center p-4 sm:p-8 bg-off-white dark:bg-[#121212] transition-colors duration-300'
  },
  button: {
    primary: 'py-4 bg-dark-charcoal text-white font-bold rounded-lg uppercase tracking-wider hover:bg-dark-green-hover active:scale-[0.98] transition-all',
    secondary: 'py-4 bg-grey-light dark:bg-[#2a2a2a] border-2 border-light-grey dark:border-[#444] text-dark-charcoal dark:text-white font-bold rounded-lg uppercase tracking-wider hover:border-earthy-green hover:text-earthy-green active:scale-[0.98] transition-all',
    preset: (isSelected: boolean) => 
      `py-2 text-sm font-semibold rounded-lg border-2 transition-all ${
        isSelected
          ? 'bg-earthy-green border-earthy-green text-white shadow-md'
          : 'bg-grey-light dark:bg-[#2a2a2a] border-transparent hover:border-earthy-green dark:text-grey-medium'
      }`
  },
  badge: {
    free: 'bg-green-100 text-earthy-green text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider',
    discount: 'bg-orange-100 text-warning-earth text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider'
  },
  text: {
    label: 'text-sm font-semibold mb-3 tracking-wide dark:text-grey-medium',
    hint: 'text-xs opacity-50 cursor-help',
    currency: 'text-sm font-normal text-grey-medium'
  }
};
