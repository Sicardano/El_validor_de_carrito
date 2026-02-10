import React from 'react';
import { styles } from '../styles/classNames';

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
  const selectedValue = parseFloat(inputValue);

  return (
    <div className="mb-8">
      <p className="text-sm font-semibold mb-4 dark:text-grey-medium">{heading}</p>
      <div className="grid grid-cols-4 gap-3">
        {presetValues.map((value) => (
          <button
            key={value}
            onClick={() => onSelect(value)}
            className={styles.button.preset(selectedValue === value)}
          >
            {value}{currencySymbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetButtons;
