// Google Ads conversion tracking for WhatsApp clicks
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17836033587',
      event_callback: () => {},
    });
  }
};
