"use client";
import React, { useEffect, useState } from "react";
let DOMPurify; 

const ShowHtmlData = ({ html }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    import("dompurify").then((module) => {
      DOMPurify = module.default;
      setSanitizedHtml(DOMPurify.sanitize(html));
    });
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default ShowHtmlData;
