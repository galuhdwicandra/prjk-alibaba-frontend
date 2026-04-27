import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      message: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error boundary:", error, errorInfo);
  }

  private reloadPage = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-red-600 shadow-sm">
            !
          </div>

          <h1 className="text-lg font-semibold text-slate-900">
            Terjadi Kesalahan Sistem
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Aplikasi mengalami gangguan saat memuat halaman. Silakan coba muat ulang untuk melanjutkan.
          </p>

          {this.state.message ? (
            <div className="mt-4 max-h-32 overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-left text-xs text-slate-600">
              {this.state.message}
            </div>
          ) : null}

          <div className="mt-6 flex justify-center">
            <Button onClick={this.reloadPage}>
              Muat Ulang Halaman
            </Button>
          </div>
        </div>
      </div>
    );
  }
}