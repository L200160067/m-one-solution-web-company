import { Suspense } from 'react';
import { apiFetch } from '@/lib/api';
import type { ApiResponse, Settings } from '@/types/api';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

function FooterFallback() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-white/5 animate-pulse" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-white tracking-tight leading-none mb-1">
                            M-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solution</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 tracking-[0.2em] uppercase leading-none">
                            Software House
                        </span>
                    </div>
                </div>
                <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                    Software house yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif untuk mendukung kesuksesan bisnis Anda.
                </p>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} M-One Solution Software House. Hak Cipta Dilindungi.
                    </p>
                    <p className="text-slate-400 text-sm font-medium">
                        Solusi Digital Terpercaya Anda
                    </p>
                </div>
            </div>
        </footer>
    );
}

async function FooterDataInner() {
    let settings: Settings | undefined;
    try {
        const res = await apiFetch<ApiResponse<Settings>>('/settings', { tags: ['settings'] });
        settings = res.data;
    } catch {
        // Fall back to siteConfig defaults if API unavailable
    }

    return (
        <>
            <Footer settings={settings} />
            <WhatsAppButton whatsappNumber={settings?.whatsapp_number} />
        </>
    );
}

export function FooterData() {
    return (
        <Suspense fallback={<FooterFallback />}>
            <FooterDataInner />
        </Suspense>
    );
}
