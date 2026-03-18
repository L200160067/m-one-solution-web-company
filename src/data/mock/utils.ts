// ─── Placeholder Image Base ────────────────────────────────────────────────────
// Gunakan gambar dari GitHub CDN publik atau placeholder.
// Contoh GitHub raw: https://raw.githubusercontent.com/L200160067/m-one-solution-web-company/main/public/...
export const PH = (w: number, h: number, label = '') =>
  `https://placehold.co/${w}x${h}/1a1a2e/ffffff?text=${encodeURIComponent(label || `${w}x${h}`)}`;
