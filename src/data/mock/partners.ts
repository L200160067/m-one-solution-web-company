import type { Partner } from '@/types/api';
import { PH } from './utils';

export const mockPartners: Partner[] = [
  { id: 1, name: 'Microsoft', logo_url: PH(160, 80, 'Microsoft') },
  { id: 2, name: 'Google Cloud', logo_url: PH(160, 80, 'Google+Cloud') },
  { id: 3, name: 'Amazon AWS', logo_url: PH(160, 80, 'AWS') },
  { id: 4, name: 'Midtrans', logo_url: PH(160, 80, 'Midtrans') },
  { id: 5, name: 'Cloudflare', logo_url: PH(160, 80, 'Cloudflare') },
  { id: 6, name: 'Vercel', logo_url: PH(160, 80, 'Vercel') },
];
