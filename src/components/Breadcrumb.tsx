import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mone.mutudev.com';

    // Build the JSON-LD schema array
    const itemListElement = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
        },
        ...items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 2,
            "name": item.label,
            ...(item.href ? { "item": `${BASE_URL}${item.href}` } : {})
        }))
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    return (
        <nav aria-label="Breadcrumb" className={`w-full ${className}`}>
            <Script
                id="schema-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <ol className="flex items-center space-x-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap py-2 px-4 bg-white/50 backdrop-blur-sm rounded-full border border-slate-100 shadow-sm w-fit">
                <li>
                    <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    
                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 text-slate-400 flex-shrink-0" />
                            {isLast || !item.href ? (
                                <span className="text-slate-900 font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link 
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
