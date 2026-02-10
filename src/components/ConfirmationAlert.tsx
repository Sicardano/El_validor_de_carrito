import React from 'react';

interface ConfirmationAlertProps {
  show: boolean;
  message: string;
  icon: React.ReactNode;
}

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ show, message, icon }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="mt-6 bg-green-50 dark:bg-[#1a1f1a] border-2 border-earthy-green rounded-xl p-4 flex items-center gap-4 animate-[slideIn_0.3s_ease-out]">
      <span className="text-2xl">{icon}</span>
      <p className="text-sm font-semibold text-dark-charcoal dark:text-white">{message}</p>
    </div>
  );
};

export default ConfirmationAlert;
