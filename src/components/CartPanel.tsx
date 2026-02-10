import React from 'react';
import { CartBreakdown } from '../types';
import { styles } from '../styles/classNames';
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

const CartPanel: React.FC<CartPanelProps> = (props) => {
  const { labels, icons, breakdown, formatNumber } = props;

  return (
    <section className={styles.container.section}>
      <CartInput
        label={labels.cartLabel}
        currencyHint={labels.cartCurrencyHint}
        currencySymbol={labels.currencySymbol}
        rangeLabel={labels.cartRangeLabel}
        inputValue={props.inputValue}
        onInputChange={props.onInputChange}
        onCalculate={props.onCalculate}
      />

      <PresetButtons
        heading={labels.presetsHeading}
        presetValues={props.presetValues}
        inputValue={props.inputValue}
        currencySymbol={labels.currencySymbol}
        onSelect={props.onPresetSelect}
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
        isCalculating={props.isCalculating}
        calculateLabel={labels.calculateLabel}
        calculatingLabel={labels.calculatingLabel}
        checkoutLabel={labels.checkoutLabel}
        loadingIcon={icons.loading}
        checkoutIcon={icons.checkout}
        onCalculate={props.onCalculate}
        onCheckout={props.onCheckout}
      />

      <ConfirmationAlert show={props.showConfirmation} message={labels.confirmationMessage} icon={icons.confirmation} />
    </section>
  );
};

export default CartPanel;
