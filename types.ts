
export interface CartBreakdown {
  importe: number;
  envio: number;
  total: number;
  mensaje: string;
  esVIP: boolean;
  ahorroEnvio: number;
  proximoHito: number | null;
  porcentajeHito: number;
}

export interface AppState {
  cartAmount: number;
  isDarkMode: boolean;
  isCalculating: boolean;
  showConfirmation: boolean;
  breakdown: CartBreakdown;
}

export enum ShippingThreshold {
  FREE = 100,
  STANDARD = 50,
  VIP = 200
}

export enum ShippingCost {
  FREE = 0,
  REDUCED = 5,
  BASE = 10
}
