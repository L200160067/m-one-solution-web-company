import React, { ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldAlert className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Oops! Terjadi Kesalahan.</h1>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            Sistem kami mendeteksi masalah yang tidak terduga pada halaman ini. Kami memohon maaf atas ketidaknyamanan Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                <RefreshCcw className="w-4 h-4" />
                                Muat Ulang Halaman
                            </button>
                            <Link
                                to="/"
                                onClick={() => this.setState({ hasError: false })}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors"
                            >
                                <Home className="w-4 h-4" />
                                Ke Beranda
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
