
import { CartBreakdown, ShippingCost, ShippingThreshold } from '../types';

export const calcularEnvio = (importe: number): number => {
  if (importe >= ShippingThreshold.FREE) {
    return ShippingCost.FREE;
  } else if (importe >= ShippingThreshold.STANDARD) {
    return ShippingCost.REDUCED;
  } else {
    return ShippingCost.BASE;
  }
};

export const obtenerMensaje = (importe: number): string => {
  if (importe > ShippingThreshold.VIP) {
    return "¡Eres un cliente VIP! Tienes un regalo ecológico incluido";
  } else {
    return "Gracias por tu compra responsable";
  }
};

export const formatearNumero = (numero: number): string => {
  return numero.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const calcularTotal = (importe: number): CartBreakdown => {
  const envio = calcularEnvio(importe);
  const total = importe + envio;
  const esVIP = importe > ShippingThreshold.VIP;
  const mensaje = obtenerMensaje(importe);
  
  const proximoHito = importe >= ShippingThreshold.FREE ? null : ShippingThreshold.FREE - importe;
  const ahorroEnvio = importe >= ShippingThreshold.FREE ? 10 : (importe >= ShippingThreshold.STANDARD ? 5 : 0);
  const porcentajeHito = Math.min((importe / ShippingThreshold.FREE) * 100, 100);

  return {
    importe,
    envio,
    total,
    mensaje,
    esVIP,
    ahorroEnvio,
    proximoHito,
    porcentajeHito
  };
};
