import { useRef } from "react";
import { Button } from "./Button";

interface FileUploadFieldProps {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  files?: File[] | null;
  error?: string;
  onChange: (files: File[]) => void;
}

export function FileUploadField({
  label = "Upload file",
  hint,
  accept,
  multiple = false,
  files,
  error,
  onChange,
}: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        {hint ? <div className="text-xs leading-5 text-slate-500">{hint}</div> : null}
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 shadow-sm transition hover:border-slate-400 hover:bg-slate-50/60">
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(event) => {
            const selected = Array.from(event.target.files ?? []);
            onChange(selected);
          }}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium text-slate-800">
              {files?.length ? `${files.length} file dipilih` : "Belum ada file dipilih"}
            </div>
            <div className="text-xs text-slate-500">
              Klik tombol untuk memilih {multiple ? "satu atau beberapa file" : "file"} dari perangkat.
            </div>
          </div>

          <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}>
            Pilih File
          </Button>
        </div>

        {files?.length ? (
          <ul className="mt-4 max-h-44 space-y-2 overflow-auto pr-1 text-sm text-slate-700">
            {files.map((file) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <span className="min-w-0 truncate font-medium text-slate-700">{file.name}</span>
                <span className="shrink-0 text-xs text-slate-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {error ? <p className="text-xs font-medium text-red-600">{error}</p> : null}
    </div>
  );
}