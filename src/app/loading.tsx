export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
                <p className="text-sm text-slate-500 font-medium">Memuat...</p>
            </div>
        </div>
    );
}
