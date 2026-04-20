interface RoutePlaceholderProps {
  title: string;
}

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      {title}
    </div>
  );
}