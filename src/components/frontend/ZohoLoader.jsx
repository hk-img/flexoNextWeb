"use client";
import { useEffect } from "react";

const ZOHO_WIDGET_CODE =
  "0fc4dfe126a900d08cd66965a527bbcfebd987ea8870090a53afd7a22440aa53";

export default function ZohoLoader() {
  useEffect(() => {
    // Defer loading to idle time to avoid blocking render/LCP
    const loadZoho = () => {
      if (typeof window === "undefined") return;
      if (document.getElementById("zsiqscript")) return;
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: ZOHO_WIDGET_CODE,
        values: {},
        ready: function () {},
      };
      const d = document;
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zoho.in/widget";
      const t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    };

    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadZoho, { timeout: 2000 });
      } else {
        loadZoho();
      }
    }, 2000); // delay load to reduce initial blocking

    return () => clearTimeout(timer);
  }, []);

  return null;
}

