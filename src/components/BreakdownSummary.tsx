import React from 'react';
import { BoxIcon } from './Icons';
import { CartBreakdown } from '../types';

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
}) => {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm font-medium dark:text-grey-medium">
          {subtotalLabel}{' '}
          <span className="text-xs opacity-50 cursor-help" title={subtotalInfoTitle}>
            {subtotalInfoIcon}
          </span>
        </div>
        <div className="font-mono text-lg font-bold dark:text-white">
          {formatNumber(breakdown.importe)}{' '}
          <span className="text-sm font-normal text-grey-medium">{currencySymbol}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm font-medium dark:text-grey-medium">
          {shippingLabel} <BoxIcon className="w-4 h-4 opacity-60" />
        </div>
        <div className="flex items-center gap-2">
          <div className="font-mono text-lg font-bold dark:text-white">
            {formatNumber(breakdown.envio)}{' '}
            <span className="text-sm font-normal text-grey-medium">{currencySymbol}</span>
          </div>
          {breakdown.envio === 0 ? (
            <span className="bg-green-100 text-earthy-green text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {freeBadgeLabel}
            </span>
          ) : breakdown.envio < 10 ? (
            <span className="bg-orange-100 text-warning-earth text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {discountBadgeLabel}
            </span>
          ) : null}
        </div>
      </div>

      <hr className="border-light-grey dark:border-[#333] my-2" />

      <div className="flex justify-between items-center pt-2">
        <span className="text-lg font-bold uppercase tracking-wider dark:text-white">{totalLabel}</span>
        <div className="font-mono text-3xl font-bold text-earthy-green dark:text-[#4ade80]">
          {formatNumber(breakdown.total)}{' '}
          <span className="text-lg font-normal">{currencySymbol}</span>
        </div>
      </div>
    </div>
  );
};

export default BreakdownSummary;
