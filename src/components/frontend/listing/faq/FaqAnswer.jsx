"use client";
import React, { useEffect, useState } from "react";
let DOMPurify;

const FaqAnswer = ({ answer }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    import("dompurify").then((module) => {
      DOMPurify = module.default;
      setSanitizedHtml(DOMPurify.sanitize(answer));
    });
  }, [answer]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      className="font-montserrat faq-style"
    />
  );
};

export default FaqAnswer;
