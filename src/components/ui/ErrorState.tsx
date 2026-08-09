"use client";

import { RefreshCcw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export interface ErrorStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorState({ title, description, actionLabel, onAction }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      {description && <p className="text-slate-600 mb-6 max-w-sm">{description}</p>}
      <div className="flex flex-wrap gap-3 justify-center">
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            {actionLabel}
          </button>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors"
        >
          <Home className="w-4 h-4" />
          Ke Beranda
        </Link>
      </div>
    </div>
  );
}
