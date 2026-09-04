"use client";

import { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingBag,
  ShoppingCart,
  Search,
  Menu,
  X,
  Sparkles,
  Store,
  CheckCircle,
  ShieldCheck,
  Truck,
  ArrowRight,
  Star,
  MapPin,
  Calendar,
  Camera,
  Coffee,
  Shirt,
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: 'cardigans' | 'polo' | 'vests' | 'bottoms';
  price: number;
  priceLabel: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  subType: string;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  imageAlt: string;
  colors: { bg: string; title: string }[];
}

const PRODUCTS: Product[] = [
  {
    id: 'retro-1',
    title: 'Vintage Floral Knit Cardigan',
    category: 'cardigans',
    price: 189000,
    priceLabel: 'Rp 189k',
    tag: 'HAND-FINISHED',
    tagBg: 'bg-[#ffdad9]',
    tagColor: 'text-[#4a2414]',
    subType: 'FLORAL EMBROIDERY',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Soft butter knit with delicate botanical embroidery & wooden buttons',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChpmUwFWfR6_PqUh1n8gszItLkCOszeX8DS_zlYz5gg5sArwZ1GFwG3OARgnC0P5j37UtmL3iRcm09gDzyT27htyW-GHNDgXZYPRvcx1AcQ876uezXrr9VSSfebRgFpsP_ZGsT6i8nOpVsWZ9gnLgpy07vJK5kQBvZvlPL59Vmi6aGBewAQj8ltcLKYDtxzaQMTUTYvSjzDlNfA4BUGnRDuGqStU6tJhcQwGJOR39c2nMbPpScTenRHw',
    imageAlt: 'Vintage floral embroidered knit cardigan in buttercream yellow',
    colors: [
      { bg: '#f5eedf', title: 'Buttercream' },
      { bg: '#e8d4cf', title: 'Dusty Rose' },
      { bg: '#dde5d9', title: 'Matcha Sage' },
    ],
  },
  {
    id: 'retro-2',
    title: 'Tile Oversized Polo Knit',
    category: 'polo',
    price: 169000,
    priceLabel: 'Rp 169k',
    tag: 'NEW SEASON',
    tagBg: 'bg-[#d8e2dc]',
    tagColor: 'text-[#2f3e2e]',
    subType: 'SOFT-BRUSHED KNIT',
    rating: 4.8,
    reviewsCount: 94,
    description: 'Retro striped knit sweater in sage & cream earthy stripes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ',
    imageAlt: 'Oversized polo sweater in soft mint green with cream stripes',
    colors: [
      { bg: '#c2d6cb', title: 'Sage' },
      { bg: '#f5eedf', title: 'Cream' },
      { bg: '#d8e2dc', title: 'Earthy' },
    ],
  },
  {
    id: 'retro-3',
    title: 'Margot Ribbed Knit Vest',
    category: 'vests',
    price: 139000,
    priceLabel: 'Rp 139k',
    tag: 'LIMITED RESTOCK',
    tagBg: 'bg-[#e2d7e8]',
    tagColor: 'text-[#3c2a4a]',
    subType: 'CABLE DETAIL',
    rating: 4.9,
    reviewsCount: 210,
    description: 'Nostalgic chunky cable-knit vest in lilac & oatmeal tones',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA',
    imageAlt: 'Lilac purple cable-knit sweater vest styled on wooden hanger',
    colors: [
      { bg: '#dfd0e8', title: 'Lilac' },
      { bg: '#f5eedf', title: 'Oatmeal' },
      { bg: '#fae5b6', title: 'Butter' },
    ],
  },
  {
    id: 'retro-4',
    title: 'Fluid Modest Trousers',
    category: 'bottoms',
    price: 159000,
    priceLabel: 'Rp 159k',
    tag: 'CLASSIC CUT',
    tagBg: 'bg-[#f5eedf]',
    tagColor: 'text-[#1e1713]',
    subType: 'PURE LINEN BLEND',
    rating: 4.9,
    reviewsCount: 310,
    description: 'Tailored relaxed trousers with fluid drape in vanilla latte',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmDyT5g6Y_6kK_i6Yb9YglY7QEGPHLr3_MnLMpnwfyFQlAWoFWucKxltoStygxEiI1UkBHCv_Br6-E_0FRcA2AwVsq0CBuzPYK71YfmsQHZoVT1Daf1yw6fSV5GA5Ys6HqoJpsdoBIkV2jVOzwJpDia28KKV-oVcbL06YByCQfZMwKtgeEJdGqeVjI0VRWl_sSBNARAQQ78IX2wORz1YSpA3KebWHG2TcGWdtZ-5wYrljHWh_gd0nkCg',
    imageAlt: 'Fluid tailored trousers in oat vanilla cream',
    colors: [
      { bg: '#f5eedf', title: 'Vanilla' },
      { bg: '#3c2a23', title: 'Espresso' },
      { bg: '#bfcbbe', title: 'Muted Sage' },
    ],
  },
];

export default function Butik2Page() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [wishlist, setWishlist] = useState<Set<string>>(new Set(['retro-1', 'retro-2', 'retro-3']));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf6ee] text-[#1e1713] antialiased selection:bg-[#ffdad9] selection:text-[#4a2414]">
      
      {/* 1. Top Green Announcement Bar */}
      <aside aria-label="Club Announcement" className="bg-[#2f3e2e] text-[#fbf6ee] py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono font-medium tracking-wide">
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar whitespace-nowrap">
            <span className="font-bold">🧵 THE SAZMOON KNIT CLUB</span>
            <span className="opacity-40">•</span>
            <span>EST. 2024</span>
            <span className="opacity-40">•</span>
            <span>ARTISAN THREADS &amp; MODEST CUTS</span>
            <span className="opacity-40">•</span>
            <span className="text-[#fae5b6]">FREE SHIPPING SHOPEE &amp; WHATSAPP ORDERS OVER RP 150K</span>
          </div>
          <a href="#artisan-newsletter" className="hidden md:inline-flex items-center gap-1 bg-[#fae5b6] text-[#2f3e2e] px-3.5 py-1 rounded-full text-[11px] font-bold shrink-0 hover:bg-white transition-colors">
            <span>Join the Club</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>

      {/* 2. Sticky Main Header & Retro Navigation */}
      <header className="sticky top-0 z-50 bg-[#fbf6ee]/95 backdrop-blur-md border-b border-[#e4d8c5]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo & Retro Tag */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-full bg-[#f5eedf] border border-[#caa885] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-full h-full" fill="none">
                  <path d="M20 6C12 6 6 12 6 20C6 28 12 34 20 34C16 31 13 26 13 20C13 14 16 9 20 6Z" fill="#8c4224"/>
                  <path d="M22 10C22.5 12.5 24.5 14 27 14.5C24.5 15 22.5 16.5 22 19C21.5 16.5 19.5 15 17 14.5C19.5 14 21.5 12.5 22 10Z" fill="#caa885"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#8c4224] font-bold">THE RETRO KNIT</span>
                <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1713] leading-none">Sazmoon</span>
              </div>
            </a>

            {/* Center: Retro Navigation Pills */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#f5eedf] border border-[#e4d8c5]">
              <a 
                href="#catalog" 
                onClick={() => setActiveCategory('all')} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-[#723d24] text-white shadow-sm' : 'text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713]'}`}
              >
                RETRO EDITIONS
              </a>
              <a 
                href="#catalog" 
                onClick={() => setActiveCategory('cardigans')} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === 'cardigans' ? 'bg-[#723d24] text-white shadow-sm' : 'text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713]'}`}
              >
                CARDIGANS &amp; TOPS
              </a>
              <a 
                href="#catalog" 
                onClick={() => setActiveCategory('polo')} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === 'polo' ? 'bg-[#723d24] text-white shadow-sm' : 'text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713]'}`}
              >
                POLO KNITS
              </a>
              <a 
                href="#catalog" 
                onClick={() => setActiveCategory('vests')} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === 'vests' ? 'bg-[#723d24] text-white shadow-sm' : 'text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713]'}`}
              >
                SWEET VESTS
              </a>
              <a 
                href="#catalog" 
                onClick={() => setActiveCategory('bottoms')} 
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === 'bottoms' ? 'bg-[#723d24] text-white shadow-sm' : 'text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713]'}`}
              >
                MODEST BOTTOMS
              </a>
              <a href="#clubhouse-booths" className="px-4 py-2 rounded-full text-xs font-bold text-[#6b5d54] hover:bg-[#ebdcc8] hover:text-[#1e1713] transition-all whitespace-nowrap">
                POP-UP SCHEDULE
              </a>
            </nav>

            {/* Right: Search, Wishlist, Order CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center bg-white rounded-full px-3.5 py-1.5 border border-[#e4d8c5] shadow-sm focus-within:border-[#8c4224] transition-all">
                <Search className="w-4 h-4 text-[#8c4224] shrink-0 mr-2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search retro knits..." 
                  className="bg-transparent text-xs text-[#1e1713] placeholder-[#9c8e85] focus:outline-none w-28 lg:w-36 font-mono"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="text-[#8c4224] text-xs ml-1">✕</button>
                )}
              </div>

              {/* Wishlist Toggle */}
              <button 
                aria-label="Wishlist" 
                onClick={() => alert(`You have ${wishlist.size} saved heirloom pieces!`)}
                className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e4d8c5] text-[#723d24] hover:bg-[#f5eedf] transition-all shadow-sm"
              >
                <Heart className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 rounded-full bg-[#8c4224] text-white text-[10px] font-bold font-mono">
                  {wishlist.size}
                </span>
              </button>

              {/* Order Shopee / WA Button */}
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Sazmoon%20Retro%20Knit%20Club,%20saya%20ingin%20memesan%20katalog%20rajut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 bg-[#8c4224] text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-[#723d24] transition-all shadow-sm hover:shadow-md whitespace-nowrap font-mono"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Order Shopee / WA</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label="Menu" 
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#e4d8c5] text-[#1e1713]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#e4d8c5] bg-[#fbf6ee] py-4 px-2 space-y-2">
              <div className="mb-3 px-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search retro knits..." 
                  className="w-full bg-white border border-[#e4d8c5] rounded-full px-4 py-2 text-xs text-[#1e1713] font-mono focus:outline-none focus:border-[#8c4224]"
                />
              </div>
              <button 
                onClick={() => { setActiveCategory('all'); setMobileMenuOpen(false); }} 
                className="block w-full text-left px-4 py-2 rounded-xl text-xs font-bold text-[#1e1713] bg-[#f5eedf]"
              >
                RETRO EDITIONS
              </button>
              <button 
                onClick={() => { setActiveCategory('cardigans'); setMobileMenuOpen(false); }} 
                className="block w-full text-left px-4 py-2 rounded-xl text-xs font-bold text-[#6b5d54] hover:bg-[#f5eedf]"
              >
                CARDIGANS &amp; TOPS
              </button>
              <button 
                onClick={() => { setActiveCategory('polo'); setMobileMenuOpen(false); }} 
                className="block w-full text-left px-4 py-2 rounded-xl text-xs font-bold text-[#6b5d54] hover:bg-[#f5eedf]"
              >
                POLO KNITS
              </button>
              <button 
                onClick={() => { setActiveCategory('vests'); setMobileMenuOpen(false); }} 
                className="block w-full text-left px-4 py-2 rounded-xl text-xs font-bold text-[#6b5d54] hover:bg-[#f5eedf]"
              >
                SWEET VESTS
              </button>
              <button 
                onClick={() => { setActiveCategory('bottoms'); setMobileMenuOpen(false); }} 
                className="block w-full text-left px-4 py-2 rounded-xl text-xs font-bold text-[#6b5d54] hover:bg-[#f5eedf]"
              >
                MODEST BOTTOMS
              </button>
              <a 
                href="#clubhouse-booths" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block px-4 py-2 rounded-xl text-xs font-bold text-[#6b5d54] hover:bg-[#f5eedf]"
              >
                POP-UP SCHEDULE
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 3. Sub-Navbar Breadcrumb & Event Badge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6b5d54] border-b border-[#e4d8c5]/70 pb-3">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="text-[#8c4224]">COLLECTIONS</span>
            <span>/</span>
            <span className="text-[#1e1713] font-bold">RETRO KNIT CLUB</span>
            <span>/</span>
            <span>VINTAGE MODEST CAPSULE 2025</span>
          </div>
          <div className="flex items-center gap-2 text-[#723d24] bg-[#f5eedf] border border-[#caa885]/60 px-3.5 py-1 rounded-full text-xs font-bold">
            <span>🏷️ Free Sticker &amp; Souvenir on all orders today</span>
          </div>
        </div>
      </section>

      {/* 4. Hero Section: "Heirloom Knits Spun With Timeless Warmth." */}
      <main className="w-full">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5eedf] border border-[#caa885] text-[#8c4224] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE 1978 AUTUMN CAPSULE — DROP 03</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1e1713] tracking-tight leading-[1.08] font-bold">
                Heirloom Knits Spun With Timeless Warmth.
              </h1>

              <p className="text-base sm:text-lg text-[#6b5d54] max-w-xl leading-relaxed font-normal">
                Slow-crafted floral cardigans, soft ribbed vests, and modest silhouettes rooted in warm nostalgic memories. Stitched with breathable pure cotton yarn for slow living.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="#catalog" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#723d24] text-white text-xs font-mono font-bold hover:bg-[#4a2414] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Retro Catalog</span>
                </a>
                <a 
                  href="#clubhouse-booths" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1e1713] border-2 border-[#caa885] text-xs font-mono font-bold hover:bg-[#f5eedf] transition-all transform hover:-translate-y-0.5"
                >
                  <Store className="w-4 h-4 text-[#8c4224]" />
                  <span>Visit Offline Clubhouse</span>
                </a>
              </div>

              {/* Trust Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#e4d8c5]">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#e4d8c5]">
                  <CheckCircle className="w-5 h-5 text-[#8c4224] shrink-0" />
                  <span className="text-[11px] font-mono font-bold text-[#1e1713]">100% Breathable Cotton</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#e4d8c5]">
                  <ShieldCheck className="w-5 h-5 text-[#8c4224] shrink-0" />
                  <span className="text-[11px] font-mono font-bold text-[#1e1713]">Slow Fashion Philosophy</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-[#e4d8c5]">
                  <Truck className="w-5 h-5 text-[#8c4224] shrink-0" />
                  <span className="text-[11px] font-mono font-bold text-[#1e1713]">Artisan Stitched Quality</span>
                </div>
              </div>

            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Background Shadow Card */}
                <div className="absolute inset-0 bg-[#e4d8c5] rounded-[36px] translate-x-3 translate-y-3 -z-10"></div>
                
                <div className="relative overflow-hidden rounded-[36px] border-2 border-[#caa885] bg-[#f5eedf] shadow-xl">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw" 
                    alt="Model wearing Sazmoon Buttercream Cable Cardigan in warm cafe setting" 
                    className="w-full h-[480px] sm:h-[560px] object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Rotating Stamp */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-[#2f3e2e] text-[#fbf6ee] rounded-full flex items-center justify-center p-2 shadow-lg rotate-badge border-2 border-[#fae5b6]">
                    <span className="text-[7.5px] font-mono font-bold text-center tracking-wider uppercase leading-tight">
                      ★ THE SAZMOON KNIT CLUB ★ VINTAGE EDITION ★
                    </span>
                  </div>

                  {/* Floating Price Tag */}
                  <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border-2 border-[#caa885] shadow-lg flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-[#8c4224] uppercase font-bold block">HEIRLOOM CABLE CARDIGAN</span>
                      <p className="font-editorial text-lg text-[#1e1713] font-bold">Buttercream Floral • Rp 189k</p>
                    </div>
                    <a href="#catalog" className="w-10 h-10 rounded-full bg-[#723d24] text-white flex items-center justify-center hover:bg-[#4a2414] transition-colors shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 5. Product Catalog: "The Knit Archive & Modest Cuts" */}
        <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-2 border-[#e4d8c5]">
          
          {/* Catalog Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8c4224] uppercase">AUTUMN / WINTER 2025</span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1713] font-bold mt-1">The Knit Archive &amp; Modest Cuts</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6b5d54] max-w-md font-normal leading-relaxed">
              Every garment is knitted with skin-friendly cotton threads, generous sizing, and heirloom details made to last.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#f5eedf] p-3 sm:p-4 rounded-2xl border border-[#caa885] mb-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={() => setActiveCategory('all')} 
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all shadow-sm ${activeCategory === 'all' ? 'bg-[#1e1713] text-white' : 'bg-white text-[#1e1713] border border-[#caa885] hover:bg-[#ebdcc8]'}`}
              >
                ALL ARCHIVES ({PRODUCTS.length})
              </button>
              <button 
                onClick={() => setActiveCategory('cardigans')} 
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${activeCategory === 'cardigans' ? 'bg-[#1e1713] text-white' : 'bg-white text-[#1e1713] border border-[#caa885] hover:bg-[#ebdcc8]'}`}
              >
                RETRO CARDIGANS
              </button>
              <button 
                onClick={() => setActiveCategory('polo')} 
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${activeCategory === 'polo' ? 'bg-[#1e1713] text-white' : 'bg-white text-[#1e1713] border border-[#caa885] hover:bg-[#ebdcc8]'}`}
              >
                OVERSIZED POLO
              </button>
              <button 
                onClick={() => setActiveCategory('vests')} 
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${activeCategory === 'vests' ? 'bg-[#1e1713] text-white' : 'bg-white text-[#1e1713] border border-[#caa885] hover:bg-[#ebdcc8]'}`}
              >
                CABLE VESTS
              </button>
              <button 
                onClick={() => setActiveCategory('bottoms')} 
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${activeCategory === 'bottoms' ? 'bg-[#1e1713] text-white' : 'bg-white text-[#1e1713] border border-[#caa885] hover:bg-[#ebdcc8]'}`}
              >
                FLUID BOTTOMS
              </button>
            </div>

            <div className="text-xs font-mono text-[#6b5d54] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#8c4224]"></span>
              <span>Showing {filteredProducts.length} Heirloom pieces</span>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-[#e4d8c5]">
              <Search className="w-10 h-10 text-[#6b5d54] mx-auto opacity-50" />
              <p className="mt-2 text-sm font-editorial font-bold text-[#1e1713]">No matching items in archive</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} 
                className="mt-4 px-6 py-2 rounded-full bg-[#723d24] text-white text-xs font-mono font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => {
                const isFav = wishlist.has(product.id);
                return (
                  <article 
                    key={product.id}
                    className="product-card card-retro-hover flex flex-col bg-white rounded-3xl overflow-hidden border-2 border-[#e4d8c5] shadow-sm"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f5eedf]">
                      <img 
                        src={product.image} 
                        alt={product.imageAlt} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase shadow-sm ${product.tagBg} ${product.tagColor}`}>
                          {product.tag}
                        </span>
                      </div>
                      <button 
                        aria-label="Wishlist" 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className={`wishlist-toggle absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm ${isFav ? 'text-rose-500' : 'text-[#723d24] hover:text-[#8c4224]'}`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>

                    <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#6b5d54] mb-1.5">
                          <span className="font-bold text-[#8c4224] uppercase">{product.subType}</span>
                          <span className="flex items-center gap-0.5">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                            <span className="font-bold text-[#1e1713]">{product.rating.toFixed(1)}</span> ({product.reviewsCount})
                          </span>
                        </div>
                        <h3 className="font-editorial text-lg text-[#1e1713] font-bold leading-snug">
                          {product.title}
                        </h3>
                        <p className="text-xs text-[#6b5d54] mt-1 leading-relaxed">
                          {product.description}
                        </p>
                        
                        {/* Color Dots */}
                        <div className="flex items-center gap-1.5 mt-3.5">
                          {product.colors.map((col, idx) => (
                            <span 
                              key={idx}
                              style={{ backgroundColor: col.bg }} 
                              className="w-3.5 h-3.5 rounded-full border border-[#caa885]" 
                              title={col.title}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Price & Button */}
                      <div className="mt-5 pt-3.5 border-t border-[#f5eedf] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-[#6b5d54] block uppercase">MEMBERS PRICE</span>
                          <span className="font-editorial text-xl font-bold text-[#1e1713]">{product.priceLabel}</span>
                        </div>
                        <a 
                          href={`https://wa.me/6281234567890?text=Halo%20Sazmoon,%20saya%20mau%20order%20${encodeURIComponent(product.title)}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-5 py-2 rounded-full bg-[#723d24] text-white text-xs font-mono font-bold hover:bg-[#4a2414] transition-colors shadow-sm flex items-center gap-1"
                        >
                          <span>Order</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Shopee Mall Notice */}
          <div className="mt-12 text-center">
            <a 
              href="https://shopee.co.id" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f5eedf] text-[#1e1713] text-xs font-mono font-bold hover:bg-[#ebdcc8] border-2 border-[#caa885] transition-all shadow-sm"
            >
              <span>Explore 32+ Vault Styles on Shopee Mall</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs font-mono text-[#6b5d54] mt-2.5">
              📦 Automatic Free Shipping across Indonesia for orders via Shopee &amp; WA concierge.
            </p>
          </div>

        </section>

        {/* 6. Vintage Lookbook Bento: "Visual Journal & Styling Mood" */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-[#e4d8c5]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8c4224] uppercase">AUTUMN MOODBOARD</span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1713] font-bold mt-1">Visual Journal &amp; Styling Mood</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6b5d54] max-w-md font-normal">
              Effortless layering ideas for bookshop afternoons, tea houses, and vintage markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Look 1 */}
            <div className="bg-white rounded-3xl p-3 border-2 border-[#e4d8c5] shadow-sm group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Wb_EZYNRSWRb6Ob3zIDvc4NyYvoUc2tPWIVdspIeH16RbCI_wl48_xifVASCjvLovBnB4j_bKQwB8GDz4LA9YnbSkn6nzUDsoSZ20J39kK5fPzZlOqLEw-nRDaUevasyk5z_ZkHsWTkDxYJIfgC2mtQbzPNye0k6F4TuihyLHJ7kX4J7RghkQyoQvjj3MZi6JYuYsuGjpTcYdBBUHWwgLPkXKAJs1f4SzubAZCWwmSc1DAfw_GnaMw" 
                  alt="Autumn Afternoon with Buttercream Knit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-[#8c4224] font-bold uppercase">LOOK NO. 01</span>
                <h3 className="font-editorial text-xl font-bold text-[#1e1713]">The Tokyo Record Store Walk</h3>
                <p className="text-xs text-[#6b5d54]">Espresso Cable Knit + Pleated Skirt</p>
              </div>
            </div>

            {/* Look 2 */}
            <div className="bg-white rounded-3xl p-3 border-2 border-[#e4d8c5] shadow-sm group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ" 
                  alt="City Bookstore & Art Gallery Look" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-[#8c4224] font-bold uppercase">LOOK NO. 02</span>
                <h3 className="font-editorial text-xl font-bold text-[#1e1713]">Quiet Seoul Garden Cafe</h3>
                <p className="text-xs text-[#6b5d54]">Sage Polo Knit + Wide Cream Denim</p>
              </div>
            </div>

            {/* Look 3 */}
            <div className="bg-white rounded-3xl p-3 border-2 border-[#e4d8c5] shadow-sm group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA" 
                  alt="Weekend Flower Market Mood" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-[#8c4224] font-bold uppercase">LOOK NO. 03</span>
                <h3 className="font-editorial text-xl font-bold text-[#1e1713]">Autumn Flower Stall</h3>
                <p className="text-xs text-[#6b5d54]">Lilac Vest + Vintage Oxford Shirt</p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Offline Clubhouse & Pop-up Bento */}
        <section id="clubhouse-booths" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-[#e4d8c5]">
          <div className="mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-[#2f3e2e] text-[#fbf6ee] text-xs font-mono font-bold uppercase mb-2">
              PHYSICAL CLUBHOUSE
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1713] font-bold">
              Meet Sazmoon Offline — Pop-up Booth &amp; Tea Bar
            </h2>
            <p className="text-sm text-[#6b5d54] max-w-xl mt-2 font-normal">
              Experience the tactile softness of our pure cotton yarn in person, test sizing in vintage mirrors, and claim exclusive club souvenirs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Big Booth Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl overflow-hidden border-2 border-[#caa885] shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/2 relative min-h-[280px] md:min-h-full overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVPx25l7g67N9JsX4jhp2ZMxscTE_It5VRHyDd0lNVGjLzbtxSn0lbfZFh0jMRk7AmC3Vi1wtjMwmLfJoPrBS8IGNzHVzMFAbTuIZTH4nJe7M4YJ-nOTTih7e9YcAIg_F3TxGlw_03MyTkqNB3IBVzkdSOKAjDeMCJ9gIxTBY9_i1K2xqACd9LyASWNo5vJHDGd1PhG4upcNpkI0uAS0-jq3UllFLnBPUBkatF4EkCWs5tZOHvMKlqWw" 
                  alt="Sazmoon pop-up booth in M Bloc Space Jakarta" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#723d24] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                  OPEN EVERY WEEKEND
                </div>
              </div>
              
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-[#8c4224] text-xs font-mono font-bold">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>M Bloc Space, Jakarta Selatan</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#1e1713]">
                    M Bloc Space Vintage Market
                  </h3>
                  <p className="text-xs text-[#6b5d54] leading-relaxed">
                    Friday — Sunday • 10.00 — 21.00 WIB<br/>
                    Creative Hall A, Opposite Union Yoga.
                  </p>
                  
                  <div className="p-3.5 rounded-2xl bg-[#f5eedf] border border-[#caa885] space-y-1">
                    <p className="text-xs text-[#8c4224] font-mono font-bold">Club Perk:</p>
                    <p className="text-xs text-[#1e1713]">
                      Free Sazmoon Canvas Tote Bag &amp; Sticker Sheet on all on-site orders over Rp 300k.
                    </p>
                  </div>
                </div>

                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#723d24] hover:text-[#4a2414] transition-colors pt-2">
                  <span>Open Directions in Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Mini Stack */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Upcoming Event */}
              <div className="p-6 rounded-3xl bg-[#2f3e2e] text-[#fbf6ee] border-2 border-[#2f3e2e] shadow-sm flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#fae5b6] text-[#2f3e2e] text-[10px] font-mono font-bold">
                      NEXT STOP
                    </span>
                    <Calendar className="w-5 h-5 text-[#fae5b6]" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold mt-3 text-white">
                    Bandung Heritage Pavilion
                  </h4>
                  <p className="text-xs text-[#fbf6ee]/80 mt-1 font-mono">
                    15 — 18 November 2025 • Booth A-12
                  </p>
                </div>
                <div className="pt-2 text-xs font-mono text-[#fae5b6] underline">
                  Early-bird member RSVP opening soon
                </div>
              </div>

              {/* Clubhouse Perks */}
              <div className="p-6 rounded-3xl bg-white border-2 border-[#e4d8c5] shadow-sm flex flex-col justify-between flex-1 space-y-3">
                <div className="flex items-center gap-2 text-[#8c4224]">
                  <Coffee className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Clubhouse Perks</span>
                </div>
                <h4 className="font-editorial text-lg font-bold text-[#1e1713]">
                  Try Before Buying &amp; Polaroid Station
                </h4>
                <p className="text-xs text-[#6b5d54] leading-relaxed">
                  Complimentary herbal tea, full-length warm lighting mirrors, and a polaroid photo memory with every fitting.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 8. Community Polaroid Wall */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t-2 border-[#e4d8c5]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8c4224] uppercase">#SAZMOONKNITCLUB</span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1713] font-bold mt-1">Captured by our gentle community</h2>
            <p className="text-xs text-[#6b5d54] mt-2 font-mono">
              Tag @sazmoon.co on Instagram for a chance to win monthly slow-fashion shopping vouchers!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Polaroid 1 */}
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e4d8c5] shadow-sm hover:-translate-y-1 transition-transform">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0RP5zD_wb77JXevRgUiXmQG3V6OdJG3D0U08nBLNWHLpjYE3l3n51x7_U2BEW6rU87hzVmN8YbZifqI8RRCcsuv1FB0ykh0uf-qfcgbuJoMLQ9NMwtAfWtDYfpUxTVfrGNDxVkrrLKCZGu6KXk53ClGbOHJFW-JTLfj3XcomBekiKYDhKLn3-53lDfr7vLf0gSD-CsRhrMODMe85RzKeMSh133EXQ7WS_ymENKLfe53hoMP6UShIubQ" 
                  alt="Customer in knitwear at tea house" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="text-xs font-editorial font-bold text-[#1e1713] block">@amanda_teahouse</span>
                <span className="text-[10px] font-mono text-[#6b5d54]">Kyoto Morning Tea</span>
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e4d8c5] shadow-sm hover:-translate-y-1 transition-transform">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpmUwFWfR6_PqUh1n8gszItLkCOszeX8DS_zlYz5gg5sArwZ1GFwG3OARgnC0P5j37UtmL3iRcm09gDzyT27htyW-GHNDgXZYPRvcx1AcQ876uezXrr9VSSfebRgFpsP_ZGsT6i8nOpVsWZ9gnLgpy07vJK5kQBvZvlPL59Vmi6aGBewAQj8ltcLKYDtxzaQMTUTYvSjzDlNfA4BUGnRDuGqStU6tJhcQwGJOR39c2nMbPpScTenRHw" 
                  alt="Flatlay Sazmoon Buttercream Cardigan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="text-xs font-editorial font-bold text-[#1e1713] block">@clara_modest</span>
                <span className="text-[10px] font-mono text-[#6b5d54]">Autumn Capsule Fit</span>
              </div>
            </div>

            {/* Polaroid 3 */}
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e4d8c5] shadow-sm hover:-translate-y-1 transition-transform">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6JLB0sSzDBl_p5D6o8iz7ZZ9Snzbyz7XHr9kvZR6QhuRwqKAQC-up26vMzd9HEOHEGXlwFxP0az2mC58NX5XQo0WlwA9e1FWsayCZTT_PEvTnhU32yQmiRmVIJbvgwUeddO8oSp7feLVcSzRDfy1EpYQyLz7oIFzBv4uUqunhhMpFIRNT9WQ4INkQXOIkVr4tYso5iPkqTA5FSeYoWzIdlN3DUGRqPlTNGclmvG8PPaWfws1sML45AA" 
                  alt="Flatlay Sazmoon mint knit sweater" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="text-xs font-editorial font-bold text-[#1e1713] block">@retro_knits</span>
                <span className="text-[10px] font-mono text-[#6b5d54]">Heirloom Flatlay Concept</span>
              </div>
            </div>

            {/* Polaroid 4 */}
            <div className="bg-white p-3 rounded-2xl border-2 border-[#e4d8c5] shadow-sm hover:-translate-y-1 transition-transform">
              <div className="aspect-square rounded-xl overflow-hidden bg-[#f5eedf]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDyT5g6Y_6kK_i6Yb9YglY7QEGPHLr3_MnLMpnwfyFQlAWoFWucKxltoStygxEiI1UkBHCv_Br6-E_0FRcA2AwVsq0CBuzPYK71YfmsQHZoVT1Daf1yw6fSV5GA5Ys6HqoJpsdoBIkV2jVOzwJpDia28KKV-oVcbL06YByCQfZMwKtgeEJdGqeVjI0VRWl_sSBNARAQQ78IX2wORz1YSpA3KebWHG2TcGWdtZ-5wYrljHWh_gd0nkCg" 
                  alt="Customer carrying Sazmoon tote bag and lilac vest" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 text-center">
                <span className="text-xs font-editorial font-bold text-[#1e1713] block">@melia_clo</span>
                <span className="text-[10px] font-mono text-[#6b5d54]">Bintaro Pop-up Market</span>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="mt-8 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f5eedf] text-[#1e1713] text-xs font-mono font-bold border border-[#caa885] hover:bg-[#ffdad9] transition-all shadow-sm"
            >
              <Camera className="w-4 h-4" />
              <span>Join Sazmoon Instagram Lookbook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </section>

      </main>

      {/* 9. Retro Footer & Newsletter */}
      <footer id="artisan-newsletter" className="w-full bg-[#f5eedf] border-t-2 border-[#e4d8c5] mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Col 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[#caa885] flex items-center justify-center p-1.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-full h-full" fill="none">
                    <path d="M20 6C12 6 6 12 6 20C6 28 12 34 20 34C16 31 13 26 13 20C13 14 16 9 20 6Z" fill="#8c4224"/>
                    <path d="M22 10C22.5 12.5 24.5 14 27 14.5C24.5 15 22.5 16.5 22 19C21.5 16.5 19.5 15 17 14.5C19.5 14 21.5 12.5 22 10Z" fill="#caa885"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#8c4224] font-bold block">THE RETRO KNIT</span>
                  <span className="font-editorial text-2xl font-bold text-[#1e1713]">Sazmoon</span>
                </div>
              </div>
              
              <p className="text-xs text-[#6b5d54] leading-relaxed max-w-sm font-normal">
                Handcrafted slow-fashion knitwear for everyday modesty. Inspired by 70s-90s Tokyo tea rooms and quiet morning walks in Seoul.
              </p>

              <div className="flex items-center gap-2 pt-1 font-mono text-[10px]">
                <span className="px-3 py-1 rounded-full bg-white border border-[#caa885] text-[#723d24] font-bold">Slow Fashion</span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#caa885] text-[#723d24] font-bold">Modest Fits</span>
              </div>
            </div>

            {/* Col 2: Lookbook Links */}
            <div className="lg:col-span-2 space-y-3 font-mono text-xs">
              <h4 className="font-bold text-[#1e1713] uppercase tracking-wider">LOOKBOOK</h4>
              <ul className="space-y-2 text-[#6b5d54]">
                <li><a href="#catalog" className="hover:text-[#8c4224] transition-colors">Archive 2024</a></li>
                <li><a href="#catalog" className="hover:text-[#8c4224] transition-colors">Autumn Drop</a></li>
                <li><a href="#" className="hover:text-[#8c4224] transition-colors">Care Guide</a></li>
                <li><a href="#clubhouse-booths" className="hover:text-[#8c4224] transition-colors">Pop-up Schedule</a></li>
              </ul>
            </div>

            {/* Col 3: Club Services */}
            <div className="lg:col-span-2 space-y-3 font-mono text-xs">
              <h4 className="font-bold text-[#1e1713] uppercase tracking-wider">CLUB SERVICES</h4>
              <ul className="space-y-2 text-[#6b5d54]">
                <li><a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c4224] transition-colors">Shopee Mall Official</a></li>
                <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c4224] transition-colors">WhatsApp Concierge</a></li>
                <li><a href="#" className="hover:text-[#8c4224] transition-colors">VIP Club Access</a></li>
                <li><a href="#" className="hover:text-[#8c4224] transition-colors">Return &amp; Shipping Policy</a></li>
              </ul>
            </div>

            {/* Col 4: The Artisan Club Newsletter */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-white p-6 rounded-3xl border-2 border-[#caa885] shadow-sm">
                <h4 className="font-editorial text-lg text-[#1e1713] font-bold">The Artisan Club Newsletter</h4>
                <p className="text-xs text-[#6b5d54] mt-1 leading-relaxed">
                  Receive vintage catalog drops, secret pop-up invitations, and early lookbook access.
                </p>
                <form id="newsletterForm" className="mt-4 flex gap-2" onSubmit={handleNewsletter}>
                  <input 
                    type="email" 
                    required 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email address..." 
                    className="w-full px-4 py-2 rounded-full bg-[#fbf6ee] text-xs text-[#1e1713] border border-[#caa885] focus:outline-none focus:border-[#723d24] font-mono"
                  />
                  <button type="submit" className="shrink-0 px-5 py-2 rounded-full bg-[#723d24] text-white text-xs font-mono font-bold hover:bg-[#4a2414] transition-colors">
                    Subscribe
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs font-mono text-emerald-700 font-bold mt-2">
                    ✓ Welcome to The Sazmoon Retro Knit Club!
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-6 border-t border-[#caa885]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6b5d54]">
            <p>© 2025 Sazmoon Studio / The Retro Knit Club. Hand-spun with patience &amp; mindful stitches.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#1e1713] transition-colors">Club Rules</a>
              <a href="#" className="hover:text-[#1e1713] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1e1713] transition-colors">Terms &amp; Care</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
