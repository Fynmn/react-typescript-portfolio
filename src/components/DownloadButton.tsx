import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import FlatShadowCard from "./FlatShadowCard";

// Import the worker file
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

interface DownloadButtonProps {
  btnText: string;
  pdfUrl: string;
}

interface onDocumentLoadSuccessProps {
  numPages: any;
}

pdfjs.GlobalWorkerOptions.workerSrc =
  "/node_modules/pdfjs-dist/build/pdf.worker.min.js";

const DownloadButton: React.FC<DownloadButtonProps> = ({ btnText, pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess: React.FC<onDocumentLoadSuccessProps> = ({
    numPages,
  }) => {
    setNumPages(numPages);
    return null;
  };

  const handleDownload = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="">
      {/* <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document> */}

      <div className="hover:scale-110">
        <FlatShadowCard onClick={handleDownload}>
          <p className="px-4 py-2 text-yellow-900">{btnText}</p>
        </FlatShadowCard>
      </div>
    </div>
  );
};

export default DownloadButton;
