import React from 'react';

interface CartInputProps {
  label: string;
  currencyHint: string;
  currencySymbol: string;
  rangeLabel: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  onCalculate: () => void;
}

const CartInput: React.FC<CartInputProps> = ({
  label,
  currencyHint,
  currencySymbol,
  rangeLabel,
  inputValue,
  onInputChange,
  onCalculate
}) => (
  <div className="mb-8">
    <label htmlFor="cartInput" className="block text-sm font-semibold mb-3 tracking-wide dark:text-grey-medium">
      {label} <span className="text-xs font-normal text-grey-medium">{currencyHint}</span>
    </label>
    <div className="relative flex items-center">
      <input
        type="number"
        id="cartInput"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onCalculate()}
        className="w-full py-4 px-6 bg-grey-light dark:bg-[#2a2a2a] border-2 border-light-grey dark:border-[#444] rounded-xl font-mono text-lg focus:outline-none focus:border-earthy-green dark:focus:border-earthy-green transition-all dark:text-white"
        placeholder="0,00"
        min="0"
        max="500"
        step="0.01"
      />
      <span className="absolute right-6 font-semibold text-grey-medium">{currencySymbol}</span>
    </div>
    <p className="mt-2 text-[10px] uppercase tracking-widest text-grey-medium">{rangeLabel}</p>
  </div>
);

export default CartInput;
