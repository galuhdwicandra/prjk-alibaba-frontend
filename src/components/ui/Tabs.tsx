import { useState, type ReactNode } from "react";
import { cn } from "./utils";

export interface TabItem {
  key: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export function Tabs({ items, defaultTab }: TabsProps) {
  const initialTab = defaultTab ?? items[0]?.key ?? "";
  const [activeTab, setActiveTab] = useState(initialTab);

  const current = items.find((item) => item.key === activeTab) ?? items[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-1">
        {items.map((item) => {
          const active = item.key === current?.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveTab(item.key)}
              className={cn(
                "relative inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
                active
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.label}
              {active && (
                <span className="absolute inset-x-2 -bottom-[6px] h-[2px] rounded-full bg-slate-900" />
              )}
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {current?.content}
      </div>
    </div>
  );
}