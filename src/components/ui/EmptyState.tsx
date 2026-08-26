import { RefreshCcw, SearchX, Inbox } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: 'inbox' | 'search' | 'error';
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon = 'inbox',
}: EmptyStateProps) {
  const icons = {
    inbox: <Inbox className="w-10 h-10" />,
    search: <SearchX className="w-10 h-10" />,
    error: <RefreshCcw className="w-10 h-10" />,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
      <div className="w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 mb-4">
        {icons[icon]}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      {description && <p className="text-slate-600 mb-6 max-w-sm">{description}</p>}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
