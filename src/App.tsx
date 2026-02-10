
import React, { useState, useEffect } from 'react';
import { calcularTotal, formatearNumero } from './logic/cartLogic';
import { AppState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import AnimationStyles from './components/AnimationStyles';
import { PRESET_VALUES, LABELS, ICONS } from './constants/config';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    cartAmount: 120,
    isDarkMode: false,
    isCalculating: false,
    showConfirmation: false,
    breakdown: calcularTotal(120),
  });

  const [inputValue, setInputValue] = useState('120');

  // Load theme from localStorage on mount
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setState(prev => ({ ...prev, isDarkMode: isDark }));
    isDark 
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !state.isDarkMode;
    setState(prev => ({ ...prev, isDarkMode: newMode }));
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const handleCalculate = async () => {
    const val = parseFloat(inputValue);
    if (isNaN(val) || val < 0 || val > 500) {
      alert('Por favor ingresa un importe válido entre 0€ y 500€');
      return;
    }
    setState(prev => ({ ...prev, isCalculating: true }));
    await new Promise(r => setTimeout(r, 300));
    setState(prev => ({
      ...prev,
      isCalculating: false,
      cartAmount: val,
      breakdown: calcularTotal(val)
    }));
  };

  const handleCheckout = () => {
    if (state.cartAmount <= 0) {
      alert('El carrito está vacío');
      return;
    }
    setState(prev => ({ ...prev, showConfirmation: true }));
    setTimeout(() => setState(prev => ({ ...prev, showConfirmation: false })), 5000);
  };

  const setPreset = (val: number) => {
    setInputValue(val.toString());
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        cartAmount: val,
        breakdown: calcularTotal(val)
      }));
    }, 100);
  };

  const confirmationMessage = `¡Pedido confirmado! Total: ${formatearNumero(state.breakdown.total)}€. Recibirás un email en breve.`;

  const panelLabels = {
    ...LABELS,
    confirmationMessage
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-earthy-green/20">
      <Header
        title={LABELS.headerTitle}
        isDarkMode={state.isDarkMode}
        toggleLabel={LABELS.toggleThemeLabel}
        lightIcon={ICONS.toggleLight}
        darkIcon={ICONS.toggleDark}
        onToggle={toggleDarkMode}
      />

      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-off-white dark:bg-[#121212] transition-colors duration-300">
        <div className="w-full max-w-lg">
          <CartPanel
            inputValue={inputValue}
            presetValues={PRESET_VALUES}
            breakdown={state.breakdown}
            isCalculating={state.isCalculating}
            showConfirmation={state.showConfirmation}
            formatNumber={formatearNumero}
            onInputChange={setInputValue}
            onCalculate={handleCalculate}
            onPresetSelect={setPreset}
            onCheckout={handleCheckout}
            labels={panelLabels}
            icons={ICONS}
          />
        </div>
      </main>

      <Footer text={LABELS.footerText} links={LABELS.footerLinks} />
      <AnimationStyles />
    </div>
  );
};

export default App;
