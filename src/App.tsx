
import React, { useState, useEffect } from 'react';
import { calcularTotal, formatearNumero } from './logic/cartLogic';
import { AppState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import AnimationStyles from './components/AnimationStyles';

const PRESET_VALUES = [30, 75, 150, 250];

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    cartAmount: 120,
    isDarkMode: false,
    isCalculating: false,
    showConfirmation: false,
    breakdown: calcularTotal(120),
  });

  const [inputValue, setInputValue] = useState('120');

  const labels = {
    headerTitle: 'Eco-Friendly Shop',
    toggleThemeLabel: 'Toggle Theme',
    cartLabel: 'Importe del Carrito',
    cartCurrencyHint: '(€)',
    cartRangeLabel: 'Rango: 0€ - 500€',
    presetsHeading: 'Compras Recomendadas',
    subtotalLabel: 'Subtotal',
    subtotalInfoTitle: 'Subtotal sin envío',
    shippingLabel: 'Envío',
    totalLabel: 'Total',
    currencySymbol: '€',
    freeBadgeLabel: '¡Gratis!',
    discountBadgeLabel: 'Descuento',
    vipTitle: 'Beneficios VIP',
    vipBenefits: [
      'Envío totalmente gratuito',
      'Regalo ecológico exclusivo incluido',
      'Empaque premium biodegradable'
    ],
    progressTitle: 'Progreso Envío Gratis',
    progressGoalLabel: '100€',
    progressPrefix: 'Faltan',
    progressSuffix: 'para envío gratis',
    sustainabilityNotes: [
      'Productos 100% sostenibles',
      'Empaques biodegradables y reciclables'
    ],
    calculateLabel: 'Calcular',
    calculatingLabel: 'Calculando...',
    checkoutLabel: 'Proceder al Pago',
    footerText: '© 2026 Eco-Friendly Shop | Hecho con ❤️ para un planeta más sostenible',
    footerLinks: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
      { label: 'Contacto', href: '#' }
    ]
  };

  const icons = {
    toggleLight: '☀️',
    toggleDark: '🌙',
    subtotalInfo: 'ℹ️',
    message: '✓',
    vipMessage: '🎁',
    benefitCheck: '✓',
    loading: '⏳',
    checkout: '→',
    confirmation: '✓',
    sustainabilityCheck: '✓'
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    setState(prev => ({ ...prev, isDarkMode: isDark }));
  }, []);

  const toggleDarkMode = () => {
    const newMode = !state.isDarkMode;
    setState(prev => ({ ...prev, isDarkMode: newMode }));
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleCalculate = async () => {
    const val = parseFloat(inputValue);
    if (isNaN(val) || val < 0 || val > 500) {
      alert('Por favor ingresa un importe válido entre 0€ y 500€');
      return;
    }

    setState(prev => ({ ...prev, isCalculating: true }));
    // Simulate brief processing time
    await new Promise(resolve => setTimeout(resolve, 300));
    
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
    setTimeout(() => {
      setState(prev => ({ ...prev, showConfirmation: false }));
    }, 5000);
  };

  const setPreset = (val: number) => {
    setInputValue(val.toString());
    // Auto calculate for better UX
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        cartAmount: val,
        breakdown: calcularTotal(val)
      }));
    }, 100);
  };

  const confirmationMessage = `¡Pedido confirmado! Total: ${formatearNumero(state.breakdown.total)}€. Recibirás un email en breve.`;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-earthy-green/20">
      <Header
        title={labels.headerTitle}
        isDarkMode={state.isDarkMode}
        toggleLabel={labels.toggleThemeLabel}
        lightIcon={icons.toggleLight}
        darkIcon={icons.toggleDark}
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
            labels={{
              cartLabel: labels.cartLabel,
              cartCurrencyHint: labels.cartCurrencyHint,
              cartRangeLabel: labels.cartRangeLabel,
              presetsHeading: labels.presetsHeading,
              subtotalLabel: labels.subtotalLabel,
              subtotalInfoTitle: labels.subtotalInfoTitle,
              shippingLabel: labels.shippingLabel,
              totalLabel: labels.totalLabel,
              currencySymbol: labels.currencySymbol,
              freeBadgeLabel: labels.freeBadgeLabel,
              discountBadgeLabel: labels.discountBadgeLabel,
              vipTitle: labels.vipTitle,
              vipBenefits: labels.vipBenefits,
              progressTitle: labels.progressTitle,
              progressGoalLabel: labels.progressGoalLabel,
              progressPrefix: labels.progressPrefix,
              progressSuffix: labels.progressSuffix,
              sustainabilityNotes: labels.sustainabilityNotes,
              calculateLabel: labels.calculateLabel,
              calculatingLabel: labels.calculatingLabel,
              checkoutLabel: labels.checkoutLabel,
              confirmationMessage
            }}
            icons={{
              subtotalInfo: icons.subtotalInfo,
              message: icons.message,
              vipMessage: icons.vipMessage,
              benefitCheck: icons.benefitCheck,
              loading: icons.loading,
              checkout: icons.checkout,
              confirmation: icons.confirmation,
              sustainabilityCheck: icons.sustainabilityCheck
            }}
          />
        </div>
      </main>

      <Footer text={labels.footerText} links={labels.footerLinks} />
      <AnimationStyles />
    </div>
  );
};

export default App;
