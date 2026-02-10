import React from 'react';

interface CheckoutActionsProps {
  isCalculating: boolean;
  calculateLabel: string;
  calculatingLabel: string;
  checkoutLabel: string;
  loadingIcon: React.ReactNode;
  checkoutIcon: React.ReactNode;
  onCalculate: () => void;
  onCheckout: () => void;
}

const CheckoutActions: React.FC<CheckoutActionsProps> = ({
  isCalculating,
  calculateLabel,
  calculatingLabel,
  checkoutLabel,
  loadingIcon,
  checkoutIcon,
  onCalculate,
  onCheckout
}) => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        onClick={onCalculate}
        disabled={isCalculating}
        className="py-4 bg-dark-charcoal text-white font-bold rounded-lg uppercase tracking-wider hover:bg-dark-green-hover active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isCalculating ? calculatingLabel : calculateLabel}
        {isCalculating && <span className="animate-spin inline-block">{loadingIcon}</span>}
      </button>
      <button
        onClick={onCheckout}
        className="py-4 bg-grey-light dark:bg-[#2a2a2a] border-2 border-light-grey dark:border-[#444] text-dark-charcoal dark:text-white font-bold rounded-lg uppercase tracking-wider hover:border-earthy-green hover:text-earthy-green active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        <span>{checkoutIcon}</span> {checkoutLabel}
      </button>
    </div>
  );
};

export default CheckoutActions;
