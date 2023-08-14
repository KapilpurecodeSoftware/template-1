
import React, { useState, useEffect } from "react";
import pdfFile from "../assets/DIShAWebAppDocumentation-compressed.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex justify-center">
              <div
                className="h-[90svh] w-[100%] sm:w-[800px]"
                // style={{
                //   // width: "700px",
                //   // height:"90vh",
                //   // border: "3px solid gray",
                //   // backgroundColor: "black",
                // }}
              >
                {/* <header className="App-header">
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="600" pageNumber={pageNumber} />
          </Document>
          <p> Page {pageNumber} of {numPages}</p>
          { pageNumber > 1 && 
          <button onClick={changePageBack}>Previous Page</button>
          }
          {
            pageNumber < numPages &&
            <button onClick={changePageNext}>Next Page</button>
          }
        </header> */}
                <center>
                  <div
                    className="h-full"
                    style={{
                      // height: "600px",
                      // overflowY: "scroll",
                      backgroundColor: "black",
                    }}
                  >
                    <Document
                    //   file={{url:"https://drive.google.com/file/d/1p9nL1VNTdVVCzWRpoE23DAe5MF_REh9x/view"}}
                    file={pdfFile}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <Page
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        customTextRenderer={false}
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                        />
                      ))}
                    </Document>
                  </div>
                </center>
              </div>
            </div>
  );
}