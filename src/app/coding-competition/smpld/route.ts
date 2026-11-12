export const dynamic = "force-static";

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light">
<meta name="robots" content="noindex, nofollow">
<title>Leaderboard SMP – M-One Telkomsel Coding Competition 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,700;0,800;1,800&display=swap" rel="stylesheet">
<style>
:root{color-scheme:light;--blue:#2f66f2;--navy:#0b1233;--yellow:#ffd23f;--sky:#e6efff;--pale:#fff8d6;--muted:#52608f;
box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
*{box-sizing:border-box}html{scroll-padding-top:env(safe-area-inset-top,0px)}
body{margin:0;font-family:"Plus Jakarta Sans","Segoe UI",system-ui,sans-serif;background:#fff;color:var(--navy);line-height:1.5}
a{color:inherit}
.wrap{max-width:1040px;margin:0 auto;padding:0 22px}
.nav{background:var(--navy);color:#fff}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;padding:14px 22px;gap:12px;flex-wrap:wrap}
.brand{font-weight:800;font-size:18px}.brand small{display:block;font-size:9px;letter-spacing:.25em;font-weight:500;color:#9db3ff}
.nav a.cta{background:var(--blue);color:#fff;text-decoration:none;font-weight:700;font-size:13px;padding:9px 18px;border-radius:999px}
.hero{background:var(--blue) radial-gradient(rgba(255,255,255,.28) 1.3px,transparent 1.5px) 0 0/16px 16px;color:#fff;padding:46px 0 60px;position:relative}
.hero::after{content:"";position:absolute;left:0;right:0;bottom:-19px;height:20px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='20' viewBox='0 0 40 20'%3E%3Cpolygon points='0,0 40,0 20,20' fill='%232f66f2'/%3E%3C/svg%3E") repeat-x}
.hero .wrap{display:grid;grid-template-columns:1.5fr 1fr;gap:24px;align-items:center}
.pill{display:inline-block;background:var(--yellow);color:var(--navy);border:2.5px solid var(--navy);border-radius:999px;padding:4px 14px;font-weight:800;font-size:12px;box-shadow:2px 2px 0 var(--navy)}
h1{font-size:clamp(30px,5.4vw,52px);line-height:1.08;margin:16px 0 12px;font-weight:800;text-transform:uppercase;text-shadow:3px 3px 0 var(--navy)}
.tag{font-style:italic;font-weight:800;color:var(--yellow);font-size:clamp(15px,2.4vw,20px);margin:0 0 12px;text-shadow:2px 2px 0 var(--navy)}
.hero p.d{max-width:480px;margin:0 0 22px;font-size:14.5px}
.btn{display:inline-block;text-decoration:none;font-weight:800;font-size:14px;border:3px solid var(--navy);border-radius:999px;padding:10px 22px;box-shadow:3px 3px 0 var(--navy);margin:0 8px 8px 0}
.btn.y{background:var(--yellow);color:var(--navy)}.btn.w{background:#fff;color:var(--blue)}
.burst{justify-self:center;width:210px;height:210px;display:grid;place-items:center;text-align:center;color:var(--navy);font-weight:800;line-height:1.1;background:var(--yellow);clip-path:polygon(50% 0,61% 12%,76% 6%,80% 21%,95% 24%,90% 39%,100% 50%,90% 61%,95% 76%,80% 79%,76% 94%,61% 88%,50% 100%,39% 88%,24% 94%,20% 79%,5% 76%,10% 61%,0 50%,10% 39%,5% 24%,20% 21%,24% 6%,39% 12%);transform:rotate(10deg)}
.burst b{display:block;font-size:46px}.burst span{font-size:13px}
.sec{padding:56px 0}.sky{background:var(--sky)}
h2{font-size:clamp(23px,4vw,32px);margin:14px 0 6px;font-weight:800}
.sub{color:var(--muted);font-size:14px;margin:0 0 30px}
.prize{background:linear-gradient(90deg,#fffbe3,var(--yellow));border:3px solid var(--navy);border-radius:18px;box-shadow:6px 6px 0 var(--navy);padding:18px 26px;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap;margin-top:0}
.prize small{font-size:11px;font-weight:800;letter-spacing:.08em;color:#6b5a00}.prize b{display:block;font-size:30px}
.chips{display:flex;gap:10px;flex-wrap:wrap}.chips i{font-style:normal;font-size:13px;font-weight:800;background:#fff;border:2.5px solid var(--navy);border-radius:999px;padding:6px 14px;box-shadow:2px 2px 0 var(--navy)}
.card{background:#fff;border:3px solid var(--navy);border-radius:18px;box-shadow:6px 6px 0 var(--navy)}
.podium{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:end}
.pod{padding:22px 18px 20px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}
.pod.r1{background:var(--pale);padding-top:30px;padding-bottom:26px;transform:rotate(-1deg)}
.pod.r2{transform:rotate(1deg)}.pod.r3{transform:rotate(-.6deg)}
.medal{width:56px;height:56px;border-radius:50%;border:3px solid var(--navy);display:grid;place-items:center;font-weight:800;font-size:24px;background:var(--blue);color:#fff;box-shadow:3px 3px 0 var(--navy)}
.r1 .medal{background:var(--yellow);color:var(--navy);width:66px;height:66px;font-size:30px}
.lbl{font-size:11px;font-weight:800;background:var(--navy);color:#fff;border-radius:999px;padding:3px 12px}
.r1 .lbl{background:var(--yellow);color:var(--navy);border:2px solid var(--navy)}
.pod h3,.row h3{margin:4px 0 0;font-size:17px}.school{font-size:12.5px;color:var(--muted)}
.score{font-weight:800;font-size:13px;color:var(--blue);border:2.5px solid var(--navy);border-radius:999px;padding:3px 12px;background:#fff;white-space:nowrap}
.hadiah{font-size:12px;font-weight:800;border-top:2px dashed var(--navy);padding-top:8px;margin-top:6px;width:100%}
.visit{display:inline-block;background:var(--blue);color:#fff;text-decoration:none;font-weight:800;font-size:13px;border:2.5px solid var(--navy);border-radius:999px;padding:8px 18px;box-shadow:3px 3px 0 var(--navy);margin-top:8px;transition:transform .12s,box-shadow .12s}
.visit:hover{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--navy)}
.visit:focus-visible,.btn:focus-visible{outline:3px solid var(--navy);outline-offset:3px}
.list{display:flex;flex-direction:column;gap:16px;padding:0;margin:0;list-style:none}
.row{display:grid;grid-template-columns:46px 1fr auto auto;gap:16px;align-items:center;padding:14px 20px;box-shadow:5px 5px 0 var(--navy)}
.row .visit{margin:0}
.no{width:40px;height:40px;border-radius:50%;background:var(--yellow);border:2.5px solid var(--navy);display:grid;place-items:center;font-weight:800}
.fine{background:var(--navy);color:#9db3ff;text-align:center;font-size:12px;padding:24px}
@media(max-width:760px){
.hero .wrap{grid-template-columns:1fr}.burst{width:150px;height:150px;justify-self:start}.burst b{font-size:32px}
.podium{grid-template-columns:1fr}.pod.r1{order:-1}.pod{transform:none!important}
.row{grid-template-columns:42px 1fr;row-gap:10px}.row .visit{grid-column:1/-1;text-align:center}}
.hero{animation:drift 24s linear infinite}
.hero .wrap>div:first-child>*{animation:rise .7s cubic-bezier(.2,.8,.3,1) both}
.hero .wrap>div:first-child>:nth-child(2){animation-delay:.1s}.hero .wrap>div:first-child>:nth-child(3){animation-delay:.2s}.hero .wrap>div:first-child>:nth-child(4){animation-delay:.3s}.hero .wrap>div:first-child>:nth-child(5){animation-delay:.4s}.hero .wrap>div:first-child>:nth-child(6){animation-delay:.5s}
.stage{position:relative;justify-self:center;width:290px;height:260px;display:grid;place-items:center}
.burst{animation:pop .8s cubic-bezier(.3,1.6,.5,1) both,wob 5s ease-in-out .8s infinite alternate,bob 4s ease-in-out infinite}
.fl{position:absolute;font-weight:800;font-size:15px;background:#fff;color:var(--blue);border:2.5px solid var(--navy);border-radius:12px;padding:4px 11px;box-shadow:3px 3px 0 var(--navy);animation:bob 3.4s ease-in-out infinite}
.f1{top:8px;left:0}.f2{top:36px;right:0;background:var(--yellow);color:var(--navy);animation-delay:-1.2s}.f3{bottom:14px;left:16px;background:var(--navy);color:var(--yellow);animation-delay:-2.2s}
.f4{bottom:0;right:22px;background:none;border:0;box-shadow:none;font-size:38px;color:var(--yellow);-webkit-text-stroke:2px var(--navy);padding:0;animation:twk 2s ease-in-out infinite}
.prize{position:relative;overflow:hidden}
.prize::after{content:"";position:absolute;top:0;bottom:0;left:-140px;width:90px;background:linear-gradient(100deg,transparent,rgba(255,255,255,.75),transparent);animation:shine 3.8s ease-in-out infinite}
.r1 .medal{animation:bounce 1.6s ease-in-out infinite}
.sky{position:relative;overflow:hidden}
.sky::before,.sky::after{position:absolute;color:var(--yellow);-webkit-text-stroke:2px var(--navy);animation:twk 2.6s ease-in-out infinite}
.sky::before{content:"★";right:7%;top:36px;font-size:34px}.sky::after{content:"✦";left:3%;bottom:40px;font-size:30px;animation-delay:-1.3s}
.rv{opacity:0;translate:0 30px;transition:opacity .6s ease,translate .6s cubic-bezier(.2,.8,.3,1),box-shadow .2s}
.rv.in{opacity:1;translate:0 0}
.card.in:hover{translate:0 -5px;box-shadow:6px 11px 0 var(--navy)}
@keyframes rise{from{opacity:0;translate:0 24px}}
@keyframes pop{from{scale:0;opacity:0}}
@keyframes wob{from{rotate:4deg}to{rotate:16deg}}
@keyframes bob{50%{translate:0 -10px}}
@keyframes bounce{50%{translate:0 -8px}}
@keyframes twk{50%{scale:1.3;opacity:.7}}
@keyframes shine{0%,55%{left:-140px}100%{left:110%}}
@keyframes drift{to{background-position:160px 160px}}
@media(max-width:760px){.stage{justify-self:start;width:230px;height:200px}.burst{justify-self:auto}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.rv{opacity:1;translate:none}}
</style>
</head>
<body>

<section class="hero"><div class="wrap">
  <div>
    <span class="pill">Pengumuman Finalis SMP</span>
    <h1>M-One Telkomsel Coding Competition 2026</h1>
    <p class="tag">Leaderboard: 10 finalis kategori SMP</p>
    <p class="d">Selamat kepada peserta yang lolos ke Babak Final. Buka website karya mereka satu per satu.</p>
    <a class="btn y" href="#top3">Peringkat 1–3</a><a class="btn w" href="#top10">Peringkat 4–10</a>
  </div>
  <div class="stage"><span class="fl f1">&lt;/&gt;</span><span class="fl f2">{ }</span><span class="fl f3">AI</span><span class="fl f4">★</span><div class="burst"><div><span>TOP</span><b>10</b><span>FINALIS</span></div></div></div>
</div></section>

<section class="sec" style="padding-top:40px"><div class="wrap">
  <div class="prize"><div><small>BABAK FINAL</small><b>12 Desember 2026</b></div><div class="chips"><i>Luring (Offline)</i><i>SMK Muhammadiyah 1 Sukoharjo</i></div></div>
  <div id="top3" style="padding-top:40px">
    <span class="pill">Peringkat 1–3</span>
    <h2>Tiga skor tertinggi</h2>
    <p class="sub">Tema: “School Website Innovation”.</p>
    <div class="podium" id="podium"></div>
  </div>
</div></section>

<section class="sec sky" id="top10"><div class="wrap">
  <span class="pill">Peringkat 4–10</span>
  <h2>Tujuh finalis lainnya</h2>
  <p class="sub">Urut berdasarkan skor babak penyisihan.</p>
  <ol class="list" id="list"></ol>
</div></section>


<script>
// Ganti data di bawah dengan data peserta asli.
const PESERTA=[
{nama:"Nama Peserta 1",sekolah:"SMP Negeri 1 Sukoharjo",skor:96,url:"https://example.com/peserta-1"},
{nama:"Nama Peserta 2",sekolah:"SMP Muhammadiyah 1 Sukoharjo",skor:93,url:"https://example.com/peserta-2"},
{nama:"Nama Peserta 3",sekolah:"SMP Negeri 2 Surakarta",skor:91,url:"https://example.com/peserta-3"},
{nama:"Nama Peserta 4",sekolah:"SMP Negeri 3 Karanganyar",skor:89,url:"https://example.com/peserta-4"},
{nama:"Nama Peserta 5",sekolah:"SMP Negeri 5 Sukoharjo",skor:87,url:"https://example.com/peserta-5"},
{nama:"Nama Peserta 6",sekolah:"SMP Islam Al Azhar Solo",skor:85,url:"https://example.com/peserta-6"},
{nama:"Nama Peserta 7",sekolah:"SMP Negeri 4 Boyolali",skor:83,url:"https://example.com/peserta-7"},
{nama:"Nama Peserta 8",sekolah:"SMP Negeri 1 Klaten",skor:81,url:"https://example.com/peserta-8"},
{nama:"Nama Peserta 9",sekolah:"SMP Negeri 2 Wonogiri",skor:79,url:"https://example.com/peserta-9"},
{nama:"Nama Peserta 10",sekolah:"SMP Negeri 6 Surakarta",skor:77,url:"https://example.com/peserta-10"}];
const HADIAH=["Rp 500.000 + Sertifikat & Plakat","Rp 300.000 + Sertifikat & Plakat","Rp 200.000 + Sertifikat & Plakat"];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const link=u=>\`<a class="visit" href="\${esc(u)}" target="_blank" rel="noopener noreferrer">Kunjungi website</a>\`;
const data=[...PESERTA].sort((a,b)=>b.skor-a.skor).slice(0,10);
document.getElementById("podium").innerHTML=[1,0,2].filter(i=>data[i]).map(i=>{const p=data[i];
return \`<article class="card pod r\${i+1}"><div class="medal">\${i+1}</div><span class="lbl">FINALIS</span><h3>\${esc(p.nama)}</h3><div class="school">\${esc(p.sekolah)}</div><span class="score">Skor \${p.skor}</span><div class="hadiah">Lolos ke Babak Final</div>\${link(p.url)}</article>\`}).join("");
document.getElementById("list").innerHTML=data.slice(3).map((p,k)=>\`<li class="card row"><div class="no">\${k+4}</div><div><h3>\${esc(p.nama)}</h3><div class="school">\${esc(p.sekolah)}</div></div><span class="score">Skor \${p.skor}</span>\${link(p.url)}</li>\`).join("");
(function(){
const els=[...document.querySelectorAll(".prize,.card,.pill,h2,.sub")].filter(e=>!e.closest(".hero"));
els.forEach(e=>e.classList.add("rv"));
if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return}
const io=new IntersectionObserver(es=>{es.filter(x=>x.isIntersecting).forEach((x,i)=>{setTimeout(()=>x.target.classList.add("in"),i*110);io.unobserve(x.target)})},{threshold:.15});
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

