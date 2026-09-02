"use client";

import { useEffect } from 'react';
import './competition.css';

export default function CompetitionPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("js-animated");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="competition-page">
      <section className="hero">

  <div className="wrap hero-grid">
    <div>
      {/*  Top Meta Row: Event Badge & Sponsor Card  */}
      <div className="hero-meta-row hero-fade d-1">
        <div className="event-title-badge">
          <span className="badge">🎉 Pendaftaran Dibuka!</span>
        </div>

        <div className="sponsor-block-card">
          <span className="sponsor-by-text">SUPPORTED BY</span>
          <img src="/images/competition/Telkomsel_idIm1_cNgs_0.png" alt="Telkomsel Logo" className="telkomsel-logo-img" />
        </div>
      </div>

      {/*  High-Impact Headline: Event Name First  */}
      <h1 className="hero-fade d-1">M-ONE TELKOMSEL CODING<br />COMPETITION <span className="ai-highlight">2026</span></h1>
      <p className="hero-tagline bangers hero-fade d-1">Bikin Website Inovatif & Keren, Dibantu AI! 🤖</p>
      <p className="lead hero-fade d-2">Buat kamu pelajar SMP, SMA/SMK, mahasiswa, dan masyarakat umum se-Solo Raya & sekitarnya. Nggak perlu jago-jago amat, modal semangat belajar aja udah cukup buat ikutan!</p>
      <div className="hero-ctas hero-fade d-3">
        <a className="btn btn-primary" href="#daftar">Yuk, Daftar Sekarang! 🚀</a>
        <a className="btn btn-outline-light" href="#tentang">Cek Serunya Dulu</a>
      </div>
    </div>

    <div className="mascot-col hero-fade d-2">
      <div className="burst"><span>Pendaftaran Dibuka!</span></div>
      <div className="speech-bubble">Santai aja, aku temenin dari sini! 👋</div>
      
      {/*  Floating Sponsor & Organizer Badges  */}
      <div className="float-logo float-logo-1" title="Telkomsel">
        <img src="/images/competition/1.png" alt="Telkomsel" />
      </div>
      <div className="float-logo float-logo-2" title="SMK Muhammadiyah 01 Sukoharjo">
        <img src="/images/competition/2.png" alt="SMK Muhammadiyah 01 Sukoharjo" />
      </div>
      <div className="float-logo float-logo-3" title="M-One Solution Software House">
        <img src="/images/competition/3.png" alt="M-One Solution" />
      </div>

      <img src="/images/competition/2960ebda-db8a-4637-865a-e68b0b0d6c0d.png" alt="Mascot" className="mascot-img" />
      
      {/* Floating Prize Pool Pill on Mascot */}
      <div className="mascot-prize-tag">
        <span>🏆</span>
        <div>
          <small>TOTAL PRIZE POOL</small>
          <strong>Rp 3.200.000,00</strong>
        </div>
      </div>
    </div>
  </div>
  <svg className="hero-zigzag" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48L48 0L96 48L144 0L192 48L240 0L288 48L336 0L384 48L432 0L480 48L528 0L576 48L624 0L672 48L720 0L768 48L816 0L864 48L912 0L960 48L1008 0L1056 48L1104 0L1152 48L1200 0L1248 48L1296 0L1344 48L1392 0L1440 48V52H0V48Z" fill="#FFFFFF"/></svg>
</section>

<section id="tentang">
  <div className="wrap">
    {/* Prize Pool Highlight Showcase Card */}
    <div className="prize-pool-banner reveal">
      <div className="prize-pool-content">
        <div className="prize-pool-main">
          <div className="prize-trophy-box">
            <span>🏆</span>
          </div>
          <div className="prize-text-group">
            <span className="prize-eyebrow">
              <span className="live-dot"></span>
              TOTAL PRIZE POOL
            </span>
            <div className="prize-value">
              Rp 3.200.000<span className="prize-cents">,00</span>
            </div>
          </div>
        </div>

        <div className="prize-divider"></div>

        <div className="prize-perks">
          <div className="prize-perk-item">
            <span className="perk-icon">💰</span>
            <div>
              <strong>Uang Pembinaan Juara</strong>
              <span>Diberikan kepada inovator terbaik tiap kategori</span>
            </div>
          </div>
          <div className="prize-perk-item">
            <span className="perk-icon">📜</span>
            <div>
              <strong>Piagam & E-Certificate</strong>
              <span>Sertifikat resmi kompetisi & piagam penghargaan</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section-head" style={{"marginBottom":"28px"}}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "18px" }}>
        <span className="badge" style={{ marginBottom: 0 }}>✨ Tentang Lombanya</span>
        <span className="badge prize-pill-badge" style={{ marginBottom: 0 }}>🏆 Prize Pool Rp 3.200.000,00</span>
      </div>
      <h2>Inovasi Website Dibantu AI</h2>
      <p style={{"fontSize":"15.5px","color":"var(--slate)","fontWeight":"600","maxWidth":"720px","marginTop":"8px"}}>
        Kamu ditantang merancang dan membangun website inovatif secara perorangan (individu), boleh memanfaatkan bantuan <em>Artificial Intelligence (AI)</em>. Lomba terdiri dari 2 tahap: penyisihan online & final dengan <strong>Total Prize Pool Rp 3.200.000,00</strong>. Pilih kategori sesuai jenjang kamu!
      </p>
    </div>

    <div className="about-theme-grid reveal">
      {/*  Kategori Sekolah (SMP)  */}
      <div className="theme-card sekolah">
        <div>
          <div className="theme-card-badge-row">
            <span className="t-badge-main">TEMA RESMI</span>
            <span className="t-badge-cat sekolah">Kategori Sekolah (SMP)</span>
          </div>
          <h3>"School Website Innovation"</h3>
          <p>Peserta ditantang untuk merancang dan membangun website profil inovatif untuk sekolah masing-masing. Karya harus orisinal, buatan sendiri, dan belum pernah diikutsertakan dalam lomba lain. Bahasa pemrograman dan framework bebas. Informasi dan materi dasar dapat menggunakan data sekolah masing-masing, dengan panduan teknis yang akan dibagikan saat Technical Meeting!</p>
        </div>
        <ul className="theme-features">
          <li><strong>Peserta:</strong> Siswa/i aktif SMP se-Sukoharjo & sekitarnya</li>
          <li><strong>Format:</strong> Perorangan (Individu)</li>
          <li><strong>Teknologi:</strong> Bebas (Bebas eksplorasi framework & AI tools)</li>
        </ul>

        {/* Hadiah Kategori Siswa */}
        <div className="theme-prizes">
          <div className="theme-prizes-title">
            <span className="trophy-emoji">🏆</span>
            <span>Hadiah Kategori Siswa (SMP)</span>
          </div>
          <div className="theme-prizes-list">
            <div className="theme-prize-item juara-1">
              <span className="prize-rank-badge j1">🥇 Juara 1</span>
              <span className="prize-nominal">Rp 500.000,-</span>
              <span className="prize-perk">+ Sertifikat & Piala</span>
            </div>
            <div className="theme-prize-item juara-2">
              <span className="prize-rank-badge j2">🥈 Juara 2</span>
              <span className="prize-nominal">Rp 300.000,-</span>
              <span className="prize-perk">+ Sertifikat & Piala</span>
            </div>
            <div className="theme-prize-item juara-3">
              <span className="prize-rank-badge j3">🥉 Juara 3</span>
              <span className="prize-nominal">Rp 200.000,-</span>
              <span className="prize-perk">+ Sertifikat & Piala</span>
            </div>
            <div className="theme-prize-item juara-finalis">
              <span className="prize-rank-badge jf">🎖️ Juara 4–10</span>
              <span className="prize-nominal finalist">Sertifikat Finalis</span>
            </div>
          </div>
        </div>
      </div>

      {/*  Kategori Umum  */}
      <div className="theme-card umum">
        <div>
          <div className="theme-card-badge-row">
            <span className="t-badge-main">TEMA RESMI</span>
            <span className="t-badge-cat umum">Kategori Umum</span>
          </div>
          <h3>"Innovating Education Through Technology"</h3>
          <p>Peserta bebas berinovasi menciptakan platform website berbasis edukasi (seperti media pembelajaran interaktif, learning management system, kuis edukatif, atau platform literasi digital). Karya harus orisinal, buatan sendiri, dan belum pernah diikutsertakan dalam lomba lain. Konsep fitur, bahasa pemrograman, dan framework sepenuhnya bebas!</p>
        </div>
        <ul className="theme-features">
          <li><strong>Peserta:</strong> SMA/SMK, Mahasiswa, & Non-Mahasiswa</li>
          <li><strong>Format:</strong> Perorangan (Individu)</li>
          <li><strong>Teknologi:</strong> Bebas (Bebas eksplorasi framework & AI tools)</li>
        </ul>

        {/* Hadiah Kategori Umum */}
        <div className="theme-prizes">
          <div className="theme-prizes-title">
            <span className="trophy-emoji">🏆</span>
            <span>Hadiah Kategori Umum</span>
          </div>
          <div className="theme-prizes-list">
            <div className="theme-prize-item juara-1">
              <span className="prize-rank-badge j1">🥇 Juara 1</span>
              <span className="prize-nominal">Rp 1.000.000,-</span>
              <span className="prize-perk">+ E-Sertifikat</span>
            </div>
            <div className="theme-prize-item juara-2">
              <span className="prize-rank-badge j2">🥈 Juara 2</span>
              <span className="prize-nominal">Rp 700.000,-</span>
              <span className="prize-perk">+ E-Sertifikat</span>
            </div>
            <div className="theme-prize-item juara-3">
              <span className="prize-rank-badge j3">🥉 Juara 3</span>
              <span className="prize-nominal">Rp 500.000,-</span>
              <span className="prize-perk">+ E-Sertifikat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="kategori" className="alt">
  <div className="wrap">
    <span className="badge">🙋 Kategori Peserta</span>
    <div className="section-head">
      <h2>Ada 2 kategori, pilih yang cocok!</h2>
      <p>Lomba diikuti perorangan (individu) di masing-masing kategori.</p>
    </div>
    <div className="cat-grid reveal">
      <div className="cat-card">
        <div className="cat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 L22 8 L12 13 L2 8 Z"/><path d="M6 10.5 V16 C6 17.5 8.5 19 12 19 C15.5 19 18 17.5 18 16 V10.5"/><path d="M22 8 V14"/></svg></div>
        <h3>Kategori Sekolah <span style={{"fontSize":"16px","color":"var(--blue)","fontWeight":"700"}}>(SMP)</span></h3>
        <ul>
          <li>Peserta merupakan siswa/siswi aktif jenjang SMP di Sukoharjo and wilayah sekitarnya</li>
          <li>Setiap sekolah dapat mengirimkan lebih dari satu peserta</li>
          <li>Pendaftaran bersifat individu (perorangan)</li>
        </ul>
      </div>
      <div className="cat-card">
        <div className="cat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8 V6 C8 4.9 8.9 4 10 4 H14 C15.1 4 16 4.9 16 6 V8"/><line x1="3" y1="13" x2="21" y2="13"/></svg></div>
        <h3>Kategori Umum <span style={{"fontSize":"14px","color":"var(--blue)","fontWeight":"700","display":"block","marginTop":"2px"}}>(SMA/SMK, Mahasiswa/Non-mahasiswa)</span></h3>
        <ul>
          <li>Peserta merupakan Warga Negara Indonesia (WNI)</li>
          <li>Melampirkan Kartu Pelajar atau KTM jika masih bersekolah or kuliah</li>
          <li>Setiap sekolah dapat mengirimkan lebih dari satu peserta</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="jadwal">
  <div className="wrap">
    <span className="badge">🗺️ Rute Lombanya</span>
    <div className="section-head">
      <h2>Jadwal Pelaksanaan per Kategori</h2>
      <p>Simak rincian alur dan tanggal penting perlombaan untuk masing-masing kategori!</p>
    </div>

    <div className="jadwal-categories-grid">
      {/*  Kategori Umum  */}
      <div className="jadwal-cat-card reveal">
        <div className="jadwal-cat-header">
          <span className="jadwal-cat-badge umum">Kategori Umum</span>
          <h3>SMA/SMK, Mahasiswa, & Non-mahasiswa</h3>
        </div>
        <div className="timeline stagger-group">
          <div className="t-item">
            <div className="stage-circle"><span>1</span></div>
            <div className="t-meta"><span className="t-date">27 September 2026</span><span className="t-tag online">ONLINE</span></div>
            <h4>Technical Meeting</h4>
            <p>Briefing teknis perlombaan dan penyampaian petunjuk pengerjaan secara daring.</p>
          </div>
          <div className="t-item">
            <div className="stage-circle"><span>2</span></div>
            <div className="t-meta"><span className="t-date">30 Sep – 3 Okt 2026</span><span className="t-tag online">ONLINE</span></div>
            <h4>Babak Utama / Penyisihan</h4>
            <p>Proses pengerjaan & pengumpulan karya website secara online di waktu yang ditentukan.</p>
          </div>
          <div className="t-item">
            <div className="stage-circle"><span>3</span></div>
            <div className="t-meta"><span className="t-date">10 Oktober 2026</span><span className="t-tag announcement">ONLINE</span></div>
            <h4>Pengumuman Pemenang</h4>
            <p>Pengumuman resmi daftar pemenang lomba untuk Kategori Umum.</p>
          </div>
        </div>
      </div>

      {/*  Kategori Sekolah  */}
      <div className="jadwal-cat-card reveal">
        <div className="jadwal-cat-header">
          <span className="jadwal-cat-badge sekolah">Kategori Sekolah</span>
          <h3>Tingkat Sekolah (SMP)</h3>
        </div>
        <div className="timeline stagger-group">
          <div className="t-item">
            <div className="stage-circle"><span>1</span></div>
            <div className="t-meta"><span className="t-date">27 September 2026</span><span className="t-tag online">ONLINE</span></div>
            <h4>Technical Meeting</h4>
            <p>Briefing teknis perlombaan dan arahan dari panitia secara daring.</p>
          </div>
          <div className="t-item">
            <div className="stage-circle"><span>2</span></div>
            <div className="t-meta"><span className="t-date">30 Sep – 3 Okt 2026</span><span className="t-tag online">ONLINE</span></div>
            <h4>Babak Penyisihan</h4>
            <p>Tahap awal pengerjaan karya website secara online oleh para peserta.</p>
          </div>
          <div className="t-item">
            <div className="stage-circle"><span>3</span></div>
            <div className="t-meta"><span className="t-date">10 Oktober 2026</span><span className="t-tag announcement">ONLINE</span></div>
            <h4>Pengumuman Finalis</h4>
            <p>Pengumuman daftar peserta yang berhasil lolos melaju ke Babak Final.</p>
          </div>
          <div className="t-item">
            <div className="stage-circle final-circle"><span>4</span></div>
            <div className="t-meta"><span className="t-date">12 Desember 2026</span><span className="t-tag offline">LURING (OFFLINE)</span></div>
            <h4>Babak Final</h4>
            <p>Pelaksanaan babak final secara luring (offline).</p>
            <div className="jadwal-location">📍 Tempat: SMK Muhammadiyah 1 Sukoharjo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="ketentuan" className="alt">
  <div className="wrap">
    <span className="badge">📋 Sebelum Daftar</span>
    <div className="section-head">
      <h2>Aturan mainnya gampang, kok</h2>
    </div>
    <div className="rules-grid reveal">
      <div className="rule"><span className="rule-num"><span>1</span></span><p>Peserta diperbolehkan menggunakan AI sebagai alat bantu dalam proses pengembangan aplikasi, dengan tetap mencantumkan nama tools AI yang digunakan pada saat pengumpulan karya.</p></div>
      <div className="rule"><span className="rule-num"><span>2</span></span><p>Website yang dikembangkan harus sesuai dengan tema resmi kategori masing-masing: "School Website Innovation" (SMP) atau "Innovating Education Through Technology" (Umum).</p></div>
      <div className="rule"><span className="rule-num"><span>3</span></span><p>Bahasa pemrograman, framework, dan teknologi yang digunakan dibebaskan.</p></div>
      <div className="rule"><span className="rule-num"><span>4</span></span><p>Karya harus orisinal dan belum pernah dilombakan sebelumnya.</p></div>
      <div className="rule"><span className="rule-num"><span>5</span></span><p>Peserta wajib mengumpulkan karya sesuai format dan batas waktu yang telah ditentukan oleh panitia.</p></div>
      <div className="rule"><span className="rule-num"><span>6</span></span><p>Panitia berhak mendiskualifikasi peserta yang terbukti menggunakan karya atau kode milik pihak lain tanpa izin, memperoleh bantuan di luar ketentuan lomba, memanipulasi hasil atau proses pengerjaan, bekerja sama secara tidak sah, atau melakukan tindakan lain yang memberikan keuntungan tidak wajar dalam perlombaan.</p></div>
      <div className="rule"><span className="rule-num"><span>7</span></span><p>Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</p></div>
    </div>
  </div>
</section>

<section id="daftar">
  <div className="wrap">
    <span className="badge">🚀 Cara Ikutan</span>
    <div className="section-head">
      <h2>Gampang, tinggal 4 langkah!</h2>
      <div className="pricing-pills" style={{ marginTop: "16px" }}>
        <div className="price-pill active-batch">
          <span className="batch-name b1">Batch 1</span>
          <span className="batch-status-badge is-open">
            <span className="status-live-dot"></span>
            Sedang Dibuka
          </span>
          <span className="batch-date">3 Sep – 9 Sep 2026</span>
          <span className="batch-sep">•</span>
          <span className="price-amount highlight">Rp 50.000,-</span>
        </div>
        <div className="price-pill upcoming-batch">
          <span className="batch-name b2">Batch 2</span>
          <span className="batch-status-badge is-upcoming">Segera Dibuka</span>
          <span className="batch-date">10 Sep – 25 Sep 2026</span>
          <span className="batch-sep">•</span>
          <span className="price-amount">Rp 60.000,-</span>
        </div>
      </div>
    </div>
    <div className="steps stagger-group">
      <div className="step reveal">
        <span className="step-no">1</span>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg></div>
        <h3>Bayar Biaya Pendaftaran</h3>
        <p>Lakukan pembayaran sesuai gelombang (Batch 1: 3–9 Sep / Batch 2: 10–25 Sep), lalu simpan resi / bukti transfernya.</p>
      </div>
      <div className="step reveal">
        <span className="step-no">2</span>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><line x1="7.5" y1="8" x2="16.5" y2="8"/><line x1="7.5" y1="12" x2="16.5" y2="12"/><line x1="7.5" y1="16" x2="13" y2="16"/></svg></div>
        <h3>Isi Google Form</h3>
        <p>Lengkapi data diri melalui <a href="https://docs.google.com/forms/d/e/1FAIpQLSf25pa6dUh5NIUChyN79JGO3BX4EJoLM_z6xLmf-gBo2qBM0g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--blue)', fontWeight: 800 }}>Google Form resmi</a>, pilih kategori lomba (Sekolah/Umum), dan unggah <strong>bukti pembayaran</strong>.</p>
      </div>
      <div className="step reveal">
        <span className="step-no">3</span>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><line x1="13" y1="9.5" x2="18" y2="9.5"/><line x1="13" y1="12.5" x2="18" y2="12.5"/><line x1="6.5" y1="15.5" x2="10.5" y2="15.5"/></svg></div>
        <h3>Lampirkan Identitas</h3>
        <p>Unggah Kartu Pelajar/Surat Aktif (Kategori Sekolah) atau KTM/KTP (Kategori Umum) di form.</p>
      </div>
      <div className="step reveal">
        <span className="step-no">4</span>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="7.5" y1="3" x2="7.5" y2="6.5"/><line x1="16.5" y1="3" x2="16.5" y2="6.5"/><circle cx="9" cy="14" r="1"/><circle cx="13" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></svg></div>
        <h3>Pantau TM</h3>
        <p>Cek email/kontak panitia secara berkala untuk jadwal dan link Technical Meeting online.</p>
      </div>
    </div>

    <div className="cta-banner reveal">
      <svg className="star s1" viewBox="0 0 24 24" fill="#FFD23F" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round"><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z"/></svg>
      <svg className="star s2" viewBox="0 0 24 24" fill="#FFD23F" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round"><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z"/></svg>
      <svg className="star s3" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round"><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z"/></svg>
      <h3 style={{
        color: 'var(--white)',
        fontSize: 'clamp(24px, 3.5vw, 32px)',
        textTransform: 'uppercase',
        fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
        fontWeight: 800,
        marginBottom: '8px',
        textShadow: '3px 3px 0 var(--ink)',
        lineHeight: 1.2,
      }}>
        Udah siap unjuk karya?
      </h3>
      <p style={{
        color: 'rgba(255,255,255,0.92)',
        fontSize: '15px',
        fontWeight: 700,
        maxWidth: '620px',
        margin: '0 auto 24px',
        textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
      }}>
        Lakukan pembayaran, lalu isi formulir pendaftarannya!
      </p>
      <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSf25pa6dUh5NIUChyN79JGO3BX4EJoLM_z6xLmf-gBo2qBM0g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Daftar via Google Form 🚀</a>
    </div>
  </div>
</section>

      {/* ---------- SPONSORED BY & PARTNERS BANNER (ACCENT-RICH NEO-BRUTALIST) ---------- */}
      <section className="sponsors-section" style={{ padding: '24px 0 80px' }}>
        <div className="wrap">
          <div className="sponsors-banner reveal" style={{
            position: 'relative',
            backgroundColor: 'var(--blue)',
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 2px, transparent 2.5px)',
            backgroundSize: '18px 18px',
            border: '3px solid var(--ink)',
            borderRadius: '28px',
            padding: '44px 28px 48px',
            textAlign: 'center',
            overflow: 'hidden',
            boxShadow: '8px 8px 0 var(--ink)',
          }}>
            {/* Playful Floating Comic Stars */}
            <svg className="star s1" viewBox="0 0 24 24" fill="#FFD23F" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round" style={{ position: 'absolute', top: '20px', left: '28px', width: '28px', height: '28px', transform: 'rotate(-15deg)' }}><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z" /></svg>
            <svg className="star s2" viewBox="0 0 24 24" fill="#FFD23F" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round" style={{ position: 'absolute', bottom: '24px', right: '36px', width: '28px', height: '28px', transform: 'rotate(20deg)' }}><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z" /></svg>
            <svg className="star s3" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round" style={{ position: 'absolute', top: '24px', right: '70px', width: '20px', height: '20px', transform: 'rotate(12deg)' }}><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z" /></svg>
            <svg className="star s4" viewBox="0 0 24 24" fill="#FFD23F" stroke="#16213E" strokeWidth="1.2" strokeLinejoin="round" style={{ position: 'absolute', bottom: '28px', left: '44px', width: '20px', height: '20px', transform: 'rotate(-25deg)' }}><path d="M12 2 L14.7 9 L22 9.5 L16.3 14.2 L18.2 21.5 L12 17.3 L5.8 21.5 L7.7 14.2 L2 9.5 L9.3 9 Z" /></svg>

            {/* Top Pill Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              marginBottom: '14px',
              background: 'var(--yellow)',
              padding: '7px 20px',
              borderRadius: '999px',
              border: '2.5px solid var(--ink)',
              boxShadow: '3.5px 3.5px 0 var(--ink)',
            }}>
              🤝 Official Sponsor & Partners
            </div>

            {/* Banner Title & Description */}
            <h3 style={{
              color: 'var(--white)',
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              textTransform: 'uppercase',
              fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
              fontWeight: 800,
              marginBottom: '8px',
              textShadow: '3px 3px 0 var(--ink)',
              lineHeight: 1.2,
            }}>
              Didukung & Diselenggarakan Oleh
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.92)',
              fontSize: '15px',
              fontWeight: 700,
              maxWidth: '620px',
              margin: '0 auto 32px',
              textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
            }}>
              Kolaborasi strategis untuk mencetak talenta web development & inovasi AI masa depan di Solo Raya
            </p>

            {/* Sponsor Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '22px',
              maxWidth: '960px',
              margin: '0 auto',
            }}>
              {/* Card 1: Telkomsel (Main Sponsor) */}
              <div style={{
                background: 'var(--white)',
                border: '3px solid var(--ink)',
                borderRadius: '20px',
                padding: '24px 20px',
                boxShadow: '5px 5px 0 var(--ink)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}>
                <span style={{
                  fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: '#FF5964',
                  color: 'var(--white)',
                  border: '1.5px solid var(--ink)',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  boxShadow: '2px 2px 0 var(--ink)',
                }}>
                  Sponsored by
                </span>
                <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="/images/competition/1.png"
                    alt="Telkomsel"
                    style={{ maxHeight: '50px', maxWidth: '180px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{
                  fontSize: '12.5px',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  borderTop: '2px dashed #E2E8F0',
                  paddingTop: '8px',
                  width: '100%',
                }}>
                  Telkomsel Indonesia
                </div>
              </div>

              {/* Card 2: SMK Muhammadiyah 1 Sukoharjo */}
              <div style={{
                background: 'var(--white)',
                border: '3px solid var(--ink)',
                borderRadius: '20px',
                padding: '24px 20px',
                boxShadow: '5px 5px 0 var(--ink)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}>
                <span style={{
                  fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'var(--yellow)',
                  color: 'var(--ink)',
                  border: '1.5px solid var(--ink)',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  boxShadow: '2px 2px 0 var(--ink)',
                }}>
                  Venue & Partner
                </span>
                <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="/images/competition/2.png"
                    alt="SMK Muhammadiyah 1 Sukoharjo"
                    style={{ maxHeight: '52px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{
                  fontSize: '12.5px',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  borderTop: '2px dashed #E2E8F0',
                  paddingTop: '8px',
                  width: '100%',
                }}>
                  SMK Muhammadiyah 1 Sukoharjo
                </div>
              </div>

              {/* Card 3: M-One Solution Software House */}
              <div style={{
                background: 'var(--white)',
                border: '3px solid var(--ink)',
                borderRadius: '20px',
                padding: '24px 20px',
                boxShadow: '5px 5px 0 var(--ink)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}>
                <span style={{
                  fontFamily: "var(--font-baloo), 'Baloo 2', sans-serif",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'var(--blue-light)',
                  color: 'var(--blue)',
                  border: '1.5px solid var(--ink)',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  boxShadow: '2px 2px 0 var(--ink)',
                }}>
                  Organized by
                </span>
                <div style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src="/images/competition/3.png"
                    alt="M-One Solution"
                    style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div style={{
                  fontSize: '12.5px',
                  fontWeight: 800,
                  color: 'var(--ink)',
                  borderTop: '2px dashed #E2E8F0',
                  paddingTop: '8px',
                  width: '100%',
                }}>
                  M-One Solution Software House
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
