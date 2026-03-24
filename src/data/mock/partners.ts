import type { Partner } from '@/types/api';

const CDN_BASE_URL = 'https://raw.githubusercontent.com/L200160067/mone-assets/main/images/partners';

export const mockPartners: Partner[] = [
  { id: 1, name: 'MI Muhammadiyah Bendungan', logo_url: `${CDN_BASE_URL}/MI%20Muhammadiyah%20Bendungan.webp` },
  { id: 2, name: 'MI Muhammadiyah Karanglo', logo_url: `${CDN_BASE_URL}/MI%20Muhammadiyah%20Karanglo.webp` },
  { id: 3, name: 'MI Muhammadiyah Sukoharjo', logo_url: `${CDN_BASE_URL}/MI%20Muhammadiyah%20Sukoharjo.webp` },
  { id: 4, name: 'MI Muhammadiyah Toriyo', logo_url: `${CDN_BASE_URL}/MI%20Muhammadiyah%20Toriyo.webp` },
  { id: 5, name: 'Pengurus Daerah Muhammadiyah Sukoharjo', logo_url: `${CDN_BASE_URL}/Pengurus%20Daerah%20Muhammadiyah%20Sukoharjo.webp` },
  { id: 6, name: 'SD N Cabeyan 02 Bendosari Sukoharjo', logo_url: `${CDN_BASE_URL}/SD%20N%20Cabeyan%2002%20Bendosari%20Sukoharjo.webp` },
  { id: 7, name: 'SDII Nurul Musthofa Klaten', logo_url: `${CDN_BASE_URL}/SDII%20Nurul%20Musthofa%20Klaten.webp` },
];
