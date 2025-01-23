const htmlPreview = document.getElementById("html-preview");
const htmlEditor = document.getElementById("html-editor");

htmlEditor.addEventListener("input", updatePreview);

function updatePreview() {
  const content = htmlEditor.value;
  htmlPreview.contentDocument.open();
  htmlPreview.contentDocument.write(content);
  htmlPreview.contentDocument.close();
}

updatePreview();