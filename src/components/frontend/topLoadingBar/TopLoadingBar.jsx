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

  useEffect(() => {
    const originalPush = router.push;
    router.push = async (...args) => {
      NProgress.start();
      try {
        await originalPush(...args);
      } finally {
        // Do nothing here, wait for pathname change
      }
    };

    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href && target.origin === window.location.origin) {
        NProgress.start();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      router.push = originalPush;
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      NProgress.done();
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
}
