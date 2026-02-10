import React from 'react';
import { GiftIcon } from './Icons';
import { CartBreakdown } from '../types';

interface FeedbackSectionProps {
  breakdown: CartBreakdown;
  formatNumber: (value: number) => string;
  messageIcon: React.ReactNode;
  vipIcon: React.ReactNode;
  benefitCheckIcon: React.ReactNode;
  vipTitle: string;
  vipBenefits: string[];
  progressTitle: string;
  progressGoalLabel: string;
  progressPrefix: string;
  progressSuffix: string;
  currencySymbol: string;
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  breakdown,
  formatNumber,
  messageIcon,
  vipIcon,
  benefitCheckIcon,
  vipTitle,
  vipBenefits,
  progressTitle,
  progressGoalLabel,
  progressPrefix,
  progressSuffix,
  currencySymbol
}) => {
  return (
    <div className="space-y-6">
      <div
        className={`flex items-start gap-4 p-4 rounded-xl border-l-4 transition-all ${
          breakdown.esVIP
            ? 'bg-orange-50 border-warning-earth dark:bg-[#2d241c]'
            : 'bg-grey-light border-earthy-green dark:bg-[#1a1f1a]'
        }`}
      >
        <span className="text-lg flex-shrink-0 mt-1">{breakdown.esVIP ? vipIcon : messageIcon}</span>
        <p className="text-sm font-medium dark:text-white">{breakdown.mensaje}</p>
      </div>

      {breakdown.esVIP && (
        <div className="bg-orange-50 dark:bg-[#2d241c] rounded-xl p-4 border border-orange-200 dark:border-orange-900/50 animate-[fadeIn_0.4s_ease-out]">
          <div className="flex items-center gap-2 mb-3">
            <GiftIcon className="w-5 h-5 text-warning-earth" />
            <h3 className="font-bold text-warning-earth">{vipTitle}</h3>
          </div>
          <ul className="text-xs space-y-2 dark:text-grey-medium">
            {vipBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="text-earthy-green font-bold">{benefitCheckIcon}</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!breakdown.esVIP && breakdown.proximoHito !== null && (
        <div className="bg-grey-light dark:bg-[#1a1a1a] p-4 rounded-xl">
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-grey-medium mb-3">
            <span>{progressTitle}</span>
            <span className="text-earthy-green">{progressGoalLabel}</span>
          </div>
          <div className="h-2 w-full bg-light-grey dark:bg-[#333] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-earthy-green to-dark-green-hover transition-all duration-500"
              style={{ width: `${breakdown.porcentajeHito}%` }}
            />
          </div>
          <p className="mt-3 text-[11px] text-center dark:text-grey-medium">
            {progressPrefix}{' '}
            <span className="font-bold text-earthy-green">
              {formatNumber(breakdown.proximoHito)}{currencySymbol}
            </span>{' '}
            {progressSuffix}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
