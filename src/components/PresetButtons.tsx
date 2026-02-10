import React from 'react';

interface PresetButtonsProps {
  heading: string;
  presetValues: number[];
  inputValue: string;
  currencySymbol: string;
  onSelect: (value: number) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({
  heading,
  presetValues,
  inputValue,
  currencySymbol,
  onSelect
}) => {
  const selectedValue = Number.parseFloat(inputValue);

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold mb-4 dark:text-grey-medium">{heading}</p>
      <div className="grid grid-cols-4 gap-3">
        {presetValues.map((value) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={`py-2 text-sm font-semibold rounded-lg border-2 transition-all ${
              selectedValue === value
                ? 'bg-earthy-green border-earthy-green text-white shadow-md'
                : 'bg-grey-light dark:bg-[#2a2a2a] border-transparent hover:border-earthy-green dark:text-grey-medium'
            }`}
          >
            {value}{currencySymbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetButtons;
