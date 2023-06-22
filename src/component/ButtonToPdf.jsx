import React from "react";

import cartoon from "../assets/cartoon2.png";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ButtonToPdf() {
  //-----test export pdf: fonctionne avec le screenshot (ex: signature)-----------------

  function generatePDFFromScreenshot() {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      const pdf = new jsPDF();
      const imageData = canvas.toDataURL("image/jpeg");
      pdf.addImage(imageData, "JPEG", 10, 10, 190, 277);
      pdf.save("screenshot.pdf");
    });
  }
  const handleGeneratePDF = () => {
    generatePDFFromScreenshot();
  };
  return (
    <div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
}
