import React from 'react';

const AnimationStyles: React.FC = () => {
  return (
    <style>{`
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  );
};

export default AnimationStyles;
