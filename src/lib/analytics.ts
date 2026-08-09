"use client";

type TrackProps = {
  event: 'cta_click' | 'contact_form_open' | 'whatsapp_click' | 'service_view';
  label?: string;
};

export function track({ event, label }: TrackProps) {
  if (typeof window === 'undefined') return;

  const payload = {
    event,
    label,
    path: window.location.pathname,
    ts: new Date().toISOString(),
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, {
      event_category: 'engagement',
      event_label: label || window.location.pathname,
    });
    return;
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, payload);
    return;
  }

  console.debug('[analytics]', payload);
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}
