"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
//   const searchParams = useSearchParams(); 
//   const type = searchParams.get("type");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
}
