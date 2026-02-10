import React from 'react';
import { styles } from '../styles/classNames';

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
}) => (
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <button
      onClick={onCalculate}
      disabled={isCalculating}
      className={`${styles.button.primary} disabled:opacity-50 flex items-center justify-center gap-2`}
    >
      {isCalculating ? calculatingLabel : calculateLabel}
      {isCalculating && <span className="animate-spin inline-block">{loadingIcon}</span>}
    </button>
    <button
      onClick={onCheckout}
      className={`${styles.button.secondary} flex items-center justify-center gap-2`}
    >
      <span>{checkoutIcon}</span> {checkoutLabel}
    </button>
  </div>
);

export default CheckoutActions;
