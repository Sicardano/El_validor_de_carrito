import React from 'react';
import { BoxIcon } from './Icons';
import { CartBreakdown } from '../types';
import { styles } from '../styles/classNames';

interface BreakdownSummaryProps {
  breakdown: CartBreakdown;
  formatNumber: (value: number) => string;
  subtotalLabel: string;
  subtotalInfoTitle: string;
  subtotalInfoIcon: React.ReactNode;
  shippingLabel: string;
  totalLabel: string;
  currencySymbol: string;
  freeBadgeLabel: string;
  discountBadgeLabel: string;
}

const PriceRow = ({ label, value, suffix, icon, badge }: any) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2 text-sm font-medium dark:text-grey-medium">
      {label} {icon && <span className={styles.text.hint}>{icon}</span>}
    </div>
    <div className="flex items-center gap-2">
      <div className="font-mono text-lg font-bold dark:text-white">
        {value} <span className={styles.text.currency}>{suffix}</span>
      </div>
      {badge}
    </div>
  </div>
);

const BreakdownSummary: React.FC<BreakdownSummaryProps> = ({
  breakdown,
  formatNumber,
  subtotalLabel,
  subtotalInfoTitle,
  subtotalInfoIcon,
  shippingLabel,
  totalLabel,
  currencySymbol,
  freeBadgeLabel,
  discountBadgeLabel
}) => (
  <div className="space-y-4 mb-8">
    <PriceRow
      label={subtotalLabel}
      value={formatNumber(breakdown.importe)}
      suffix={currencySymbol}
      icon={<span title={subtotalInfoTitle}>{subtotalInfoIcon}</span>}
    />

    <PriceRow
      label={shippingLabel}
      value={formatNumber(breakdown.envio)}
      suffix={currencySymbol}
      icon={<BoxIcon className="w-4 h-4 opacity-60" />}
      badge={
        breakdown.envio === 0 && <span className={styles.badge.free}>{freeBadgeLabel}</span> ||
        breakdown.envio < 10 && <span className={styles.badge.discount}>{discountBadgeLabel}</span> ||
        null
      }
    />

    <hr className="border-light-grey dark:border-[#333] my-2" />

    <div className="flex justify-between items-center pt-2">
      <span className="text-lg font-bold uppercase tracking-wider dark:text-white">{totalLabel}</span>
      <div className="font-mono text-3xl font-bold text-earthy-green dark:text-[#4ade80]">
        {formatNumber(breakdown.total)} <span className="text-lg font-normal">{currencySymbol}</span>
      </div>
    </div>
  </div>
);

export default BreakdownSummary;
