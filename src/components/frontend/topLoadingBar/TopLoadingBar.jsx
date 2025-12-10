"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./progress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export default function TopLoadingBar() {
  const router = useRouter();
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const originalPush = router.push;
    
    router.push = async (...args) => {
      const targetUrl = args[0];
      if (targetUrl === pathname) return originalPush(...args);
      
      // Only start if not already navigating (prevent double start)
      if (!isNavigatingRef.current) {
        isNavigatingRef.current = true;
        NProgress.start();
      }
      
      try {
        await originalPush(...args);
      } finally {
        // Navigation complete will be handled by pathname change
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href && target.origin === window.location.origin) {
        const targetPath = target.pathname;
        if (targetPath === pathname) return;
        
        // REMOVED: NProgress.start() from here
        // router.push will handle it, preventing double loading bar
        // This was causing loader to show 2 times
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      router.push = originalPush;
      document.removeEventListener("click", handleClick);
      isNavigatingRef.current = false;
    };
  }, [router, pathname]);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Navigation complete - hide loading bar and reset flag
      isNavigatingRef.current = false;
      NProgress.done();
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
