# 🎯 PROMPT DETALLADO - VALIDADOR DE CARRITO ECO-FRIENDLY
## Para Google AI Studio / Gemini / Vertex AI

---

## 📋 SECCIÓN 1: CONTEXTO Y VISIÓN GENERAL

### 1.1 Descripción del Proyecto
Necesito que desarrolles una **Aplicación Web Interactiva Completa** que implemente un "Validador de Carrito Eco-Friendly" con interfaz moderna, diseño responsivo y experiencia de usuario optimizada.

### 1.2 Objetivo Principal
Crear una herramienta online que:
- Permita a los usuarios calcular el costo total de su compra incluyendo envío
- Incentive compras sostenibles mostrando mensajes personalizados
- Proporcione feedback visual inmediato
- Sea completamente responsive y accesible
- Funcione sin dependencias externas (vanilla JavaScript si es posible)

### 1.3 Usuarios Target
- Compradores online preocupados por sostenibilidad
- Edad: 18-55 años
- Dispositivos: Desktop, Tablet, Mobile
- Navegadores: Chrome, Firefox, Safari, Edge (últimas versiones)

---

## 🔧 SECCIÓN 2: ESPECIFICACIONES TÉCNICAS

### 2.1 Stack Tecnológico Requerido
```
Frontend:
- HTML5 semántico
- CSS3 moderno (Flexbox, Grid, CSS Variables)
- JavaScript ES6+ (sin frameworks si es posible, o React simple)
- No usar librerías externas (Bootstrap, jQuery, etc.)
- Opcional: TypeScript para mayor type-safety

Compatibilidad:
- Navegadores modernos (ES6+)
- Mobile First Approach
- Sin polyfills necesarios

Hosting/Entorno:
- Código que se ejecute en navegador
- Compatible con Google Colab, Replit, CodePen, o descargable
- Archivo único .html o estructura modular (index.html, style.css, script.js)
```

### 2.2 Archivos a Generar
```
Estructura recomendada:
```
index.html          - Estructura HTML5 completa
styles.css          - Estilos CSS3 con variables globales
script.js           - Lógica JavaScript ES6+
assets/
  └── icons.svg     - Sprites de iconos SVG
README.md           - Documentación completa
```

---

## 🎨 SECCIÓN 3: SISTEMA DE DISEÑO DETALLADO

### 3.1 Paleta de Colores (Allbirds Inspired - Organic Minimalism)

```css
/* Colores Primarios */
--color-off-white: #F7F7F7;           /* Fondo principal */
--color-pure-white: #FFFFFF;          /* Fondo de cards */
--color-dark-charcoal: #212121;       /* Texto principal, botones */
--color-earthy-green: #2D5A27;        /* Acentos eco, success */

/* Colores Secundarios */
--color-light-grey: #EDEDED;          /* Divisores, bordes */
--color-grey-medium: #999999;         /* Texto secundario */
--color-grey-light: #FAFAFA;          /* Fondos alternativos */
--color-dark-green-hover: #1d3817;    /* Hover estados */

/* Colores Semánticos */
--color-success: #2D5A27;             /* Verde éxito */
--color-warning: #D4A574;             /* Naranja tierra */
--color-error: #C1666B;               /* Rojo suave */
--color-info: #4A90E2;                /* Azul información */

/* Gradientes */
--gradient-subtle: linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 100%);
--gradient-accent: linear-gradient(135deg, #2D5A27 0%, #1d3817 100%);

/* Sombras */
--shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-light: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-card: 0 10px 25px rgba(0, 0, 0, 0.05);
--shadow-elevated: 0 20px 40px rgba(0, 0, 0, 0.12);
```

### 3.2 Tipografía Detallada

```css
/* Fuentes */
--font-family-base: 'Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', system-ui, sans-serif;
--font-family-mono: 'IBM Plex Mono', 'Monaco', 'Courier New', monospace;

/* Escalas de Tamaño */
--font-size-xs: 12px;           /* Etiquetas, small text */
--font-size-sm: 14px;           /* Body text, descripción */
--font-size-base: 16px;         /* Texto base */
--font-size-lg: 18px;           /* Subtítulos */
--font-size-xl: 24px;           /* Headers secundarios */
--font-size-2xl: 28px;          /* Headers principales */
--font-size-3xl: 32px;          /* Títulos grandes */
--font-size-4xl: 40px;          /* Títulos extra grandes */

/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.6;
--line-height-relaxed: 1.8;

/* Letter Spacing */
--letter-spacing-tight: -0.3px;
--letter-spacing-normal: 0px;
--letter-spacing-loose: 0.5px;

/* Uso Recomendado */
/* H1 */
font-size: 32px;
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.3px;

/* H2 */
font-size: 28px;
font-weight: 700;
line-height: 1.2;

/* Body */
font-size: 16px;
font-weight: 400;
line-height: 1.6;

/* Label */
font-size: 14px;
font-weight: 500;
line-height: 1.6;

/* Caption */
font-size: 12px;
font-weight: 400;
line-height: 1.6;
color: #999999;
```

### 3.3 Espaciado y Dimensiones

```css
/* Espaciado (8px base) */
--space-2xs: 4px;
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;

/* Breakpoints Responsivos */
--breakpoint-xs: 320px;
--breakpoint-sm: 480px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-full: 9999px;

/* Transiciones */
--transition-fast: 0.15s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

---

## 🧮 SECCIÓN 4: LÓGICA DE NEGOCIO DETALLADA

### 4.1 Función: calcularEnvio(importe)

```javascript
/**
 * Calcula el costo de envío según el importe del carrito
 * @param {number} importe - Importe total del carrito en euros
 * @returns {number} Costo de envío en euros
 * 
 * Reglas:
 * - Si importe >= 100€: envío gratis (0€)
 * - Si importe >= 50€ y < 100€: envío 5€
 * - Si importe < 50€: envío 10€
 * 
 * Ejemplos:
 * - calcularEnvio(150) => 0
 * - calcularEnvio(75) => 5
 * - calcularEnvio(30) => 10
 */
function calcularEnvio(importe) {
  if (typeof importe !== 'number' || importe < 0) {
    throw new Error('El importe debe ser un número positivo');
  }
  
  if (importe >= 100) {
    return 0;
  } else if (importe >= 50) {
    return 5;
  } else {
    return 10;
  }
}
```

### 4.2 Función: obtenerMensaje(importe)

```javascript
/**
 * Retorna un mensaje personalizado según el importe del carrito
 * @param {number} importe - Importe total del carrito en euros
 * @returns {string} Mensaje personalizado
 * 
 * Reglas:
 * - Si importe > 200€: "¡Eres un cliente VIP! Tienes un regalo ecológico incluido"
 * - Si importe <= 200€: "Gracias por tu compra responsable"
 * 
 * Ejemplos:
 * - obtenerMensaje(250) => "¡Eres un cliente VIP! Tienes un regalo ecológico incluido"
 * - obtenerMensaje(100) => "Gracias por tu compra responsable"
 */
function obtenerMensaje(importe) {
  if (typeof importe !== 'number' || importe < 0) {
    throw new Error('El importe debe ser un número positivo');
  }
  
  if (importe > 200) {
    return "¡Eres un cliente VIP! Tienes un regalo ecológico incluido";
  } else {
    return "Gracias por tu compra responsable";
  }
}
```

### 4.3 Función: formatearPrecio(valor)

```javascript
/**
 * Formatea un valor numérico como texto de precio
 * @param {number} valor - Valor numérico a formatear
 * @returns {string} Texto formateado
 * 
 * Formato: "El total a pagar es [valor] €"
 * 
 * Ejemplos:
 * - formatearPrecio(125) => "El total a pagar es 125 €"
 * - formatearPrecio(99.50) => "El total a pagar es 99.50 €"
 */
function formatearPrecio(valor) {
  if (typeof valor !== 'number' || valor < 0) {
    throw new Error('El valor debe ser un número positivo');
  }
  
  const precioFormateado = valor.toFixed(2).replace('.', ',');
  return `El total a pagar es ${precioFormateado} €`;
}
```

### 4.4 Función: calcularTotal(importe)

```javascript
/**
 * Calcula el total final incluyendo envío
 * @param {number} importe - Importe del carrito
 * @returns {object} Objeto con desglose completo
 */
function calcularTotal(importe) {
  const envio = calcularEnvio(importe);
  const total = importe + envio;
  const mensaje = obtenerMensaje(importe);
  const esVIP = importe > 200;
  
  return {
    importe: importe,
    envio: envio,
    total: total,
    mensaje: mensaje,
    esVIP: esVIP,
    ahorroEnvio: importe >= 100 ? 10 : (importe >= 50 ? 5 : 0),
    proximoHito: importe >= 100 ? null : (100 - importe)
  };
}
```

---

## 🎯 SECCIÓN 5: ESTRUCTURA HTML DETALLADA

### 5.1 Estructura Semántica Completa

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Validador de Carrito Eco-Friendly - Calcula el costo total de tu compra con envío gratuito para compras sostenibles">
    <meta name="theme-color" content="#2D5A27">
    <title>Validador de Carrito Eco-Friendly | Tienda Online</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,...">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root" class="root">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <div class="logo-section">
                    <svg class="logo-icon" width="32" height="32" viewBox="0 0 32 32">
                        <!-- Logo SVG aquí -->
                    </svg>
                    <h1 class="logo-text">Eco-Friendly Shop</h1>
                </div>
                <button class="theme-toggle" id="themeToggle" aria-label="Cambiar tema">
                    <span class="theme-icon">🌙</span>
                </button>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-container">
            <div class="card-wrapper">
                <!-- Card Principal -->
                <section class="checkout-card" role="region" aria-label="Carrito de compras">
                    
                    <!-- Sección de Inputs -->
                    <div class="input-section">
                        <label for="cartInput" class="input-label">
                            Importe del Carrito
                            <span class="currency-symbol">€</span>
                        </label>
                        <div class="input-wrapper">
                            <input 
                                type="number" 
                                id="cartInput" 
                                class="cart-input" 
                                min="0" 
                                max="500" 
                                step="0.01"
                                value="120"
                                placeholder="Ingresa el importe"
                                aria-describedby="inputHelper"
                            >
                            <span class="input-suffix">€</span>
                        </div>
                        <small id="inputHelper" class="input-helper">Rango: 0€ - 500€</small>
                        <div id="inputError" class="input-error" role="alert" aria-live="polite"></div>
                    </div>

                    <!-- Sección de Sliders/Presets -->
                    <div class="preset-section">
                        <label class="preset-label">Compras Recomendadas</label>
                        <div class="preset-buttons">
                            <button class="preset-btn" data-value="30">30€</button>
                            <button class="preset-btn" data-value="75">75€</button>
                            <button class="preset-btn" data-value="150">150€</button>
                            <button class="preset-btn" data-value="250">250€</button>
                        </div>
                    </div>

                    <!-- Divisor -->
                    <hr class="divider" role="presentation">

                    <!-- Sección de Detalles del Carrito -->
                    <div class="cart-details">
                        <div class="detail-row">
                            <div class="detail-label">
                                <span class="label-text">Importe</span>
                                <span class="label-icon" title="Subtotal sin envío">ℹ️</span>
                            </div>
                            <div class="detail-value">
                                <span id="amountValue" class="amount-display">120,00</span>
                                <span class="currency">€</span>
                            </div>
                        </div>

                        <div class="detail-row shipping-row">
                            <div class="detail-label">
                                <span class="label-text">Envío</span>
                                <span class="label-icon" title="Costo de envío">📦</span>
                            </div>
                            <div class="detail-value">
                                <span id="shippingValue" class="shipping-display">5,00</span>
                                <span class="currency">€</span>
                                <span id="shippingBadge" class="shipping-badge"></span>
                            </div>
                        </div>

                        <!-- Divisor antes del total -->
                        <hr class="divider-subtle" role="presentation">

                        <div class="detail-row total-row">
                            <div class="detail-label">
                                <span class="label-text total-text">Total</span>
                            </div>
                            <div class="detail-value total-value">
                                <span id="totalValue" class="total-display">125,00</span>
                                <span class="currency total-currency">€</span>
                            </div>
                        </div>
                    </div>

                    <!-- Divisor -->
                    <hr class="divider" role="presentation">

                    <!-- Sección de Mensaje Personalizado -->
                    <div id="messageSection" class="message-section">
                        <div class="message-box" id="messageBox">
                            <span class="message-icon" id="messageIcon">✓</span>
                            <p id="messageText" class="message-text">
                                Gracias por tu compra responsable
                            </p>
                        </div>
                    </div>

                    <!-- Sección de Beneficios (condicional) -->
                    <div id="benefitsSection" class="benefits-section hidden">
                        <div class="benefits-header">
                            <span class="benefits-icon">🎁</span>
                            <h3 class="benefits-title">Cliente VIP</h3>
                        </div>
                        <ul class="benefits-list">
                            <li class="benefit-item">
                                <span class="benefit-icon">✓</span>
                                Envío gratis
                            </li>
                            <li class="benefit-item">
                                <span class="benefit-icon">✓</span>
                                Regalo ecológico incluido
                            </li>
                            <li class="benefit-item">
                                <span class="benefit-icon">✓</span>
                                Prioridad en entrega
                            </li>
                        </ul>
                    </div>

                    <!-- Sección de Progreso (hacia envío gratis) -->
                    <div id="progressSection" class="progress-section">
                        <div class="progress-text">
                            <span id="progressLabel" class="progress-label"></span>
                        </div>
                        <div class="progress-bar-wrapper">
                            <div class="progress-bar">
                                <div id="progressFill" class="progress-fill" style="width: 75%"></div>
                            </div>
                            <span class="progress-milestone">100€</span>
                        </div>
                    </div>

                    <!-- Divisor -->
                    <hr class="divider" role="presentation">

                    <!-- Sección de Información Adicional -->
                    <div class="info-section">
                        <p class="info-text micro-copy">
                            ✓ Todos nuestros productos son 100% sostenibles
                        </p>
                        <p class="info-text micro-copy">
                            ✓ Empaques biodegradables y reciclables
                        </p>
                    </div>

                    <!-- Sección de Botones -->
                    <div class="button-section">
                        <button id="calculateBtn" class="btn btn-primary" aria-label="Calcular total del carrito">
                            <span class="btn-text">Calcular</span>
                            <span class="btn-loading hidden" aria-hidden="true">⏳</span>
                        </button>
                        <button id="checkoutBtn" class="btn btn-secondary" aria-label="Proceder al pago">
                            <span class="btn-icon">→</span>
                            Proceder al Pago
                        </button>
                    </div>

                    <!-- Sección de Respuesta/Confirmación -->
                    <div id="confirmationSection" class="confirmation-section hidden" role="alert" aria-live="assertive">
                        <div class="confirmation-message">
                            <span class="confirmation-icon">✓</span>
                            <p id="confirmationText"></p>
                        </div>
                    </div>

                </section>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <p class="footer-text">
                © 2026 Eco-Friendly Shop | Hecho con ❤️ para un planeta más sostenible
            </p>
            <div class="footer-links">
                <a href="#" class="footer-link">Política de Privacidad</a>
                <a href="#" class="footer-link">Términos de Servicio</a>
                <a href="#" class="footer-link">Contacto</a>
            </div>
        </footer>
    </div>

    <!-- Script -->
    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 SECCIÓN 6: ESTILOS CSS DETALLADOS

### 6.1 CSS Variables y Reset Global

```css
:root {
    /* Colores */
    --color-off-white: #F7F7F7;
    --color-pure-white: #FFFFFF;
    --color-dark-charcoal: #212121;
    --color-earthy-green: #2D5A27;
    --color-light-grey: #EDEDED;
    --color-grey-medium: #999999;
    --color-grey-light: #FAFAFA;
    --color-dark-green-hover: #1d3817;
    --color-warning: #D4A574;
    --color-error: #C1666B;
    --color-success: #2D5A27;

    /* Tipografía */
    --font-family-base: 'Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', system-ui, sans-serif;
    --font-family-mono: 'IBM Plex Mono', 'Monaco', 'Courier New', monospace;

    /* Tamaños */
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 24px;
    --font-size-2xl: 28px;
    --font-size-3xl: 32px;

    /* Espaciado */
    --space-xs: 8px;
    --space-sm: 12px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;

    /* Sombras */
    --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
    --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.08);
    --shadow-card: 0 10px 25px rgba(0, 0, 0, 0.05);
    --shadow-elevated: 0 20px 40px rgba(0, 0, 0, 0.12);

    /* Transiciones */
    --transition-fast: 0.15s ease-in-out;
    --transition-normal: 0.3s ease-in-out;
    --transition-slow: 0.5s ease-in-out;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 12px;
    --radius-full: 9999px;

    /* Z-Index */
    --z-base: 1;
    --z-elevated: 10;
    --z-modal: 100;
    --z-tooltip: 1000;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
    :root {
        --color-off-white: #1a1a1a;
        --color-pure-white: #2a2a2a;
        --color-dark-charcoal: #f0f0f0;
        --color-grey-light: #3a3a3a;
        --color-light-grey: #444444;
        --color-grey-medium: #888888;
    }
}

/* CSS Reset */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: var(--font-family-base);
    background-color: var(--color-off-white);
    color: var(--color-dark-charcoal);
    line-height: var(--line-height-normal);
    transition: background-color var(--transition-normal), color var(--transition-normal);
}
```

### 6.2 Layout Principal

```css
.root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
}

.header {
    background-color: var(--color-pure-white);
    border-bottom: 1px solid var(--color-light-grey);
    padding: var(--space-md) 0;
    position: sticky;
    top: 0;
    z-index: var(--z-elevated);
    box-shadow: var(--shadow-subtle);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.logo-icon {
    width: 32px;
    height: 32px;
    fill: var(--color-earthy-green);
}

.logo-text {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-dark-charcoal);
}

.theme-toggle {
    background: none;
    border: none;
    font-size: var(--font-size-xl);
    cursor: pointer;
    padding: var(--space-xs);
    border-radius: var(--radius-full);
    transition: background-color var(--transition-fast);
}

.theme-toggle:hover {
    background-color: var(--color-grey-light);
}

.main-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-lg);
    width: 100%;
}

.card-wrapper {
    width: 100%;
    max-width: 500px;
}

.checkout-card {
    background-color: var(--color-pure-white);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    box-shadow: var(--shadow-card);
    animation: slideIn var(--transition-normal) ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.footer {
    background-color: var(--color-pure-white);
    border-top: 1px solid var(--color-light-grey);
    padding: var(--space-lg) var(--space-md);
    text-align: center;
}

.footer-text {
    font-size: var(--font-size-sm);
    color: var(--color-grey-medium);
    margin-bottom: var(--space-md);
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);
    flex-wrap: wrap;
}

.footer-link {
    font-size: var(--font-size-sm);
    color: var(--color-earthy-green);
    text-decoration: none;
    transition: color var(--transition-fast);
}

.footer-link:hover {
    color: var(--color-dark-green-hover);
    text-decoration: underline;
}
```

### 6.3 Sección de Input

```css
.input-section {
    margin-bottom: var(--space-xl);
}

.input-label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-dark-charcoal);
    margin-bottom: var(--space-md);
    letter-spacing: 0.3px;
}

.currency-symbol {
    font-size: var(--font-size-xs);
    color: var(--color-grey-medium);
    font-weight: 400;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.cart-input {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    padding-right: 40px;
    font-size: var(--font-size-base);
    font-family: var(--font-family-mono);
    border: 2px solid var(--color-light-grey);
    border-radius: var(--radius-md);
    background-color: var(--color-grey-light);
    color: var(--color-dark-charcoal);
    transition: all var(--transition-normal);
    outline: none;
}

.cart-input:focus {
    border-color: var(--color-earthy-green);
    background-color: var(--color-pure-white);
    box-shadow: 0 0 0 3px rgba(45, 90, 39, 0.1);
}

.cart-input:invalid {
    border-color: var(--color-error);
}

.cart-input::placeholder {
    color: var(--color-grey-medium);
}

.input-suffix {
    position: absolute;
    right: var(--space-lg);
    font-weight: 600;
    color: var(--color-grey-medium);
    pointer-events: none;
}

.input-helper {
    display: block;
    font-size: var(--font-size-xs);
    color: var(--color-grey-medium);
    margin-top: var(--space-xs);
}

.input-error {
    display: none;
    color: var(--color-error);
    font-size: var(--font-size-sm);
    margin-top: var(--space-xs);
    font-weight: 500;
}

.input-error.show {
    display: block;
    animation: shake 0.3s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

.preset-section {
    margin-bottom: var(--space-lg);
}

.preset-label {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--color-dark-charcoal);
    margin-bottom: var(--space-md);
}

.preset-buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-sm);
}

.preset-btn {
    padding: var(--space-sm) var(--space-xs);
    font-size: var(--font-size-sm);
    font-weight: 600;
    background-color: var(--color-grey-light);
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    color: var(--color-dark-charcoal);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.preset-btn:hover {
    border-color: var(--color-earthy-green);
    background-color: var(--color-pure-white);
}

.preset-btn.active {
    background-color: var(--color-earthy-green);
    color: var(--color-pure-white);
    border-color: var(--color-earthy-green);
}

@media (max-width: 480px) {
    .preset-buttons {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### 6.4 Sección de Detalles del Carrito

```css
.divider {
    border: none;
    border-top: 1px solid var(--color-light-grey);
    margin: var(--space-lg) 0;
}

.divider-subtle {
    border: none;
    border-top: 1px solid var(--color-light-grey);
    margin: var(--space-md) 0;
}

.cart-details {
    margin-bottom: var(--space-lg);
}

.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    line-height: var(--line-height-relaxed);
}

.detail-label {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-dark-charcoal);
}

.label-text {
    text-transform: capitalize;
}

.label-icon {
    font-size: var(--font-size-xs);
    cursor: help;
    opacity: 0.6;
    transition: opacity var(--transition-fast);
}

.label-icon:hover {
    opacity: 1;
}

.detail-value {
    display: flex;
    align-items: baseline;
    gap: var(--space-xs);
    font-weight: 600;
    color: var(--color-dark-charcoal);
}

.amount-display,
.shipping-display,
.total-display {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-lg);
    font-weight: 700;
}

.currency {
    font-size: var(--font-size-base);
    color: var(--color-grey-medium);
}

.shipping-row {
    position: relative;
}

.shipping-badge {
    font-size: var(--font-size-xs);
    padding: 2px 8px;
    border-radius: var(--radius-full);
    background-color: var(--color-grey-light);
    margin-left: var(--space-xs);
    white-space: nowrap;
}

.shipping-badge.free {
    background-color: #E8F5E9;
    color: var(--color-earthy-green);
    font-weight: 600;
}

.shipping-badge.discount {
    background-color: #FFF3E0;
    color: var(--color-warning);
    font-weight: 600;
}

.total-row {
    padding-top: var(--space-md);
    padding-bottom: 0;
    border-top: 2px solid var(--color-light-grey);
}

.total-text {
    font-size: var(--font-size-lg);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.total-value {
    gap: var(--space-xs);
}

.total-display {
    font-size: var(--font-size-2xl);
    color: var(--color-earthy-green);
    animation: slideIn var(--transition-normal) ease-out;
}

.total-currency {
    font-size: var(--font-size-lg);
    color: var(--color-earthy-green);
}
```

### 6.5 Sección de Mensaje

```css
.message-section {
    margin-bottom: var(--space-lg);
    animation: fadeIn var(--transition-normal) ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.message-box {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md);
    background-color: var(--color-grey-light);
    border-left: 3px solid var(--color-earthy-green);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
}

.message-box.vip {
    background-color: #FFF3E0;
    border-left-color: var(--color-warning);
}

.message-icon {
    font-size: var(--font-size-lg);
    flex-shrink: 0;
    animation: popIn var(--transition-normal) ease-out;
}

@keyframes popIn {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

.message-text {
    font-size: var(--font-size-sm);
    color: var(--color-dark-charcoal);
    line-height: var(--line-height-relaxed);
    font-weight: 500;
}

.message-box.vip .message-text {
    color: var(--color-dark-charcoal);
}

.benefits-section {
    background-color: #FFF3E0;
    border-radius: var(--radius-md);
    padding: var(--space-md);
    margin-bottom: var(--space-lg);
    border: 1px solid #FFCC80;
    animation: slideIn var(--transition-normal) ease-out;
}

.benefits-section.hidden {
    display: none;
}

.benefits-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
}

.benefits-icon {
    font-size: var(--font-size-xl);
}

.benefits-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-warning);
    margin: 0;
}

.benefits-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: var(--font-size-sm);
    color: var(--color-dark-charcoal);
}

.benefit-icon {
    color: var(--color-earthy-green);
    font-weight: 700;
    flex-shrink: 0;
}
```

### 6.6 Sección de Progreso

```css
.progress-section {
    margin-bottom: var(--space-lg);
    padding: var(--space-md);
    background-color: var(--color-grey-light);
    border-radius: var(--radius-md);
}

.progress-section.hidden {
    display: none;
}

.progress-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-sm);
}

.progress-label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--color-dark-charcoal);
}

.progress-bar-wrapper {
    position: relative;
    margin-top: var(--space-md);
}

.progress-bar {
    width: 100%;
    height: 6px;
    background-color: var(--color-light-grey);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--color-earthy-green) 0%, var(--color-dark-green-hover) 100%);
    border-radius: var(--radius-full);
    transition: width var(--transition-normal) ease-out;
}

.progress-milestone {
    position: absolute;
    right: 0;
    bottom: -20px;
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--color-earthy-green);
}
```

### 6.7 Sección de Botones

```css
.button-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
}

.btn {
    padding: 14px 24px;
    font-size: var(--font-size-base);
    font-weight: 700;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: all var(--transition-fast);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width var(--transition-normal), height var(--transition-normal);
}

.btn:active::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background-color: var(--color-dark-charcoal);
    color: var(--color-pure-white);
}

.btn-primary:hover {
    background-color: var(--color-dark-green-hover);
    box-shadow: 0 4px 12px rgba(45, 90, 39, 0.3);
}

.btn-primary:active {
    transform: scale(0.98);
}

.btn-secondary {
    background-color: var(--color-grey-light);
    color: var(--color-dark-charcoal);
    border: 2px solid var(--color-light-grey);
}

.btn-secondary:hover {
    background-color: var(--color-light-grey);
    border-color: var(--color-earthy-green);
    color: var(--color-earthy-green);
}

.btn-icon {
    font-size: var(--font-size-lg);
    transition: transform var(--transition-fast);
}

.btn:hover .btn-icon {
    transform: translateX(3px);
}

.btn-loading {
    animation: spin 1s linear infinite;
}

.btn-loading.hidden {
    display: none;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

@media (max-width: 480px) {
    .button-section {
        grid-template-columns: 1fr;
    }
}
```

### 6.8 Sección de Confirmación

```css
.confirmation-section {
    background-color: #E8F5E9;
    border: 2px solid var(--color-earthy-green);
    border-radius: var(--radius-md);
    padding: var(--space-lg);
    margin-bottom: var(--space-lg);
    animation: slideIn var(--transition-normal) ease-out;
}

.confirmation-section.hidden {
    display: none;
}

.confirmation-message {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
}

.confirmation-icon {
    font-size: var(--font-size-2xl);
    flex-shrink: 0;
    animation: popIn var(--transition-normal) ease-out;
}

.confirmation-section p {
    font-size: var(--font-size-base);
    color: var(--color-dark-charcoal);
    font-weight: 500;
    margin: 0;
    line-height: var(--line-height-relaxed);
}

.info-section {
    margin-bottom: var(--space-lg);
    padding: var(--space-md);
    background-color: var(--color-grey-light);
    border-radius: var(--radius-md);
}

.info-text {
    font-size: var(--font-size-sm);
    color: var(--color-grey-medium);
    line-height: var(--line-height-relaxed);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.info-text:not(:last-child) {
    margin-bottom: var(--space-sm);
}

.micro-copy {
    font-weight: 400;
    color: var(--color-grey-medium);
}
```

### 6.9 Responsive Design

```css
@media (max-width: 768px) {
    .checkout-card {
        padding: var(--space-xl);
    }

    .logo-section {
        flex: 1;
    }

    .logo-text {
        font-size: var(--font-size-base);
    }
}

@media (max-width: 480px) {
    .root {
        min-height: 100vh;
    }

    .header {
        padding: var(--space-sm) 0;
    }

    .main-container {
        padding: var(--space-md);
    }

    .checkout-card {
        padding: var(--space-lg);
        border-radius: var(--radius-md);
    }

    .button-section {
        grid-template-columns: 1fr;
    }

    h1 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--space-lg);
    }

    .detail-row {
        padding: var(--space-sm) 0;
    }

    .amount-display,
    .shipping-display,
    .total-display {
        font-size: var(--font-size-lg);
    }

    .total-display {
        font-size: var(--font-size-xl);
    }

    .message-box {
        gap: var(--space-sm);
        padding: var(--space-sm);
    }

    .message-icon {
        font-size: var(--font-size-lg);
    }

    .message-text {
        font-size: var(--font-size-xs);
    }
}

@media (max-width: 360px) {
    .checkout-card {
        padding: var(--space-md);
    }

    .header-content {
        padding: 0 var(--space-sm);
    }

    .main-container {
        padding: var(--space-sm);
    }

    h1 {
        font-size: var(--font-size-base);
        margin-bottom: var(--space-md);
    }
}

/* Preferencias de movimiento */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
    body {
        background-color: var(--color-off-white);
        color: var(--color-dark-charcoal);
    }
}
```

---

## 💻 SECCIÓN 7: LÓGICA JAVASCRIPT DETALLADA

### 7.1 Variables Globales y Estado

```javascript
// Estado de la aplicación
const appState = {
    cartAmount: 120,
    shippingCost: 0,
    totalAmount: 0,
    isVIP: false,
    isDarkMode: false,
    isCalculating: false,
    lastCalculation: null
};

// Elementos del DOM
const elements = {
    cartInput: document.getElementById('cartInput'),
    amountValue: document.getElementById('amountValue'),
    shippingValue: document.getElementById('shippingValue'),
    shippingBadge: document.getElementById('shippingBadge'),
    totalValue: document.getElementById('totalValue'),
    messageBox: document.getElementById('messageBox'),
    messageText: document.getElementById('messageText'),
    messageIcon: document.getElementById('messageIcon'),
    calculateBtn: document.getElementById('calculateBtn'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    benefitsSection: document.getElementById('benefitsSection'),
    progressSection: document.getElementById('progressSection'),
    progressFill: document.getElementById('progressFill'),
    progressLabel: document.getElementById('progressLabel'),
    confirmationSection: document.getElementById('confirmationSection'),
    confirmationText: document.getElementById('confirmationText'),
    inputError: document.getElementById('inputError'),
    themeToggle: document.getElementById('themeToggle'),
    presetButtons: document.querySelectorAll('.preset-btn')
};

// Configuración
const CONFIG = {
    MIN_AMOUNT: 0,
    MAX_AMOUNT: 500,
    VIP_THRESHOLD: 200,
    FREE_SHIPPING_THRESHOLD: 100,
    STANDARD_SHIPPING_THRESHOLD: 50,
    FREE_SHIPPING_COST: 0,
    STANDARD_SHIPPING_COST: 5,
    DEFAULT_SHIPPING_COST: 10
};
```

### 7.2 Funciones Principales de Lógica

```javascript
/**
 * Calcula el costo de envío
 */
function calcularEnvio(importe) {
    if (typeof importe !== 'number' || importe < 0) {
        throw new Error('Importe inválido');
    }

    if (importe >= CONFIG.FREE_SHIPPING_THRESHOLD) {
        return CONFIG.FREE_SHIPPING_COST;
    } else if (importe >= CONFIG.STANDARD_SHIPPING_THRESHOLD) {
        return CONFIG.STANDARD_SHIPPING_COST;
    } else {
        return CONFIG.DEFAULT_SHIPPING_COST;
    }
}

/**
 * Obtiene el mensaje personalizado
 */
function obtenerMensaje(importe) {
    if (typeof importe !== 'number' || importe < 0) {
        throw new Error('Importe inválido');
    }

    return importe > CONFIG.VIP_THRESHOLD
        ? "¡Eres un cliente VIP! Tienes un regalo ecológico incluido"
        : "Gracias por tu compra responsable";
}

/**
 * Formatea el precio
 */
function formatearPrecio(valor) {
    if (typeof valor !== 'number' || valor < 0) {
        throw new Error('Valor inválido');
    }

    const formateado = valor.toFixed(2).replace('.', ',');
    return `El total a pagar es ${formateado} €`;
}

/**
 * Calcula el total y retorna objeto con desglose
 */
function calcularTotal(importe) {
    if (importe < CONFIG.MIN_AMOUNT || importe > CONFIG.MAX_AMOUNT) {
        throw new Error(`Importe debe estar entre ${CONFIG.MIN_AMOUNT}€ y ${CONFIG.MAX_AMOUNT}€`);
    }

    const envio = calcularEnvio(importe);
    const total = importe + envio;
    const isVIP = importe > CONFIG.VIP_THRESHOLD;
    const proximoHito = importe >= CONFIG.FREE_SHIPPING_THRESHOLD 
        ? null 
        : CONFIG.FREE_SHIPPING_THRESHOLD - importe;

    return {
        importe,
        envio,
        total,
        isVIP,
        mensaje: obtenerMensaje(importe),
        proximoHito,
        porcentajeHito: (importe / CONFIG.FREE_SHIPPING_THRESHOLD) * 100
    };
}

/**
 * Valida la entrada del usuario
 */
function validarEntrada(valor) {
    const numValue = parseFloat(valor);

    if (isNaN(numValue)) {
        return {
            valido: false,
            error: 'Por favor ingresa un número válido'
        };
    }

    if (numValue < CONFIG.MIN_AMOUNT) {
        return {
            valido: false,
            error: `Mínimo requerido: ${CONFIG.MIN_AMOUNT}€`
        };
    }

    if (numValue > CONFIG.MAX_AMOUNT) {
        return {
            valido: false,
            error: `Máximo permitido: ${CONFIG.MAX_AMOUNT}€`
        };
    }

    return {
        valido: true,
        valor: numValue
    };
}

/**
 * Formatea un número para mostrar
 */
function formatearNumero(numero) {
    return numero.toFixed(2).replace('.', ',');
}
```

### 7.3 Funciones de Actualización de UI

```javascript
/**
 * Actualiza la interfaz con los nuevos valores
 */
function actualizarUI(datos) {
    appState.cartAmount = datos.importe;
    appState.shippingCost = datos.envio;
    appState.totalAmount = datos.total;
    appState.isVIP = datos.isVIP;
    appState.lastCalculation = new Date();

    // Actualizar valores
    elements.amountValue.textContent = formatearNumero(datos.importe);
    elements.shippingValue.textContent = formatearNumero(datos.envio);
    elements.totalValue.textContent = formatearNumero(datos.total);

    // Actualizar badge de envío
    actualizarShippingBadge(datos);

    // Actualizar mensaje
    actualizarMensaje(datos);

    // Actualizar sección de beneficios VIP
    actualizarBeneficios(datos.isVIP);

    // Actualizar progreso
    actualizarProgreso(datos.importe, datos.proximoHito);

    // Log para debugging
    console.log('UI actualizada:', datos);
}

/**
 * Actualiza el badge del envío
 */
function actualizarShippingBadge(datos) {
    const badge = elements.shippingBadge;
    badge.classList.remove('free', 'discount');

    if (datos.envio === 0) {
        badge.textContent = '¡GRATIS!';
        badge.classList.add('free');
    } else if (datos.envio < CONFIG.DEFAULT_SHIPPING_COST) {
        badge.textContent = 'DESCUENTO';
        badge.classList.add('discount');
    } else {
        badge.textContent = '';
    }
}

/**
 * Actualiza el mensaje personalizado
 */
function actualizarMensaje(datos) {
    elements.messageText.textContent = datos.mensaje;
    elements.messageBox.classList.toggle('vip', datos.isVIP);

    // Cambiar icono
    if (datos.isVIP) {
        elements.messageIcon.textContent = '🎁';
    } else {
        elements.messageIcon.textContent = '✓';
    }
}

/**
 * Muestra/oculta la sección de beneficios VIP
 */
function actualizarBeneficios(esVIP) {
    if (esVIP) {
        elements.benefitsSection.classList.remove('hidden');
    } else {
        elements.benefitsSection.classList.add('hidden');
    }
}

/**
 * Actualiza la barra de progreso
 */
function actualizarProgreso(importe, proximoHito) {
    const porcentaje = (importe / CONFIG.FREE_SHIPPING_THRESHOLD) * 100;

    if (importe >= CONFIG.FREE_SHIPPING_THRESHOLD) {
        elements.progressSection.classList.add('hidden');
    } else {
        elements.progressSection.classList.remove('hidden');
        elements.progressFill.style.width = Math.min(porcentaje, 100) + '%';
        elements.progressLabel.textContent = 
            `${formatearNumero(importe)}€ de ${CONFIG.FREE_SHIPPING_THRESHOLD}€ - ` +
            `Faltan ${formatearNumero(proximoHito)}€ para envío gratis`;
    }
}

/**
 * Muestra confirmación de compra
 */
function mostrarConfirmacion(datos) {
    elements.confirmationSection.classList.remove('hidden');
    elements.confirmationText.textContent = 
        `¡Pedido confirmado! Total: ${formatearNumero(datos.total)}€. ` +
        `Recibirás un email de confirmación en breve.`;

    // Ocultar después de 5 segundos
    setTimeout(() => {
        elements.confirmationSection.classList.add('hidden');
    }, 5000);
}

/**
 * Muestra error en la entrada
 */
function mostrarError(mensaje) {
    elements.inputError.textContent = mensaje;
    elements.inputError.classList.add('show');
    elements.cartInput.focus();

    setTimeout(() => {
        elements.inputError.classList.remove('show');
    }, 4000);
}

/**
 * Limpia los errores
 */
function limpiarError() {
    elements.inputError.textContent = '';
    elements.inputError.classList.remove('show');
}
```

### 7.4 Event Listeners y Handlers

```javascript
/**
 * Handler del botón Calcular
 */
async function handleCalcular() {
    try {
        limpiarError();
        
        const validacion = validarEntrada(elements.cartInput.value);
        
        if (!validacion.valido) {
            mostrarError(validacion.error);
            return;
        }

        // Simular cálculo
        elements.calculateBtn.disabled = true;
        const btnLoading = elements.calculateBtn.querySelector('.btn-loading');
        btnLoading.classList.remove('hidden');

        await new Promise(resolve => setTimeout(resolve, 300));

        const datos = calcularTotal(validacion.valor);
        actualizarUI(datos);

        btnLoading.classList.add('hidden');
        elements.calculateBtn.disabled = false;

    } catch (error) {
        console.error('Error:', error);
        mostrarError('Ocurrió un error al calcular. Intenta de nuevo.');
        elements.calculateBtn.disabled = false;
    }
}

/**
 * Handler del botón Proceder al Pago
 */
function handleCheckout() {
    try {
        if (appState.cartAmount <= 0) {
            mostrarError('El carrito está vacío');
            return;
        }

        const datos = {
            importe: appState.cartAmount,
            envio: appState.shippingCost,
            total: appState.totalAmount,
            timestamp: new Date().toISOString()
        };

        console.log('Procesando pago:', datos);
        mostrarConfirmacion(datos);

        // Aquí iría la integración con el servidor
        // enviarAlServidor(datos);

    } catch (error) {
        console.error('Error al procesar pago:', error);
        mostrarError('Error al procesar el pago. Intenta de nuevo.');
    }
}

/**
 * Handler del input del carrito
 */
function handleCartInputChange(e) {
    limpiarError();
    // Actualizar estado mientras escribe (opcional)
}

/**
 * Handler de los botones preestablecidos
 */
function handlePresetClick(e) {
    const valor = e.target.dataset.value;
    elements.cartInput.value = valor;
    
    // Actualizar estado visual
    elements.presetButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    // Calcular automáticamente
    setTimeout(handleCalcular, 100);
}

/**
 * Handler del toggle de tema
 */
function handleThemeToggle() {
    appState.isDarkMode = !appState.isDarkMode;
    document.documentElement.setAttribute(
        'data-theme',
        appState.isDarkMode ? 'dark' : 'light'
    );

    // Guardar preferencia
    localStorage.setItem('theme', appState.isDarkMode ? 'dark' : 'light');

    // Actualizar icono
    const icon = elements.themeToggle.querySelector('.theme-icon');
    icon.textContent = appState.isDarkMode ? '☀️' : '🌙';
}
```

### 7.5 Inicialización

```javascript
/**
 * Inicializa la aplicación
 */
function inicializarApp() {
    console.log('Inicializando aplicación...');

    try {
        // Cargar tema guardado
        const temaGuardado = localStorage.getItem('theme');
        if (temaGuardado === 'dark') {
            appState.isDarkMode = true;
            document.documentElement.setAttribute('data-theme', 'dark');
            const icon = elements.themeToggle.querySelector('.theme-icon');
            icon.textContent = '☀️';
        }

        // Registrar event listeners
        elements.calculateBtn.addEventListener('click', handleCalcular);
        elements.checkoutBtn.addEventListener('click', handleCheckout);
        elements.cartInput.addEventListener('input', handleCartInputChange);
        elements.cartInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleCalcular();
        });
        elements.themeToggle.addEventListener('click', handleThemeToggle);

        // Preset buttons
        elements.presetButtons.forEach(btn => {
            btn.addEventListener('click', handlePresetClick);
        });

        // Cálculo inicial
        const datosIniciales = calcularTotal(appState.cartAmount);
        actualizarUI(datosIniciales);

        console.log('Aplicación inicializada correctamente');

    } catch (error) {
        console.error('Error al inicializar:', error);
    }
}

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
    inicializarApp();
}
```

---

## 🎨 SECCIÓN 8: ESPECIFICACIONES DE SVG

### 8.1 SVG: Icono de Carrito

```svg
<svg id="icon-cart" viewBox="0 0 24 24" width="24" height="24">
    <path d="M7 4V2M17 4V2M2 6H22L20 17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17L2 6Z" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="1.5" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
    <circle cx="8" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="22" r="1.5" fill="currentColor"/>
</svg>
```

### 8.2 SVG: Icono de Hoja/Eco

```svg
<svg id="icon-leaf" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" 
          fill="currentColor"/>
</svg>
```

### 8.3 SVG: Icono de Regalo

```svg
<svg id="icon-gift" viewBox="0 0 24 24" width="24" height="24">
    <path d="M20 8h-3V4c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-8-2h4v4h-4V6zM4 10h5v12H4v-12zm7 0h2v12h-2v-12zm3 0h5v12h-5v-12z" 
          fill="currentColor"/>
</svg>
```

### 8.4 SVG: Icono de Caja/Envío

```svg
<svg id="icon-box" viewBox="0 0 24 24" width="24" height="24">
    <path d="M21 7L12 2 3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7zm-9 10.5h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" 
          fill="currentColor"/>
</svg>
```

### 8.5 SVG: Patrón de Fondo

```svg
<svg id="pattern-eco" viewBox="0 0 100 100" width="100" height="100">
    <defs>
        <pattern id="eco-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(45,90,39,0.1)"/>
            <circle cx="50" cy="50" r="1" fill="rgba(45,90,39,0.1)"/>
            <circle cx="80" cy="20" r="1" fill="rgba(45,90,39,0.1)"/>
            <circle cx="80" cy="80" r="1" fill="rgba(45,90,39,0.1)"/>
            <circle cx="20" cy="80" r="1" fill="rgba(45,90,39,0.1)"/>
        </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#eco-pattern)"/>
</svg>
```

---

## 📝 SECCIÓN 9: CASOS DE PRUEBA

### 9.1 Tabla de Pruebas

```
| Caso | Entrada | Envío Esperado | Mensaje Esperado | Total | Estado |
|------|---------|----------------|------------------|-------|--------|
| 1    | 0€      | 10€            | Gracias...       | 10€   | -      |
| 2    | 30€     | 10€            | Gracias...       | 40€   | -      |
| 3    | 50€     | 5€             | Gracias...       | 55€   | ✓      |
| 4    | 75€     | 5€             | Gracias...       | 80€   | ✓      |
| 5    | 100€    | 0€             | Gracias...       | 100€  | ✓      |
| 6    | 150€    | 0€             | Gracias...       | 150€  | ✓      |
| 7    | 200€    | 0€             | Gracias...       | 200€  | -      |
| 8    | 201€    | 0€             | ¡VIP! Regalo     | 201€  | 🎁     |
| 9    | 250€    | 0€             | ¡VIP! Regalo     | 250€  | 🎁     |
| 10   | 500€    | 0€             | ¡VIP! Regalo     | 500€  | 🎁     |
```

### 9.2 Pruebas de Validación

```
Entrada Inválida:
- "" (vacío)
- "abc" (texto)
- "-50" (negativo)
- "600" (excede máximo)
- Caracteres especiales

Todos deben mostrar error apropiado
```

---

## 🚀 SECCIÓN 10: REQUISITOS FINALES

### 10.1 Entrega Esperada

- [x] HTML5 semántico completo
- [x] CSS3 moderno con variables y animaciones
- [x] JavaScript ES6+ con lógica completa
- [x] SVGs incrustados
- [x] Responsive design (320px - 1920px)
- [x] Modo oscuro funcional
- [x] Accesibilidad WCAG 2.1 AA
- [x] Performance optimizado
- [x] Código comentado
- [x] Documentación README

### 10.2 Características Adicionales Sugeridas

- [ ] Integración con API de pagos (Stripe, PayPal)
- [ ] Persistencia de datos (localStorage/sessionStorage)
- [ ] Analytics y tracking
- [ ] Validación de email antes de checkout
- [ ] Código de descuento
- [ ] Historial de compras
- [ ] Notificaciones push
- [ ] PWA (Progressive Web App)
- [ ] Multi-idioma (i18n)
- [ ] Tests unitarios e integración

### 10.3 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1
- Interaction to Next Paint: < 100ms
- Time to Interactive: < 3.5s

### 10.4 SEO

- Meta tags completados
- Open Graph configurado
- Schema.org JSON-LD
- Sitemap XML
- robots.txt

---

**FIN DEL PROMPT DETALLADO**

Este prompt proporciona:
✅ Especificaciones técnicas completas
✅ Paleta de colores exacta con valores hex
✅ Tipografía con tamaños específicos
✅ Espaciado y dimensiones definidas
✅ HTML semántico detallado
✅ CSS moderno y escalable
✅ JavaScript funcional comentado
✅ SVGs listos para usar
✅ Casos de prueba
✅ Requisitos de accesibilidad y performance
