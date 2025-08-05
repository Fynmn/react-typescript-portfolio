import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";
import { motion } from "framer-motion";
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

      <motion.div 
        whileHover={{ 
          scale: 1.05,
          y: -3,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }
        }}
        whileTap={{ 
          scale: 0.98,
          y: -1,
          transition: { duration: 0.1 }
        }}
        animate={{ 
          y: [0, -1, 0],
          transition: { 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }
        }}
      >
                 <FlatShadowCard onClick={handleDownload}>
           <motion.p 
             className="px-4 py-2 text-yellow-900 font-semibold select-none"
             whileHover={{ 
               color: "#92400e", // darker yellow
               transition: { duration: 0.2 }
             }}
           >
             {btnText}
           </motion.p>
         </FlatShadowCard>
      </motion.div>
    </div>
  );
};

export default DownloadButton;
