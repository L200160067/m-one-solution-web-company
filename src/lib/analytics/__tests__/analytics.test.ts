import { describe, it, expect, vi, beforeEach } from 'vitest';
import { track } from '@/lib/analytics';

describe('analytics track', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('logs to console when no analytics is available', () => {
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});
    track({ event: 'cta_click', label: 'contact_us' });
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('calls gtag when available', () => {
    const gtag = vi.fn();
    (window as any).gtag = gtag;
    track({ event: 'whatsapp_click' });
    expect(gtag).toHaveBeenCalledWith('event', 'whatsapp_click', expect.any(Object));
  });
});
