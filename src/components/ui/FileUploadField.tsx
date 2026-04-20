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
      <div>
        <div className="text-sm font-medium text-slate-700">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
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

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            {files?.length ? `${files.length} file dipilih.` : "Belum ada file dipilih."}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => inputRef.current?.click()}
          >
            Pilih File
          </Button>
        </div>

        {files?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {files.map((file) => (
              <li key={`${file.name}-${file.size}`} className="rounded-xl bg-slate-50 px-3 py-2">
                {file.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}