import React from 'react';
import { CartBreakdown } from '../types';
import CartInput from './CartInput';
import PresetButtons from './PresetButtons';
import BreakdownSummary from './BreakdownSummary';
import FeedbackSection from './FeedbackSection';
import SustainabilityNotes from './SustainabilityNotes';
import CheckoutActions from './CheckoutActions';
import ConfirmationAlert from './ConfirmationAlert';

interface CartPanelProps {
  inputValue: string;
  presetValues: number[];
  breakdown: CartBreakdown;
  isCalculating: boolean;
  showConfirmation: boolean;
  formatNumber: (value: number) => string;
  onInputChange: (value: string) => void;
  onCalculate: () => void;
  onPresetSelect: (value: number) => void;
  onCheckout: () => void;
  labels: {
    cartLabel: string;
    cartCurrencyHint: string;
    cartRangeLabel: string;
    presetsHeading: string;
    subtotalLabel: string;
    subtotalInfoTitle: string;
    shippingLabel: string;
    totalLabel: string;
    currencySymbol: string;
    freeBadgeLabel: string;
    discountBadgeLabel: string;
    vipTitle: string;
    vipBenefits: string[];
    progressTitle: string;
    progressGoalLabel: string;
    progressPrefix: string;
    progressSuffix: string;
    sustainabilityNotes: string[];
    calculateLabel: string;
    calculatingLabel: string;
    checkoutLabel: string;
    confirmationMessage: string;
  };
  icons: {
    subtotalInfo: React.ReactNode;
    message: React.ReactNode;
    vipMessage: React.ReactNode;
    benefitCheck: React.ReactNode;
    loading: React.ReactNode;
    checkout: React.ReactNode;
    confirmation: React.ReactNode;
    sustainabilityCheck: React.ReactNode;
  };
}

const CartPanel: React.FC<CartPanelProps> = ({
  inputValue,
  presetValues,
  breakdown,
  isCalculating,
  showConfirmation,
  formatNumber,
  onInputChange,
  onCalculate,
  onPresetSelect,
  onCheckout,
  labels,
  icons
}) => {
  return (
    <section className="bg-pure-white dark:bg-[#1f1f1f] rounded-2xl p-6 sm:p-10 shadow-card dark:shadow-none dark:border dark:border-[#333] animate-[slideIn_0.3s_ease-out]">
      <CartInput
        label={labels.cartLabel}
        currencyHint={labels.cartCurrencyHint}
        currencySymbol={labels.currencySymbol}
        rangeLabel={labels.cartRangeLabel}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onCalculate={onCalculate}
      />

      <PresetButtons
        heading={labels.presetsHeading}
        presetValues={presetValues}
        inputValue={inputValue}
        currencySymbol={labels.currencySymbol}
        onSelect={onPresetSelect}
      />

      <hr className="border-light-grey dark:border-[#333] mb-8" />

      <BreakdownSummary
        breakdown={breakdown}
        formatNumber={formatNumber}
        subtotalLabel={labels.subtotalLabel}
        subtotalInfoTitle={labels.subtotalInfoTitle}
        subtotalInfoIcon={icons.subtotalInfo}
        shippingLabel={labels.shippingLabel}
        totalLabel={labels.totalLabel}
        currencySymbol={labels.currencySymbol}
        freeBadgeLabel={labels.freeBadgeLabel}
        discountBadgeLabel={labels.discountBadgeLabel}
      />

      <hr className="border-light-grey dark:border-[#333] mb-8" />

      <FeedbackSection
        breakdown={breakdown}
        formatNumber={formatNumber}
        messageIcon={icons.message}
        vipIcon={icons.vipMessage}
        benefitCheckIcon={icons.benefitCheck}
        vipTitle={labels.vipTitle}
        vipBenefits={labels.vipBenefits}
        progressTitle={labels.progressTitle}
        progressGoalLabel={labels.progressGoalLabel}
        progressPrefix={labels.progressPrefix}
        progressSuffix={labels.progressSuffix}
        currencySymbol={labels.currencySymbol}
      />

      <SustainabilityNotes notes={labels.sustainabilityNotes} checkIcon={icons.sustainabilityCheck} />

      <CheckoutActions
        isCalculating={isCalculating}
        calculateLabel={labels.calculateLabel}
        calculatingLabel={labels.calculatingLabel}
        checkoutLabel={labels.checkoutLabel}
        loadingIcon={icons.loading}
        checkoutIcon={icons.checkout}
        onCalculate={onCalculate}
        onCheckout={onCheckout}
      />

      <ConfirmationAlert show={showConfirmation} message={labels.confirmationMessage} icon={icons.confirmation} />
    </section>
  );
};

export default CartPanel;
