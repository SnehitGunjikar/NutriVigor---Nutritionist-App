/**
 * NutriVigor config – WhatsApp, social links, assets.
 * Update WHATSAPP_NUMBER when available (e.g. 919876543210).
 */

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '+919226908284';

export function getWhatsAppUrl(message = '') {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}${encoded}`;
}

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/padmaja.channewadkar?igsh=MTR2d3V6YWh2aXlxdw==',
  facebook: 'https://www.facebook.com/share/1HEzs4LdiP/?mibextid=wwXIfr',
  linkedin: 'https://www.linkedin.com/in/padmajachannewadkar',
};

export const FOUNDER_IMAGE = '/images/founder.jpg';
