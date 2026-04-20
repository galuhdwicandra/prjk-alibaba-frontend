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
    <div className="pointer-events-none fixed right-4 top-4 z-[60] flex w-full max-w-sm flex-col gap-3">
      {items.map((item) => (
        <div
          key={item.id}
          className={[
            "pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg",
            variantClassMap[item.variant],
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              {item.description ? <div className="mt-1 text-xs">{item.description}</div> : null}
            </div>

            <button
              type="button"
              onClick={() => removeToast(item.id)}
              className="rounded-lg px-2 py-1 text-xs hover:bg-white/50"
            >
              Tutup
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}