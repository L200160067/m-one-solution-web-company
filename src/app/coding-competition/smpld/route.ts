export const dynamic = "force-static";

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light">
<meta name="robots" content="noindex, nofollow">
<title>Leaderboard Finalis SMP – M-One Telkomsel Coding Competition 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,700;0,800;1,800&display=swap" rel="stylesheet">
<style>
:root{
  color-scheme:light;
  --blue:#2f66f2;
  --navy:#0b1233;
  --yellow:#ffd23f;
  --sky:#e6efff;
  --pale:#fff8d6;
  --muted:#52608f;
  box-sizing:border-box;
  padding-top:env(safe-area-inset-top,0px);
  padding-bottom:env(safe-area-inset-bottom,0px);
}
*,*::before,*::after{box-sizing:border-box}
html{scroll-padding-top:env(safe-area-inset-top,0px);scroll-behavior:smooth}
body{
  margin:0;
  font-family:"Plus Jakarta Sans","Segoe UI",system-ui,sans-serif;
  background:#fff;
  color:var(--navy);
  line-height:1.5;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit}

.wrap{max-width:1040px;margin:0 auto;padding:0 22px}
@media(max-width:760px){
  .wrap{padding:0 16px}
}

/* Nav */
.nav{background:var(--navy);color:#fff}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;padding:14px 22px;gap:12px;flex-wrap:wrap}
.brand{font-weight:800;font-size:18px}
.brand small{display:block;font-size:9px;letter-spacing:.25em;font-weight:500;color:#9db3ff}
.nav a.cta{background:var(--blue);color:#fff;text-decoration:none;font-weight:700;font-size:13px;padding:9px 18px;border-radius:999px}

/* Hero */
.hero{
  background:var(--blue) radial-gradient(rgba(255,255,255,.28) 1.3px,transparent 1.5px) 0 0/16px 16px;
  color:#fff;
  padding:42px 0 56px;
  position:relative;
}
.hero::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:-19px;
  height:20px;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'%3E%3Cpolygon points='0,0 40,0 20,20' fill='%232f66f2'/%3E%3C/svg%3E") repeat-x;
  z-index:2;
}
.hero .wrap{
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:28px;
  align-items:center;
}
.pill{
  display:inline-block;
  background:var(--yellow);
  color:var(--navy);
  border:2.5px solid var(--navy);
  border-radius:999px;
  padding:4px 14px;
  font-weight:800;
  font-size:12px;
  box-shadow:2px 2px 0 var(--navy);
}
h1{
  font-size:clamp(26px,5vw,50px);
  line-height:1.12;
  margin:16px 0 12px;
  font-weight:800;
  text-transform:uppercase;
  text-shadow:3px 3px 0 var(--navy);
}
.tag{
  font-style:italic;
  font-weight:800;
  color:var(--yellow);
  font-size:clamp(15px,2.4vw,20px);
  margin:0 0 12px;
  text-shadow:2px 2px 0 var(--navy);
}
.hero p.d{max-width:480px;margin:0 0 22px;font-size:14.5px;line-height:1.55}
.hero-btns{display:flex;flex-wrap:wrap;gap:10px}
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  font-weight:800;
  font-size:14px;
  border:3px solid var(--navy);
  border-radius:999px;
  padding:10px 22px;
  box-shadow:3px 3px 0 var(--navy);
  transition:transform .12s,box-shadow .12s;
}
.btn:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--navy)}
.btn.y{background:var(--yellow);color:var(--navy)}
.btn.w{background:#fff;color:var(--blue)}

/* Stage & Burst */
.stage{position:relative;justify-self:center;width:290px;height:260px;display:grid;place-items:center}
.burst{
  justify-self:center;
  width:210px;
  height:210px;
  display:grid;
  place-items:center;
  text-align:center;
  color:var(--navy);
  font-weight:800;
  line-height:1.1;
  background:var(--yellow);
  clip-path:polygon(50% 0,61% 12%,76% 6%,80% 21%,95% 24%,90% 39%,100% 50%,90% 61%,95% 76%,80% 79%,76% 94%,61% 88%,50% 100%,39% 88%,24% 94%,20% 79%,5% 76%,10% 61%,0 50%,10% 39%,5% 24%,20% 21%,24% 6%,39% 12%);
  transform:rotate(10deg);
}
.burst b{display:block;font-size:46px}
.burst span{font-size:13px}
.fl{
  position:absolute;
  font-weight:800;
  font-size:15px;
  background:#fff;
  color:var(--blue);
  border:2.5px solid var(--navy);
  border-radius:12px;
  padding:4px 11px;
  box-shadow:3px 3px 0 var(--navy);
}
.f1{top:8px;left:0}
.f2{top:36px;right:0;background:var(--yellow);color:var(--navy);animation-delay:-1.2s}
.f3{bottom:14px;left:16px;background:var(--navy);color:var(--yellow);animation-delay:-2.2s}
.f4{bottom:0;right:22px;background:none;border:0;box-shadow:none;font-size:38px;color:var(--yellow);-webkit-text-stroke:2px var(--navy);padding:0}

/* Section */
.sec{padding:52px 0}
.sky{background:var(--sky)}
h2{font-size:clamp(22px,3.8vw,32px);margin:14px 0 6px;font-weight:800}
.sub{color:var(--muted);font-size:14px;margin:0 0 26px}

/* Prize */
.prize{
  background:linear-gradient(90deg,#fffbe3,var(--yellow));
  border:3px solid var(--navy);
  border-radius:18px;
  box-shadow:5px 5px 0 var(--navy);
  padding:18px 24px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  flex-wrap:wrap;
  position:relative;
  overflow:hidden;
}
.prize small{font-size:11px;font-weight:800;letter-spacing:.08em;color:#6b5a00}
.prize b{display:block;font-size:clamp(22px,4vw,30px)}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chips i{
  font-style:normal;
  font-size:12.5px;
  font-weight:800;
  background:#fff;
  border:2px solid var(--navy);
  border-radius:999px;
  padding:6px 13px;
  box-shadow:2px 2px 0 var(--navy);
}

/* Cards & Podium */
.card{
  background:#fff;
  border:3px solid var(--navy);
  border-radius:18px;
  box-shadow:5px 5px 0 var(--navy);
  transition:transform .15s ease,box-shadow .15s ease;
}
.podium{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
  align-items:end;
}
.pod{
  padding:24px 18px 20px;
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
}
.pod.r1{
  background:var(--pale);
  padding-top:30px;
  padding-bottom:26px;
  transform:rotate(-1deg);
}
.pod.r2{transform:rotate(1deg)}
.pod.r3{transform:rotate(-.6deg)}

.medal{
  width:56px;
  height:56px;
  border-radius:50%;
  border:3px solid var(--navy);
  display:grid;
  place-items:center;
  font-weight:800;
  font-size:24px;
  background:var(--blue);
  color:#fff;
  box-shadow:3px 3px 0 var(--navy);
}
.r1 .medal{background:var(--yellow);color:var(--navy);width:64px;height:64px;font-size:28px}
.lbl{
  font-size:11px;
  font-weight:800;
  background:var(--navy);
  color:#fff;
  border-radius:999px;
  padding:3px 12px;
  letter-spacing:.04em;
}
.r1 .lbl{background:var(--yellow);color:var(--navy);border:2px solid var(--navy)}
.pod h3{margin:4px 0 0;font-size:17px;font-weight:800;line-height:1.25}
.school{font-size:13px;color:var(--muted);word-break:break-word}
.hadiah{
  font-size:12px;
  font-weight:800;
  border-top:2px dashed var(--navy);
  padding-top:8px;
  margin-top:6px;
  width:100%;
}
.visit{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  background:var(--blue);
  color:#fff;
  text-decoration:none;
  font-weight:800;
  font-size:13px;
  border:2.5px solid var(--navy);
  border-radius:999px;
  padding:9px 18px;
  box-shadow:3px 3px 0 var(--navy);
  margin-top:8px;
  transition:transform .12s,box-shadow .12s;
  -webkit-tap-highlight-color:transparent;
}
.visit:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--navy)}
.visit:focus-visible,.btn:focus-visible{outline:3px solid var(--navy);outline-offset:3px}

/* List 4-10 */
.list{display:flex;flex-direction:column;gap:14px;padding:0;margin:0;list-style:none}
.row{
  display:grid;
  grid-template-columns:46px 1fr auto;
  gap:16px;
  align-items:center;
  padding:14px 20px;
}
.row .visit{margin:0}
.row .info h3{margin:0 0 2px;font-size:16px;font-weight:800;line-height:1.25}
.row .info .school{font-size:13px}
.no{
  width:42px;
  height:42px;
  border-radius:50%;
  background:var(--yellow);
  border:2.5px solid var(--navy);
  display:grid;
  place-items:center;
  font-weight:800;
  font-size:16px;
  box-shadow:2px 2px 0 var(--navy);
  flex-shrink:0;
}

/* Animations */
.hero{animation:drift 24s linear infinite}
.hero .wrap>div:first-child>*{animation:rise .7s cubic-bezier(.2,.8,.3,1) both}
.hero .wrap>div:first-child>:nth-child(2){animation-delay:.1s}
.hero .wrap>div:first-child>:nth-child(3){animation-delay:.2s}
.hero .wrap>div:first-child>:nth-child(4){animation-delay:.3s}
.hero .wrap>div:first-child>:nth-child(5){animation-delay:.4s}
.burst{animation:pop .8s cubic-bezier(.3,1.6,.5,1) both,wob 5s ease-in-out .8s infinite alternate,bob 4s ease-in-out infinite}
.fl{animation:bob 3.4s ease-in-out infinite}
.f4{animation:twk 2s ease-in-out infinite}
.prize::after{
  content:"";
  position:absolute;
  top:0;
  bottom:0;
  left:-140px;
  width:90px;
  background:linear-gradient(100deg,transparent,rgba(255,255,255,.75),transparent);
  animation:shine 3.8s ease-in-out infinite;
}
.r1 .medal{animation:bounce 1.6s ease-in-out infinite}
.sky{position:relative;overflow:hidden}
.sky::before,.sky::after{position:absolute;color:var(--yellow);-webkit-text-stroke:2px var(--navy);animation:twk 2.6s ease-in-out infinite}
.sky::before{content:"★";right:7%;top:36px;font-size:34px}
.sky::after{content:"✦";left:3%;bottom:40px;font-size:30px;animation-delay:-1.3s}

.rv{opacity:0;translate:0 24px;transition:opacity .5s ease,translate .5s cubic-bezier(.2,.8,.3,1),box-shadow .2s}
.rv.in{opacity:1;translate:0 0}
@media(hover:hover){
  .card.in:hover{translate:0 -4px;box-shadow:5px 9px 0 var(--navy)}
}

@keyframes rise{from{opacity:0;translate:0 24px}}
@keyframes pop{from{scale:0;opacity:0}}
@keyframes wob{from{rotate:4deg}to{rotate:16deg}}
@keyframes bob{50%{translate:0 -8px}}
@keyframes bounce{50%{translate:0 -6px}}
@keyframes twk{50%{scale:1.2;opacity:.75}}
@keyframes shine{0%,55%{left:-140px}100%{left:110%}}
@keyframes drift{to{background-position:160px 160px}}

/* ====================================================
   MOBILE OPTIMIZATIONS (HP / SMARTPHONE)
   ==================================================== */
@media(max-width:760px){
  /* Hero section mobile */
  .hero{padding:32px 0 46px}
  .hero .wrap{
    grid-template-columns:1fr;
    gap:20px;
    text-align:center;
  }
  .hero p.d{margin:0 auto 20px}
  .hero-btns{
    justify-content:center;
    width:100%;
  }
  .btn{
    width:100%;
    max-width:320px;
    padding:11px 20px;
  }
  .stage{
    width:220px;
    height:180px;
    margin:6px auto 0;
  }
  .burst{
    width:160px;
    height:160px;
  }
  .burst b{font-size:34px}
  .burst span{font-size:11.5px}
  .fl{font-size:13px;padding:3px 9px}

  /* Prize section mobile */
  .sec{padding:36px 0}
  .prize{
    flex-direction:column;
    align-items:stretch;
    padding:16px 18px;
    gap:12px;
  }
  .chips{
    justify-content:flex-start;
  }
  .chips i{
    font-size:12px;
    padding:5px 11px;
  }

  /* Podium (Rank 1-3) mobile */
  .podium{
    grid-template-columns:1fr;
    gap:16px;
  }
  .pod.r1{
    order:-1;
    transform:none!important;
    padding:22px 16px 20px;
  }
  .pod{
    transform:none!important;
    padding:18px 16px;
    gap:6px;
  }
  .pod .visit{
    width:100%;
    margin-top:8px;
  }

  /* List (Rank 4-10) mobile */
  .list{gap:12px}
  .row{
    display:grid;
    grid-template-columns:42px 1fr;
    grid-template-areas:
      "no info"
      "btn btn";
    gap:10px 12px;
    align-items:center;
    padding:14px 16px;
    box-shadow:4px 4px 0 var(--navy);
  }
  .row .no{
    grid-area:no;
    align-self:center;
  }
  .row .info{
    grid-area:info;
    min-width:0;
  }
  .row .info h3{
    font-size:15.5px;
    margin:0 0 2px;
    line-height:1.25;
    word-break:break-word;
  }
  .row .info .school{
    font-size:12.5px;
    line-height:1.3;
    word-break:break-word;
  }
  .row .visit{
    grid-area:btn;
    width:100%;
    text-align:center;
    margin-top:4px;
    padding:9px 16px;
    font-size:13px;
  }
}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
  .rv{opacity:1;translate:none}
}
</style>
</head>
<body>

<section class="hero"><div class="wrap">
  <div>
    <span class="pill">Pengumuman Finalis SMP</span>
    <h1>M-One Telkomsel Coding Competition 2026</h1>
    <p class="tag">Leaderboard: 10 finalis kategori SMP</p>
    <p class="d">Selamat kepada peserta yang lolos ke Babak Final. Buka website karya mereka satu per satu.</p>
    <div class="hero-btns">
      <a class="btn y" href="#top3">Peringkat 1–3 🏆</a>
      <a class="btn w" href="#top10">Peringkat 4–10 📋</a>
    </div>
  </div>
  <div class="stage">
    <span class="fl f1">&lt;/&gt;</span>
    <span class="fl f2">{ }</span>
    <span class="fl f3">AI</span>
    <span class="fl f4">★</span>
    <div class="burst">
      <div><span>TOP</span><b>10</b><span>FINALIS</span></div>
    </div>
  </div>
</div></section>

<section class="sec" style="padding-top:36px"><div class="wrap">
  <div class="prize">
    <div>
      <small>BABAK FINAL</small>
      <b>12 Desember 2026</b>
    </div>
    <div class="chips">
      <i>📍 Luring (Offline)</i>
      <i>🏫 SMK Muhammadiyah 1 Sukoharjo</i>
    </div>
  </div>

  <div id="top3" style="padding-top:36px">
    <span class="pill">Peringkat 1–3</span>
    <h2>Tiga Finalis Teratas</h2>
    <p class="sub">Tema: “School Website Innovation”.</p>
    <div class="podium" id="podium"></div>
  </div>
</div></section>

<section class="sec sky" id="top10"><div class="wrap">
  <span class="pill">Peringkat 4–10</span>
  <h2>Tujuh Finalis Lainnya</h2>
  <p class="sub">Daftar finalis kategori SMP yang lolos ke Babak Final.</p>
  <ol class="list" id="list"></ol>
</div></section>

<script>
// Data finalis kategori SMP (Nama, Asal Sekolah, Link Karya, dan Peringkat)
const PESERTA=[
  {
    peringkat: 1,
    nama: "Muhammad Nararya Riffat",
    sekolah: "SMPIT Al-Firdaus Samarinda",
    url: "https://smpit-al-firdaus.vercel.app/"
  },
  {
    peringkat: 2,
    nama: "Riam Sambang Imalat",
    sekolah: "SMP Muhammadiyah 1 Kudus",
    url: "https://spemuku.vercel.app/"
  },
  {
    peringkat: 3,
    nama: "Rania Mumtaza Rifai",
    sekolah: "SMPIT Nur Hidayah Surakarta",
    url: "https://peserta85.m1sec.my.id/"
  },
  {
    peringkat: 4,
    nama: "Affan",
    sekolah: "MTsN 2 Sukoharjo",
    url: "https://mtsn2skh-tau.vercel.app/"
  },
  {
    peringkat: 5,
    nama: "Eugene Ivander",
    sekolah: "SMPIT Ibnu Abbas Klaten",
    url: "https://eugeneivander61.github.io/smpit-ibnu-abbas-klaten/"
  },
  {
    peringkat: 6,
    nama: "Annida Amanina Nur Shabrina",
    sekolah: "SMPIT Nur Hidayah",
    url: "https://peserta87.m1sec.my.id/"
  },
  {
    peringkat: 7,
    nama: "Hasan Abdullah Ramadan",
    sekolah: "MTsN 2 Sukoharjo",
    url: "https://peserta93.m1sec.my.id/"
  },
  {
    peringkat: 8,
    nama: "Khansa Seri Ardenta",
    sekolah: "MTsN 2 Sukoharjo",
    url: "https://mtsn2skhprofile.vercel.app/"
  },
  {
    peringkat: 9,
    nama: "Fajar Aditya",
    sekolah: "MTsN 2 Sukoharjo",
    url: "https://fajar-aditya-mtsn-2-sukoharjo.vercel.app/"
  },
  {
    peringkat: 10,
    nama: "Jirou Faiza Athoillah",
    sekolah: "MTsN 2 Sukoharjo",
    url: "https://mtsn2skh.vercel.app/"
  }
];

const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const link=u=>\`<a class="visit" href="\${esc(u)}" target="_blank" rel="noopener noreferrer">Kunjungi website ➜</a>\`;
const data=[...PESERTA].sort((a,b)=>a.peringkat-b.peringkat);

// Render Podium (Peringkat 1, 2, 3)
document.getElementById("podium").innerHTML=[1,0,2].filter(i=>data[i]).map(i=>{
  const p=data[i];
  return \`<article class="card pod r\${p.peringkat}">
    <div class="medal">\${p.peringkat}</div>
    <span class="lbl">\${p.peringkat===1?'PERINGKAT 1':'FINALIS'}</span>
    <h3>\${esc(p.nama)}</h3>
    <div class="school">\${esc(p.sekolah)}</div>
    <div class="hadiah">Lolos ke Babak Final</div>
    \${link(p.url)}
  </article>\`;
}).join("");

// Render List (Peringkat 4-10)
document.getElementById("list").innerHTML=data.slice(3).map(p=>\`
  <li class="card row">
    <div class="no">\${p.peringkat}</div>
    <div class="info">
      <h3>\${esc(p.nama)}</h3>
      <div class="school">\${esc(p.sekolah)}</div>
    </div>
    \${link(p.url)}
  </li>
\`).join("");

// Scroll reveal animations
(function(){
  const els=[...document.querySelectorAll(".prize,.card,.pill,h2,.sub")].filter(e=>!e.closest(".hero"));
  els.forEach(e=>e.classList.add("rv"));
  if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return}
  const io=new IntersectionObserver(es=>{
    es.filter(x=>x.isIntersecting).forEach((x,i)=>{
      setTimeout(()=>x.target.classList.add("in"),i*90);
      io.unobserve(x.target);
    });
  },{threshold:.12});
  els.forEach(e=>io.observe(e));
})();
</script>
</body>
</html>`;

export async function GET() {
  return new Response(htmlContent, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
