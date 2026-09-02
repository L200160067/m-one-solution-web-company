"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../config/site';
import { useCdnUrl } from '@/lib/useCdnUrl';
import { WpImage } from '@/components/image/WpImage';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isPaketDropdownOpen, setIsPaketDropdownOpen] = useState(false);
  const pathname = usePathname();

  const rawLogo = (siteConfig.logo as any)?.src || siteConfig.logo;
  const logoUrl = useCdnUrl(rawLogo);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/about' },
    { name: 'Layanan', href: '/services' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Kontak', href: '/contact' },
    { name: 'Berita', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
        ? 'bg-slate-950/90 backdrop-blur-md shadow-sm py-4 border-b border-white/5'
        : 'bg-slate-950/80 backdrop-blur-sm py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <WpImage
              src={logoUrl}
              alt={`${siteConfig.name} Logo`}
              width={48}
              height={48}
              priority
              className="h-10 sm:h-12 w-auto object-contain mix-blend-lighten"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none mb-1">
                M-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solution</span>
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-400 tracking-[0.2em] uppercase leading-none">
                Software House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Paket Web Dropdown Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsPaketDropdownOpen(true)}
              onMouseLeave={() => setIsPaketDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors py-2"
                onClick={() => setIsPaketDropdownOpen(!isPaketDropdownOpen)}
              >
                Paket Cepat
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPaketDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPaketDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-1 w-64"
                >
                <div
                  className="bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden animate-fade-in"
                >
                  <Link
                    href="/layanan/jasa-pembuatan-website-sekolah"
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                    onClick={() => setIsPaketDropdownOpen(false)}
                  >
                    <div className="font-bold text-emerald-400 mb-1">Paket Web Sekolah</div>
                    <div className="text-xs text-slate-500">Website & Sistem PPDB Online</div>
                  </Link>
                  <Link
                    href="/layanan/jasa-erp-umkm"
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsPaketDropdownOpen(false)}
                  >
                    <div className="font-bold text-blue-400 mb-1">Paket Web UMKM</div>
                    <div className="text-xs text-slate-500">Toko Online & Sistem Kasir (POS)</div>
                  </Link>
                </div>
                </div>
              )}
            </div>

            {/* Event Dropdown Desktop */}
            <div
              className="relative"
              onMouseEnter={() => setIsEventDropdownOpen(true)}
              onMouseLeave={() => setIsEventDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
              >
                Event
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isEventDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isEventDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-1 w-64"
                >
                <div
                  className="bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden animate-fade-in"
                >
                  <Link
                    href="/coding-competition"
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                    onClick={() => setIsEventDropdownOpen(false)}
                  >
                    <div className="font-bold text-yellow-400 mb-1 flex items-center justify-between">
                      <span>Coding Competition</span>
                      <span className="text-[10px] bg-yellow-400/20 text-yellow-300 font-bold px-1.5 py-0.5 rounded">NEW</span>
                    </div>
                    <div className="text-xs text-slate-400">Telkomsel x M-One 2026</div>
                  </Link>
                  <Link
                    href="/student-agency"
                    className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsEventDropdownOpen(false)}
                  >
                    <div className="font-bold text-pink-400 mb-1">Student Agency Incubator</div>
                    <div className="text-xs text-slate-500">Freelance website sebelum lulus</div>
                  </Link>
                </div>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Hubungi Kami
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 bg-slate-900 shadow-xl border-t border-white/10 lg:hidden animate-fade-in"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Paket Web Dropdown Mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-emerald-400 hover:text-emerald-300 rounded-lg transition-colors"
                onClick={() => setIsPaketDropdownOpen(!isPaketDropdownOpen)}
              >
                Paket Cepat
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isPaketDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPaketDropdownOpen && (
                <div className="overflow-hidden bg-white/5 rounded-lg mx-3 animate-fade-in">
                  <div className="py-2">
                    <Link
                      href="/layanan/jasa-pembuatan-website-sekolah"
                      className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-bold text-emerald-400">Paket Web Sekolah</div>
                    </Link>
                    <Link
                      href="/layanan/jasa-erp-umkm"
                      className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-bold text-blue-400">Paket Web UMKM</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Event Dropdown Mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
              >
                Event
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isEventDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isEventDropdownOpen && (
                <div className="overflow-hidden animate-fade-in">
                  <div className="pl-6 pr-3 py-1 space-y-1">
                    <Link
                      href="/coding-competition"
                      className="block px-3 py-2 text-sm font-medium text-yellow-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-b border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-bold flex items-center gap-1.5">
                        <span>Coding Competition 2026</span>
                        <span className="text-[10px] bg-yellow-400/20 text-yellow-300 font-bold px-1.5 py-0.5 rounded">NEW</span>
                      </div>
                      <div className="text-xs text-slate-400">Telkomsel x M-One</div>
                    </Link>
                    <Link
                      href="/student-agency"
                      className="block px-3 py-2 text-sm font-medium text-pink-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="font-bold">Student Agency Incubator</div>
                      <div className="text-xs text-slate-400">Freelance website sebelum lulus</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="pt-4 px-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-xl hover:bg-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
