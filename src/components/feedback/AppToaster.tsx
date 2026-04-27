import { useToastStore } from "@/hooks/useToast";

const variantClassMap = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-sky-200 bg-sky-50 text-sky-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
};

export function AppToaster() {
  const items = useToastStore((state) => state.items);
  const removeToast = useToastStore((state) => state.removeToast);

  return (
    <div className="pointer-events-none fixed right-3 top-3 z-[60] flex w-full max-w-sm flex-col gap-3 sm:right-4 sm:top-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={[
            "pointer-events-auto w-full rounded-2xl border px-4 py-3 shadow-lg backdrop-blur",
            "transition-all duration-200 ease-out",
            "animate-in slide-in-from-top-2 fade-in",
            variantClassMap[item.variant],
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-1">
              <div className="text-sm font-semibold leading-tight">
                {item.title}
              </div>

              {item.description ? (
                <div className="text-xs leading-relaxed opacity-90">
                  {item.description}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => removeToast(item.id)}
              className="shrink-0 rounded-lg px-2 py-1 text-xs font-medium transition hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              Tutup
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}