let sourceCode = '';

(async () => {
  try {
    const response = await fetch('/examples/import-modal/index.html');
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    sourceCode = doc.body.innerHTML;
  } catch {
    sourceCode = '';
  }
})();

export { sourceCode };
