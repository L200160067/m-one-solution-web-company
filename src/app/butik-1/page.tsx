"use client";

import { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingBag,
  ShoppingCart,
  Search,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Store,
  CheckCircle,
  ShieldCheck,
  Truck,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Shirt,
  Camera,
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: 'cardigans' | 'polo' | 'vests' | 'bottoms';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  badgeColor?: string;
  image: string;
  imageAlt: string;
  colors: { bg: string; title: string; active?: boolean }[];
}

const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Vintage Floral Knit Cardigan - Buttercream',
    category: 'cardigans',
    price: 189000,
    originalPrice: 229000,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Limited Drop',
    badgeColor: 'bg-[#ffdad9] text-[#2f1314]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChpmUwFWfR6_PqUh1n8gszItLkCOszeX8DS_zlYz5gg5sArwZ1GFwG3OARgnC0P5j37UtmL3iRcm09gDzyT27htyW-GHNDgXZYPRvcx1AcQ876uezXrr9VSSfebRgFpsP_ZGsT6i8nOpVsWZ9gnLgpy07vJK5kQBvZvlPL59Vmi6aGBewAQj8ltcLKYDtxzaQMTUTYvSjzDlNfA4BUGnRDuGqStU6tJhcQwGJOR39c2nMbPpScTenRHw',
    imageAlt: 'Vintage floral embroidered knit cardigan in buttercream yellow',
    colors: [
      { bg: '#fbf4d9', title: 'Buttercream', active: true },
      { bg: '#e8d4cf', title: 'Dusty Pink' },
      { bg: '#dde5d9', title: 'Matcha' },
    ],
  },
  {
    id: 'prod-2',
    title: 'Cloud Oversized Polo Sweater - Soft Mint',
    category: 'polo',
    price: 169000,
    originalPrice: 199000,
    rating: 5.0,
    reviewsCount: 204,
    badge: 'Best Seller',
    badgeColor: 'bg-[#eee1c7] text-[#211b0b]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ',
    imageAlt: 'Oversized polo sweater in soft mint green with cream stripes',
    colors: [
      { bg: '#c9e4de', title: 'Soft Mint', active: true },
      { bg: '#f8f5ee', title: 'Cream' },
      { bg: '#d2e2ec', title: 'Sky Blue' },
    ],
  },
  {
    id: 'prod-3',
    title: 'Margot Ribbed Knit Vest - Lilac Dreams',
    category: 'vests',
    price: 139000,
    originalPrice: 159000,
    rating: 4.8,
    reviewsCount: 89,
    badge: 'New Drop',
    badgeColor: 'bg-[#ffdad9] text-[#2f1314]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA',
    imageAlt: 'Lilac purple cable-knit sweater vest layered over blouse',
    colors: [
      { bg: '#dfd0e8', title: 'Lilac', active: true },
      { bg: '#e8e2d5', title: 'Oatmeal' },
      { bg: '#fae8b4', title: 'Butter' },
    ],
  },
  {
    id: 'prod-4',
    title: 'Everyday Fluid Wide-Leg Pants - Oat Vanilla',
    category: 'bottoms',
    price: 159000,
    originalPrice: 179000,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Restock',
    badgeColor: 'bg-[#f0ede9] text-[#1c1c19]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmDyT5g6Y_6kK_i6Yb9YglY7QEGPHLr3_MnLMpnwfyFQlAWoFWucKxltoStygxEiI1UkBHCv_Br6-E_0FRcA2AwVsq0CBuzPYK71YfmsQHZoVT1Daf1yw6fSV5GA5Ys6HqoJpsdoBIkV2jVOzwJpDia28KKV-oVcbL06YByCQfZMwKtgeEJdGqeVjI0VRWl_sSBNARAQQ78IX2wORz1YSpA3KebWHG2TcGWdtZ-5wYrljHWh_gd0nkCg',
    imageAlt: 'Fluid tailored trousers in oat vanilla cream',
    colors: [
      { bg: '#eee9df', title: 'Oat Vanilla', active: true },
      { bg: '#3c2a23', title: 'Espresso' },
      { bg: '#bfcbbe', title: 'Muted Sage' },
    ],
  },
];

export default function ButikPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [wishlist, setWishlist] = useState<Set<string>>(new Set(['prod-1', 'prod-2', 'prod-3']));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const toggleWishlist = (id: string) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f4] text-[#1c1c19] antialiased selection:bg-[#ffdad9] selection:text-[#2f1314]">
      
      {/* Top Announcement Bar */}
      <aside aria-label="Pengumuman" className="bg-[#ffdad9]/70 border-b border-[#ecbaba]/50 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-[#2f1314]">
          <ShoppingBag className="w-4 h-4 text-[#7b5455] shrink-0" />
          <span>Offline Pop-up Weekend di M Bloc Space Jakarta! Gratis Ongkir via Shopee &amp; WhatsApp</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#7b5455]"></span>
          <a className="hidden sm:inline font-bold underline decoration-[#7b5455]/60 underline-offset-2 hover:text-[#7b5455] transition-colors" href="#popup-experience">
            Lihat Lokasi Booth
          </a>
        </div>
      </aside>

      {/* Sticky Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#fcf9f4]/95 backdrop-blur-xl border-b border-[#e5e2dd]/70 transition-all duration-300">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <img src="/images/butik-1/logo.svg" alt="Sazmoon Brand Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-105"/>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[#f0ede9]/90 border border-[#e5e2dd]">
            <a 
              href="#catalog" 
              onClick={() => setActiveCategory('all')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-[#2c1d18] text-white shadow-sm' : 'text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604]'}`}
            >
              All Collections
            </a>
            <a 
              href="#catalog" 
              onClick={() => setActiveCategory('cardigans')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === 'cardigans' ? 'bg-[#2c1d18] text-white shadow-sm' : 'text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604]'}`}
            >
              Knitwear &amp; Cardigans
            </a>
            <a 
              href="#catalog" 
              onClick={() => setActiveCategory('polo')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === 'polo' ? 'bg-[#2c1d18] text-white shadow-sm' : 'text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604]'}`}
            >
              Polo Knits
            </a>
            <a 
              href="#catalog" 
              onClick={() => setActiveCategory('vests')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === 'vests' ? 'bg-[#2c1d18] text-white shadow-sm' : 'text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604]'}`}
            >
              Tops &amp; Vests
            </a>
            <a 
              href="#catalog" 
              onClick={() => setActiveCategory('bottoms')} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${activeCategory === 'bottoms' ? 'bg-[#2c1d18] text-white shadow-sm' : 'text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604]'}`}
            >
              Bottoms
            </a>
            <a href="#popup-experience" className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#4f4541] hover:bg-[#ebe8e3] hover:text-[#120604] transition-all whitespace-nowrap">
              Pop-up Events
            </a>
          </nav>

          {/* Right Action Hub */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-full px-3.5 py-1.5 border border-[#e5e2dd] shadow-sm focus-within:border-[#7b5455] transition-all">
              <Search className="w-4 h-4 text-[#817471] shrink-0 mr-2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari knitwear..." 
                className="bg-transparent text-xs text-[#1c1c19] placeholder-[#817471] focus:outline-none w-28 lg:w-36"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-[#817471] hover:text-[#120604] text-xs ml-1">
                  ✕
                </button>
              )}
            </div>

            {/* Wishlist Button */}
            <button 
              aria-label="Wishlist" 
              onClick={() => {
                alert(`Anda memiliki ${wishlist.size} item di daftar Wishlist!`);
              }}
              className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e5e2dd] text-[#4f4541] hover:text-[#7b5455] hover:border-[#7b5455] transition-all shadow-sm"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 rounded-full bg-[#7b5455] text-white text-[10px] font-bold">
                {wishlist.size}
              </span>
            </button>

            {/* CTA Order Shopee/WA */}
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Sazmoon,%20saya%20tertarik%20dengan%20koleksi%20knitwear" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 bg-[#2c1d18] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#120604] transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Order via WA</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Buka Menu" 
              className="xl:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e5e2dd] text-[#1c1c19]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#e5e2dd] bg-[#fcf9f4] px-6 py-4 space-y-2">
            <div className="mb-3">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari knitwear..." 
                className="w-full bg-white border border-[#e5e2dd] rounded-full px-4 py-2 text-xs text-[#1c1c19] focus:outline-none focus:border-[#7b5455]"
              />
            </div>
            <button 
              onClick={() => { setActiveCategory('all'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Semua Koleksi
            </button>
            <button 
              onClick={() => { setActiveCategory('cardigans'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Knitwear &amp; Cardigans
            </button>
            <button 
              onClick={() => { setActiveCategory('polo'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Polo Knits
            </button>
            <button 
              onClick={() => { setActiveCategory('vests'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Tops &amp; Vests
            </button>
            <button 
              onClick={() => { setActiveCategory('bottoms'); setMobileMenuOpen(false); }} 
              className="block w-full text-left py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Bottoms &amp; Pants
            </button>
            <a 
              href="#popup-experience" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-sm font-semibold text-[#1c1c19] hover:text-[#7b5455]"
            >
              Jadwal Pop-up Booth
            </a>
            <a 
              href="https://shopee.co.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center py-2.5 mt-2 rounded-full bg-[#2c1d18] text-white text-xs font-bold"
            >
              Kunjungi Shopee Mall Sazmoon
            </a>
          </div>
        )}
      </header>

      <main className="w-full">
        
        {/* Breadcrumb & Badge */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#4f4541] font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-[#120604] font-bold">Katalog Resmi</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#817471]" />
              <span>Autumn / Winter Capsule</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#817471]" />
              <span className="text-[#7b5455] font-semibold">Everyday Modest Knits</span>
            </div>
            <div className="flex items-center gap-2 text-[#7b5455] bg-[#ffdad9]/60 border border-[#ecbaba]/60 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#7b5455] animate-ping"></span>
              <span>Booth M Bloc Space Buka Setiap Weekend!</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdad9] text-[#2f1314] text-xs font-bold shadow-sm">
                <span>✨ New Drop: Autumn / Winter 2025 Capsule</span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#120604] tracking-tight leading-[1.12]">
                Cozy Up in Sweet Knits &amp; Everyday Modest Staples
              </h1>

              <p className="text-base sm:text-lg text-[#4f4541] max-w-xl leading-relaxed font-normal">
                Kurasi kardigan rajut premium, floral vintage embroidery, dan oversized modesty pieces yang lembut di kulit. Didesain dengan palet warna pastel hangat untuk gaya harian yang elegan dan nyaman.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#catalog" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2c1d18] text-white text-sm font-bold hover:bg-[#120604] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Jelajahi Katalog</span>
                </a>
                <a href="#popup-experience" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#120604] border border-[#e5e2dd] text-sm font-bold hover:bg-[#eee1c7]/40 shadow-sm transition-all transform hover:-translate-y-0.5">
                  <Store className="w-4 h-4 text-[#7b5455]" />
                  <span>Kunjungi Pop-up Booth</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#e5e2dd]/70">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f3ee] border border-[#e5e2dd]/60">
                  <CheckCircle className="w-5 h-5 text-[#7b5455] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1c19]">100% Breathable Cotton Yarn</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f3ee] border border-[#e5e2dd]/60">
                  <ShieldCheck className="w-5 h-5 text-[#7b5455] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1c19]">Shopee Verified Mall Brand</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f3ee] border border-[#e5e2dd]/60">
                  <Truck className="w-5 h-5 text-[#7b5455] shrink-0" />
                  <span className="text-xs font-semibold text-[#1c1c19]">Pengiriman Cepat 24 Jam</span>
                </div>
              </div>
            </div>

            {/* Right Visual Feature */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glow Accent */}
                <div className="absolute -inset-4 rounded-3xl bg-[#ffdad9]/40 blur-2xl -z-10"></div>
                
                <div className="relative overflow-hidden rounded-[28px] shadow-2xl border border-[#e5e2dd] bg-[#f0ede9]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw" 
                    alt="Model mengenakan Sazmoon Buttercream Cable Cardigan di cafe bernuansa estetik hangat" 
                    className="w-full h-[460px] sm:h-[540px] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Pill */}
                  <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between sm:justify-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#d1c5ac] ring-4 ring-[#eee1c7]"></span>
                      <div>
                        <p className="text-xs font-bold text-[#120604]">Featured Look</p>
                        <p className="text-xs text-[#4f4541]">Buttercream Cable Cardigan • Rp 189.000</p>
                      </div>
                    </div>
                    <a href="#catalog" className="p-2 rounded-full bg-[#2c1d18] text-white hover:bg-[#120604] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Catalog Section with Filter Tabs */}
        <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#7b5455] uppercase">Koleksi Pilihan</span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#120604] mt-1">Sazmoon Knit &amp; Modest Catalog</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4f4541] max-w-md">
              Semua produk dibuat dengan rajutan benang katun lembut anti-gerah, jahitan rapi, dan pola modest yang longgar.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#f6f3ee] p-3 sm:p-4 rounded-2xl border border-[#e5e2dd] mb-8">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${activeCategory === 'all' ? 'bg-[#7b5455] text-white' : 'bg-white text-[#1c1c19] border border-[#e5e2dd] hover:bg-[#ffdad9]/50'}`}
              >
                Semua Produk ({PRODUCTS.length})
              </button>
              <button 
                onClick={() => setActiveCategory('cardigans')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'cardigans' ? 'bg-[#7b5455] text-white' : 'bg-white text-[#1c1c19] border border-[#e5e2dd] hover:bg-[#ffdad9]/50'}`}
              >
                Floral Cardigans
              </button>
              <button 
                onClick={() => setActiveCategory('polo')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'polo' ? 'bg-[#7b5455] text-white' : 'bg-white text-[#1c1c19] border border-[#e5e2dd] hover:bg-[#ffdad9]/50'}`}
              >
                Polo Knits
              </button>
              <button 
                onClick={() => setActiveCategory('vests')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'vests' ? 'bg-[#7b5455] text-white' : 'bg-white text-[#1c1c19] border border-[#e5e2dd] hover:bg-[#ffdad9]/50'}`}
              >
                Sweater Vests
              </button>
              <button 
                onClick={() => setActiveCategory('bottoms')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeCategory === 'bottoms' ? 'bg-[#7b5455] text-white' : 'bg-white text-[#1c1c19] border border-[#e5e2dd] hover:bg-[#ffdad9]/50'}`}
              >
                Bottoms &amp; Skirts
              </button>
            </div>

            {/* Quick Sort / Status Note */}
            <div className="text-xs text-[#817471] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Menampilkan {filteredProducts.length} produk siap kirim</span>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#e5e2dd]">
              <Search className="w-10 h-10 text-[#817471] mx-auto opacity-50" />
              <p className="mt-2 text-sm font-semibold text-[#120604]">Tidak ada produk yang cocok dengan pencarian</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2 rounded-full bg-[#2c1d18] text-white text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => {
                const isFav = wishlist.has(product.id);
                return (
                  <article 
                    key={product.id}
                    className="product-card group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e5e2dd] shadow-sm"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f3ee]">
                      <img 
                        src={product.image} 
                        alt={product.imageAlt} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-sm ${product.badgeColor || 'bg-[#ffdad9] text-[#2f1314]'}`}>
                            {product.badge}
                          </span>
                        </div>
                      )}
                      <button 
                        aria-label="Simpan ke wishlist" 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className={`wishlist-toggle absolute top-3 right-3 w-9 h-9 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${isFav ? 'text-rose-500' : 'text-[#4f4541] hover:text-[#7b5455]'}`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-xs text-[#4f4541]">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                          <span className="font-bold text-[#120604]">{product.rating.toFixed(1)}</span>
                          <span className="text-[#817471]">({product.reviewsCount} ulasan)</span>
                        </div>
                        <h3 className="font-headline text-lg text-[#120604] mt-1 font-semibold group-hover:text-[#7b5455] transition-colors line-clamp-2">
                          {product.title}
                        </h3>
                        {/* Color Swatches */}
                        <div className="flex items-center gap-1.5 mt-3">
                          {product.colors.map((col, idx) => (
                            <span 
                              key={idx}
                              style={{ backgroundColor: col.bg }} 
                              className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${col.active ? 'ring-1 ring-[#120604]/20' : ''}`} 
                              title={col.title}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#f0ede9] flex flex-col gap-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-[#120604]">{formatRupiah(product.price)}</span>
                          <span className="text-xs text-[#817471] line-through">{formatRupiah(product.originalPrice)}</span>
                        </div>
                        <a 
                          href={`https://wa.me/6281234567890?text=Halo%20Sazmoon,%20saya%20mau%20order%20${encodeURIComponent(product.title)}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full py-2.5 rounded-full bg-[#2c1d18] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 hover:bg-[#120604] transition-colors"
                        >
                          <ShoppingCart className="w-4 h-4 shrink-0" />
                          <span>Order via Shopee / WA</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Catalog Load More / Shopee Notice */}
          <div className="mt-12 text-center">
            <a 
              href="https://shopee.co.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f0ede9] text-[#120604] text-xs font-bold hover:bg-[#ebe8e3] border border-[#e5e2dd] transition-all shadow-sm"
            >
              <span>Lihat 32+ Koleksi Lengkap di Shopee Mall</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#817471] mt-2.5">
              ✨ Gratis Ongkir s/d Rp 40.000 &amp; Ekstra Cashback Voucher tersedia di checkout Shopee.
            </p>
          </div>

        </section>

        {/* Lookbook Editorial Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e5e2dd]/70">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#7b5455] uppercase">Style Inspo</span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#120604] mt-1">Tokyo &amp; Seoul Street Mood</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4f4541] max-w-md">
              Padu padan outfit rajut modesty untuk kuliah, hangout akhir pekan, atau ngopi santai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Look 1 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#f0ede9] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw" 
                alt="Autumn Afternoon Cafe Walk with Buttercream Knit" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120604]/80 via-[#120604]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold tracking-widest text-[#ffdad9] uppercase">Look 01</span>
                <h3 className="font-headline text-2xl font-bold mt-1">Autumn Afternoon Cafe Walk</h3>
                <p className="text-xs text-white/80 mt-1">Buttercream Knit + Fluid Pleated Skirt</p>
              </div>
            </div>

            {/* Look 2 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#f0ede9] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ" 
                alt="City Bookstore & Art Gallery Look" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120604]/80 via-[#120604]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold tracking-widest text-[#ffdad9] uppercase">Look 02</span>
                <h3 className="font-headline text-2xl font-bold mt-1">City Bookstore &amp; Art Gallery</h3>
                <p className="text-xs text-white/80 mt-1">Mint Polo Sweater + Straight Denim</p>
              </div>
            </div>

            {/* Look 3 */}
            <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#f0ede9] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA" 
                alt="Weekend Flower Market Mood" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120604]/80 via-[#120604]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold tracking-widest text-[#ffdad9] uppercase">Look 03</span>
                <h3 className="font-headline text-2xl font-bold mt-1">Weekend Flower Market Mood</h3>
                <p className="text-xs text-white/80 mt-1">Lilac Cable Vest + White Cotton Shirt</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offline Pop-up Highlight (Bento Grid) */}
        <section id="popup-experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffdad9] text-[#2f1314] text-xs font-bold uppercase tracking-wider mb-2">
              Offline Experience
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#120604]">
              Temui Sazmoon Offline — Kunjungi Pop-up Booth Kami
            </h2>
            <p className="text-sm sm:text-base text-[#4f4541] max-w-xl mt-2">
              Rasakan langsung kelembutan tekstur rajut katun, coba fitting langsung di cermin estetik, dan nikmati hadiah tote bag eksklusif di booth kami.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Large Featured Booth (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-[#e5e2dd] shadow-sm flex flex-col md:flex-row group">
              <div className="md:w-1/2 relative min-h-[280px] md:min-h-full overflow-hidden bg-[#f6f3ee]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVPx25l7g67N9JsX4jhp2ZMxscTE_It5VRHyDd0lNVGjLzbtxSn0lbfZFh0jMRk7AmC3Vi1wtjMwmLfJoPrBS8IGNzHVzMFAbTuIZTH4nJe7M4YJ-nOTTih7e9YcAIg_F3TxGlw_03MyTkqNB3IBVzkdSOKAjDeMCJ9gIxTBY9_i1K2xqACd9LyASWNo5vJHDGd1PhG4upcNpkI0uAS0-jq3UllFLnBPUBkatF4EkCWs5tZOHvMKlqWw" 
                  alt="Sazmoon cozy pop-up boutique booth di M Bloc Space Jakarta" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#2c1d18] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                  Buka Setiap Weekend
                </div>
              </div>
              
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[#7b5455] text-xs font-bold">
                    <MapPin className="w-4 h-4 text-[#7b5455] shrink-0" />
                    <span>M Bloc Space, Jakarta Selatan</span>
                  </div>
                  <h3 className="font-headline text-2xl text-[#120604] font-semibold">
                    Sazmoon Aesthetic Market Booth
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f4541] leading-relaxed">
                    Jumat — Minggu • 10.00 — 21.00 WIB<br/>
                    Kawasan Creative Hall A, Depan Union Yoga.
                  </p>
                  
                  <div className="p-3.5 rounded-2xl bg-[#ffdad9]/40 border border-[#ecbaba]/50 space-y-1">
                    <p className="text-xs text-[#7b5455] font-bold">Bonus Pop-up:</p>
                    <p className="text-xs text-[#2f1314]">
                      Free Exclusive Sazmoon Canvas Tote Bag untuk pembelian min. Rp 300.000 di booth!
                    </p>
                  </div>
                </div>

                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#120604] hover:text-[#7b5455] transition-colors pt-2">
                  <span>Buka Petunjuk Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Stacked Bento Cards (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Upcoming Location */}
              <div className="p-6 rounded-3xl bg-[#eee1c7] text-[#211b0b] border border-[#d1c5ac]/50 shadow-sm flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#d1c5ac]/60 text-xs font-bold">
                      Next Destination
                    </span>
                    <Calendar className="w-5 h-5 text-[#211b0b]" />
                  </div>
                  <h4 className="font-headline text-xl font-semibold mt-3">
                    Bandung Creative Hub Pop-up
                  </h4>
                  <p className="text-xs text-[#211b0b]/80 mt-1">
                    15 — 18 November 2025 • Fashion Pavilion Booth A-12
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold underline decoration-[#211b0b]/40 underline-offset-2">
                    Nantikan tiket VIP preview early-access
                  </span>
                </div>
              </div>

              {/* Pop-up Perks */}
              <div className="p-6 rounded-3xl bg-[#f6f3ee] border border-[#e5e2dd] shadow-sm flex flex-col justify-between flex-1 space-y-3">
                <div className="flex items-center gap-2 text-[#7b5455]">
                  <Shirt className="w-5 h-5 text-[#7b5455]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Pop-up Experience</span>
                </div>
                <h4 className="font-headline text-lg font-semibold text-[#120604]">
                  Fitting Booth &amp; Mini Photo Zone
                </h4>
                <p className="text-xs text-[#4f4541] leading-relaxed">
                  Coba seluruh warna kardigan dengan cermin full body estetik dan lighting lembut yang ramah kamera.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Community & Instagram Wall */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e5e2dd]/70">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#7b5455] uppercase">#SazmoonGirls</span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#120604] mt-1">Loved by Modest Community</h2>
            <p className="text-xs sm:text-sm text-[#4f4541] mt-2">
              Tag @sazmoon.co di Instagram dan OOTD terbaikmu berkesempatan mendapatkan voucher belanja bulanan Rp 500.000!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Tile 1 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-[#f6f3ee] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ" 
                alt="Customer wearing Sazmoon knitwear with sunglasses" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#120604]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                <Heart className="w-6 h-6 text-white fill-white" />
                <span className="text-xs font-bold mt-1">1,420 likes</span>
                <span className="text-xs font-medium text-white/90">@amanda.hijabstyle</span>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-[#f6f3ee] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpmUwFWfR6_PqUh1n8gszItLkCOszeX8DS_zlYz5gg5sArwZ1GFwG3OARgnC0P5j37UtmL3iRcm09gDzyT27htyW-GHNDgXZYPRvcx1AcQ876uezXrr9VSSfebRgFpsP_ZGsT6i8nOpVsWZ9gnLgpy07vJK5kQBvZvlPL59Vmi6aGBewAQj8ltcLKYDtxzaQMTUTYvSjzDlNfA4BUGnRDuGqStU6tJhcQwGJOR39c2nMbPpScTenRHw" 
                alt="Flatlay of Sazmoon cardigan with pastel accessories" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#120604]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                <Heart className="w-6 h-6 text-white fill-white" />
                <span className="text-xs font-bold mt-1">980 likes</span>
                <span className="text-xs font-medium text-white/90">@zahra.modesty</span>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-[#f6f3ee] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA" 
                alt="Customer laughing at outdoor coffee shop in Sazmoon cardigan" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#120604]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                <Heart className="w-6 h-6 text-white fill-white" />
                <span className="text-xs font-bold mt-1">2,105 likes</span>
                <span className="text-xs font-medium text-white/90">@hana.dailyfit</span>
              </div>
            </div>

            {/* Tile 4 */}
            <div className="group relative rounded-2xl overflow-hidden aspect-square bg-[#f6f3ee] border border-[#e5e2dd] shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDyT5g6Y_6kK_i6Yb9YglY7QEGPHLr3_MnLMpnwfyFQlAWoFWucKxltoStygxEiI1UkBHCv_Br6-E_0FRcA2AwVsq0CBuzPYK71YfmsQHZoVT1Daf1yw6fSV5GA5Ys6HqoJpsdoBIkV2jVOzwJpDia28KKV-oVcbL06YByCQfZMwKtgeEJdGqeVjI0VRWl_sSBNARAQQ78IX2wORz1YSpA3KebWHG2TcGWdtZ-5wYrljHWh_gd0nkCg" 
                alt="Customer carrying Sazmoon tote bag and lilac vest" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#120604]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-white">
                <Heart className="w-6 h-6 text-white fill-white" />
                <span className="text-xs font-bold mt-1">874 likes</span>
                <span className="text-xs font-medium text-white/90">@nadira_chic</span>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ffdad9] text-[#2f1314] text-xs font-bold hover:bg-[#ecbaba] transition-all shadow-sm">
              <Camera className="w-4 h-4 shrink-0" />
              <span>Ikuti @sazmoon.co di Instagram ↗</span>
            </a>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f6f3ee] border-t border-[#e5e2dd] mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden p-0.5 border border-[#e5e2dd]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-full h-full" fill="none">
                    <path d="M20 6C12 6 6 12 6 20C6 28 12 34 20 34C16 31 13 26 13 20C13 14 16 9 20 6Z" fill="#F4C2C2"/>
                    <path d="M22 10C22.5 12.5 24.5 14 27 14.5C24.5 15 22.5 16.5 22 19C21.5 16.5 19.5 15 17 14.5C19.5 14 21.5 12.5 22 10Z" fill="#E6A8A8"/>
                  </svg>
                </div>
                <span className="font-headline text-xl font-bold text-[#120604]">sazmoon</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4f4541] leading-relaxed max-w-sm">
                Koleksi rajut modest dengan sentuhan estetika kontemporer Tokyo &amp; Seoul. Menghadirkan kenyamanan sehari-hari yang anggun dan berkarakter.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffdad9] text-[#2f1314] text-[11px] font-bold">Tokyo &amp; Seoul Inspo</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eee1c7] text-[#211b0b] text-[11px] font-bold">Modest Fits</span>
              </div>
            </div>

            {/* Links 1 */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#120604] uppercase tracking-wider">Koleksi &amp; Panduan</h4>
              <ul className="space-y-2 text-xs text-[#4f4541]">
                <li><a href="#catalog" className="hover:text-[#120604] transition-colors">Semua Lookbook</a></li>
                <li><a href="#" className="hover:text-[#120604] transition-colors">Panduan Ukuran (Size Chart)</a></li>
                <li><a href="#" className="hover:text-[#120604] transition-colors">Perawatan Rajut (Care Guide)</a></li>
                <li><a href="#popup-experience" className="hover:text-[#120604] transition-colors">Jadwal Pop-up Booth</a></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-[#120604] uppercase tracking-wider">Saluran Pembelian</h4>
              <ul className="space-y-2 text-xs text-[#4f4541]">
                <li><a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#120604] transition-colors">Shopee Mall Official</a></li>
                <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#120604] transition-colors">WhatsApp Concierge</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#120604] transition-colors">TikTok Shop Live</a></li>
                <li><a href="#" className="hover:text-[#120604] transition-colors">Info Pengiriman &amp; Retur</a></li>
              </ul>
            </div>

            {/* Newsletter / Contact */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-white p-6 rounded-2xl border border-[#e5e2dd] shadow-sm">
                <h4 className="font-headline text-lg text-[#120604] font-semibold">Join Sazmoon Journal</h4>
                <p className="text-xs text-[#4f4541] mt-1">
                  Dapatkan info rilisan kapsul terbatas, undangan private pop-up, dan voucher eksklusif.
                </p>
                <form id="newsletterForm" className="mt-4 flex gap-2" onSubmit={handleNewsletter}>
                  <input 
                    type="email" 
                    required 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Alamat email kamu..." 
                    className="w-full px-4 py-2 rounded-full bg-[#f6f3ee] text-xs text-[#1c1c19] border border-[#e5e2dd] focus:outline-none focus:border-[#7b5455]"
                  />
                  <button type="submit" className="shrink-0 px-5 py-2 rounded-full bg-[#2c1d18] text-white text-xs font-bold hover:bg-[#120604] transition-colors">
                    Gabung
                  </button>
                </form>
                {newsletterSubscribed && (
                  <p className="text-xs text-emerald-700 font-semibold mt-2 animate-fade-in">
                    ✓ Terima kasih telah bergabung dengan Sazmoon Journal!
                  </p>
                )}
              </div>
            </div>

          </div>

          <div className="mt-12 pt-6 border-t border-[#e5e2dd] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#817471]">
            <p>© 2025 Sazmoon Studio. Modest silhouettes crafted with tenderness.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#1c1c19] transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-[#1c1c19] transition-colors">Syarat &amp; Ketentuan</a>
              <a href="#" className="hover:text-[#1c1c19] transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
