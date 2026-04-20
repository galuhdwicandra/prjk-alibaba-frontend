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
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = item.key === current?.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveTab(item.key)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div>{current?.content}</div>
    </div>
  );
}