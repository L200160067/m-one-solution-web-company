import type { Partner } from '@/types/api';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { WpImage } from '@/components/image/WpImage';

interface PartnersProps {
  partners: Partner[];
}

export function Partners({ partners }: PartnersProps) {
  return (
    <Section className="bg-slate-950 border-t border-white/5">
      <Container className="text-center">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            Mitra Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Institusi dan Organisasi yang Telah Bertumbuh Bersama Kami
          </h2>
        </div>

        {partners.length > 0 ? (
          <div className="relative w-full overflow-hidden flex py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex w-max items-center hover:[animation-play-state:paused] animate-[scroll_35s_linear_infinite]">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex justify-center items-center px-10 md:px-16 flex-shrink-0"
                >
                  {partner.logo_url ? (
                    <div className="w-24 h-12 md:w-28 md:h-14 relative">
                      <WpImage
                        src={partner.logo_url}
                        alt={partner.name}
                        fill
                        sizes="112px"
                        className="object-contain brightness-0 invert opacity-50 grayscale hover:opacity-100 hover:brightness-100 hover:invert-0 hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <span className="text-slate-400 font-bold text-lg md:text-xl opacity-70 hover:opacity-100 hover:text-white transition-colors whitespace-nowrap px-4">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-slate-400 text-sm">Segera hadir</p>
        )}
      </Container>
    </Section>
  );
}
