/**
 * ============================================================
 * lib/marketing.ts — Computed marketing URLs and helpers
 * ============================================================
 *
 * Central place for derived values so components only
 * reference typed config instead of building URLs inline.
 */

import { studentAgency } from '@/config/marketing';

export function waHref(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function studentAgencyRegisterHref(): string {
  return waHref(studentAgency.waNumber, studentAgency.waTexts.register);
}

export function studentAgencyEarlyBirdHref(): string {
  return waHref(studentAgency.waNumber, studentAgency.waTexts.earlyBird);
}
