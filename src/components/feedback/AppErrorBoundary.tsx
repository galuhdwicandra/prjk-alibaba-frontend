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
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-xl font-bold text-red-600">
            !
          </div>

          <h1 className="text-xl font-semibold text-slate-900">Aplikasi mengalami kendala</h1>

          <p className="mt-2 text-sm text-slate-600">
            Terjadi error pada antarmuka. Silakan muat ulang halaman untuk melanjutkan.
          </p>

          {this.state.message ? (
            <div className="mt-4 rounded-xl bg-slate-100 p-3 text-left text-xs text-slate-600">
              {this.state.message}
            </div>
          ) : null}

          <div className="mt-5">
            <Button onClick={this.reloadPage}>Muat Ulang</Button>
          </div>
        </div>
      </div>
    );
  }
}