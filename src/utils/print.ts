export interface PrintHtmlOptions {
  title?: string;
  html: string;
  width?: number;
  height?: number;
}

const buildPrintableDocument = (title: string, html: string) => {
  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body>
  ${html}
</body>
</html>
`;
};

export function printHtml({ title = "Print", html, width = 420, height = 640 }: PrintHtmlOptions) {
  const popup = window.open("", title, `width=${width},height=${height}`);

  if (!popup) {
    const iframe = document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";

    document.body.appendChild(iframe);

    const iframeDocument = iframe.contentWindow?.document;

    if (!iframeDocument) {
      iframe.remove();
      return;
    }

    iframeDocument.open();
    iframeDocument.write(buildPrintableDocument(title, html));
    iframeDocument.close();

    iframe.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      window.setTimeout(() => iframe.remove(), 500);
    };

    return;
  }

  popup.document.open();
  popup.document.write(buildPrintableDocument(title, html));
  popup.document.close();

  popup.onload = () => {
    popup.focus();
    popup.print();
  };
}

export function printCurrentPage() {
  window.print();
}