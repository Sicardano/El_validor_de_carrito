
import React, { useState, useEffect, useCallback } from 'react';
import { CartIcon, LeafIcon, GiftIcon, BoxIcon } from './components/Icons';
import { calcularTotal, formatearNumero } from './logic/cartLogic';
import { AppState } from './types';

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

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-earthy-green/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-pure-white dark:bg-[#1f1f1f] border-b border-light-grey dark:border-[#333] shadow-subtle transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LeafIcon className="w-8 h-8 text-earthy-green" />
            <h1 className="text-xl font-bold tracking-tight dark:text-white">Eco-Friendly Shop</h1>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-grey-light dark:hover:bg-[#2a2a2a] transition-colors"
            aria-label="Toggle Theme"
          >
            <span className="text-xl">{state.isDarkMode ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-off-white dark:bg-[#121212] transition-colors duration-300">
        <div className="w-full max-w-lg">
          <section className="bg-pure-white dark:bg-[#1f1f1f] rounded-2xl p-6 sm:p-10 shadow-card dark:shadow-none dark:border dark:border-[#333] animate-[slideIn_0.3s_ease-out]">
            
            {/* Input Section */}
            <div className="mb-8">
              <label htmlFor="cartInput" className="block text-sm font-semibold mb-3 tracking-wide dark:text-grey-medium">
                Importe del Carrito <span className="text-xs font-normal text-grey-medium">(€)</span>
              </label>
              <div className="relative flex items-center">
                <input 
                  type="number" 
                  id="cartInput"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
                  className="w-full py-4 px-6 bg-grey-light dark:bg-[#2a2a2a] border-2 border-light-grey dark:border-[#444] rounded-xl font-mono text-lg focus:outline-none focus:border-earthy-green dark:focus:border-earthy-green transition-all dark:text-white"
                  placeholder="0,00"
                  min="0"
                  max="500"
                  step="0.01"
                />
                <span className="absolute right-6 font-semibold text-grey-medium">€</span>
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-grey-medium">Rango: 0€ - 500€</p>
            </div>

            {/* Presets */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-4 dark:text-grey-medium">Compras Recomendadas</p>
              <div className="grid grid-cols-4 gap-3">
                {PRESET_VALUES.map((val) => (
                  <button 
                    key={val}
                    onClick={() => setPreset(val)}
                    className={`py-2 text-sm font-semibold rounded-lg border-2 transition-all ${
                      parseFloat(inputValue) === val 
                        ? 'bg-earthy-green border-earthy-green text-white shadow-md' 
                        : 'bg-grey-light dark:bg-[#2a2a2a] border-transparent hover:border-earthy-green dark:text-grey-medium'
                    }`}
                  >
                    {val}€
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-light-grey dark:border-[#333] mb-8" />

            {/* Breakdown Details */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm font-medium dark:text-grey-medium">
                  Subtotal <span className="text-xs opacity-50 cursor-help" title="Subtotal sin envío">ℹ️</span>
                </div>
                <div className="font-mono text-lg font-bold dark:text-white">
                  {formatearNumero(state.breakdown.importe)} <span className="text-sm font-normal text-grey-medium">€</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm font-medium dark:text-grey-medium">
                  Envío <BoxIcon className="w-4 h-4 opacity-60" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-mono text-lg font-bold dark:text-white">
                    {formatearNumero(state.breakdown.envio)} <span className="text-sm font-normal text-grey-medium">€</span>
                  </div>
                  {state.breakdown.envio === 0 ? (
                    <span className="bg-green-100 text-earthy-green text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">¡Gratis!</span>
                  ) : state.breakdown.envio < 10 ? (
                    <span className="bg-orange-100 text-warning-earth text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Descuento</span>
                  ) : null}
                </div>
              </div>

              <hr className="border-light-grey dark:border-[#333] my-2" />

              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold uppercase tracking-wider dark:text-white">Total</span>
                <div className="font-mono text-3xl font-bold text-earthy-green dark:text-[#4ade80]">
                  {formatearNumero(state.breakdown.total)} <span className="text-lg font-normal">€</span>
                </div>
              </div>
            </div>

            <hr className="border-light-grey dark:border-[#333] mb-8" />

            {/* Feedback Messages */}
            <div className="space-y-6">
              <div className={`flex items-start gap-4 p-4 rounded-xl border-l-4 transition-all ${
                state.breakdown.esVIP ? 'bg-orange-50 border-warning-earth dark:bg-[#2d241c]' : 'bg-grey-light border-earthy-green dark:bg-[#1a1f1a]'
              }`}>
                <span className="text-lg flex-shrink-0 mt-1">{state.breakdown.esVIP ? '🎁' : '✓'}</span>
                <p className="text-sm font-medium dark:text-white">{state.breakdown.mensaje}</p>
              </div>

              {state.breakdown.esVIP && (
                <div className="bg-orange-50 dark:bg-[#2d241c] rounded-xl p-4 border border-orange-200 dark:border-orange-900/50 animate-[fadeIn_0.4s_ease-out]">
                   <div className="flex items-center gap-2 mb-3">
                    <GiftIcon className="w-5 h-5 text-warning-earth" />
                    <h3 className="font-bold text-warning-earth">Beneficios VIP</h3>
                   </div>
                   <ul className="text-xs space-y-2 dark:text-grey-medium">
                      <li className="flex items-center gap-2"><span className="text-earthy-green font-bold">✓</span> Envío totalmente gratuito</li>
                      <li className="flex items-center gap-2"><span className="text-earthy-green font-bold">✓</span> Regalo ecológico exclusivo incluido</li>
                      <li className="flex items-center gap-2"><span className="text-earthy-green font-bold">✓</span> Empaque premium biodegradable</li>
                   </ul>
                </div>
              )}

              {!state.breakdown.esVIP && state.breakdown.proximoHito !== null && (
                <div className="bg-grey-light dark:bg-[#1a1a1a] p-4 rounded-xl">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-grey-medium mb-3">
                    <span>Progreso Envío Gratis</span>
                    <span className="text-earthy-green">100€</span>
                  </div>
                  <div className="h-2 w-full bg-light-grey dark:bg-[#333] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-earthy-green to-dark-green-hover transition-all duration-500"
                      style={{ width: `${state.breakdown.porcentajeHito}%` }}
                    />
                  </div>
                  <p className="mt-3 text-[11px] text-center dark:text-grey-medium">
                    Faltan <span className="font-bold text-earthy-green">{formatearNumero(state.breakdown.proximoHito)}€</span> para envío gratis
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-[11px] flex items-center gap-2 text-grey-medium font-medium">
                <span className="text-earthy-green">✓</span> Productos 100% sostenibles
              </p>
              <p className="text-[11px] flex items-center gap-2 text-grey-medium font-medium">
                <span className="text-earthy-green">✓</span> Empaques biodegradables y reciclables
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleCalculate}
                disabled={state.isCalculating}
                className="py-4 bg-dark-charcoal text-white font-bold rounded-lg uppercase tracking-wider hover:bg-dark-green-hover active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {state.isCalculating ? 'Calculando...' : 'Calcular'}
                {state.isCalculating && <span className="animate-spin inline-block">⏳</span>}
              </button>
              <button 
                onClick={handleCheckout}
                className="py-4 bg-grey-light dark:bg-[#2a2a2a] border-2 border-light-grey dark:border-[#444] text-dark-charcoal dark:text-white font-bold rounded-lg uppercase tracking-wider hover:border-earthy-green hover:text-earthy-green active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>→</span> Proceder al Pago
              </button>
            </div>

            {/* Confirmation Alert */}
            {state.showConfirmation && (
              <div className="mt-6 bg-green-50 dark:bg-[#1a1f1a] border-2 border-earthy-green rounded-xl p-4 flex items-center gap-4 animate-[slideIn_0.3s_ease-out]">
                <span className="text-2xl">✓</span>
                <p className="text-sm font-semibold text-dark-charcoal dark:text-white">
                  ¡Pedido confirmado! Total: {formatearNumero(state.breakdown.total)}€. Recibirás un email en breve.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pure-white dark:bg-[#1f1f1f] border-t border-light-grey dark:border-[#333] py-8 sm:py-12 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-grey-medium mb-6">© 2026 Eco-Friendly Shop | Hecho con ❤️ para un planeta más sostenible</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-earthy-green hover:underline">Política de Privacidad</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-earthy-green hover:underline">Términos de Servicio</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-earthy-green hover:underline">Contacto</a>
          </div>
        </div>
      </footer>

      {/* Tailwind animation definitions */}
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
    </div>
  );
};

export default App;
