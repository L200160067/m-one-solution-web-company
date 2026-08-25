export function HomepageBelowFoldSkeleton() {
    return (
        <div className="space-y-8 animate-pulse" aria-hidden="true">
            <div className="bg-slate-100 h-96 rounded-2xl" />
            <div className="bg-slate-900 h-40 rounded-2xl" />
            <div className="bg-slate-800 h-80 rounded-2xl" />
            <div className="bg-slate-100 h-96 rounded-2xl" />
        </div>
    );
}
