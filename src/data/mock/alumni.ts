import type { AlumniGroup } from '@/types/api';

const CDN_BASE_URL = 'https://raw.githubusercontent.com/L200160067/mone-assets/main/images/alumni';
const SCHOOL_NAME = 'SMK Muhammadiyah 1 Sukoharjo';

export const mockAlumni: AlumniGroup[] = [
  {
    batch_period: '2025',
    members: [
      { id: 1, name: 'Bastian', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Bastian.webp` },
      { id: 2, name: 'Boneta P', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Boneta-P.webp` },
      { id: 3, name: 'Daffa F', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Daffa-F.webp` },
      { id: 4, name: 'Denisa R', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Denisa-R.webp` },
      { id: 5, name: 'Faza', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Faza.webp` },
      { id: 6, name: 'Haikal', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Haikal.webp` },
      { id: 7, name: 'Iyan', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Iyan.webp` },
      { id: 8, name: 'Zaydan', school: SCHOOL_NAME, batch_period: '2025', photo_url: `${CDN_BASE_URL}/2025/Zaydan.webp` },
    ],
  },
  {
    batch_period: '2024',
    members: [
      { id: 9, name: 'Abby', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Abby.webp` },
      { id: 10, name: 'Afif', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Afif.webp` },
      { id: 11, name: 'Arkan', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Arkan.webp` },
      { id: 12, name: 'Daffa D', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Daffa-D.webp` },
      { id: 13, name: 'Dzakwan', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Dzakwan.webp` },
      { id: 14, name: 'Habib', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Habib.webp` },
      { id: 15, name: 'Hanif', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Hanif.webp` },
      { id: 16, name: 'Shabri', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Shabri.webp` },
      { id: 17, name: 'Yudha', school: SCHOOL_NAME, batch_period: '2024', photo_url: `${CDN_BASE_URL}/2024/Yudha.webp` },
    ],
  },
];
