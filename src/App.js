import React from "react";

import pdfStr from "./utils/pdfStr";
import base64toBlob from "./utils/base64toBlob";

import "./App.css";

function handleOpenPdf() {
  const pdfBlob = base64toBlob(pdfStr, "application/pdf");
  const url = URL.createObjectURL(pdfBlob);

  var aEl = document.createElement("a");

  aEl.setAttribute("href", url);

  aEl.click();

  URL.revokeObjectURL(url);
}

function handleDownloadPdf() {
  const pdfBlob = base64toBlob(pdfStr, "application/pdf");
  const url = URL.createObjectURL(pdfBlob);

  var aEl = document.createElement("a");

  aEl.setAttribute("href", url);

  aEl.setAttribute("download", "blank.pdf");
  aEl.setAttribute("target", "_blank");

  aEl.click();

  URL.revokeObjectURL(url);
}

function App() {
  return (
    <div className="App">
      <button type="button" onClick={handleOpenPdf}>
        Open PDF
      </button>
      <button type="button" onClick={handleDownloadPdf}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
