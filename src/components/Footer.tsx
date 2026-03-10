"use client";

import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '../config/site';
import type { Settings } from '@/types/api';

interface FooterProps {
  settings?: Settings;
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'Facebook',
      href: settings?.facebook_url || siteConfig.social.facebook,
      icon: Facebook,
      hoverColor: 'hover:bg-blue-600',
    },
    {
      label: 'Instagram',
      href: settings?.instagram_url || siteConfig.social.instagram,
      icon: Instagram,
      hoverColor: 'hover:bg-pink-600',
    },
    {
      label: 'LinkedIn',
      href: settings?.linkedin_url || siteConfig.social.linkedin,
      icon: Linkedin,
      hoverColor: 'hover:bg-blue-700',
    },
  ].filter(link => link.href && link.href !== '#');

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={(siteConfig.logo as any)?.src || siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                className="h-12 sm:h-14 w-auto object-contain mix-blend-lighten"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                  M-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solution</span>
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-400 tracking-[0.2em] uppercase leading-none">
                  Software House
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Software house yang fokus menciptakan aplikasi dan website yang praktis, intuitif, dan efektif untuk mendukung kesuksesan bisnis Anda.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:text-white ${social.hoverColor} transition-colors group relative`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-slate-900 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                      {social.label}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></span>
                    </span>
                  </a>
                ))}
              </div>
            )}
            {/* If no social links configured, show Instagram direct */}
            {socialLinks.length === 0 && (
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/m.one_solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors group relative"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-slate-900 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                    Instagram
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white"></span>
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Portofolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> News</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Terms and Conditions</Link></li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <p className="text-slate-400 text-sm mb-2">
                <a href={`mailto:${settings?.contact_email || siteConfig.contact.email}`} className="hover:text-blue-400 transition-colors break-all">
                  {settings?.contact_email || siteConfig.contact.email}
                </a>
              </p>
              <p className="text-slate-400 text-sm">{settings?.company_address || siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} M-One Solution Software house. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm font-medium">
            Your True Solution
          </p>
        </div>
      </div>
    </footer>
  );
}
