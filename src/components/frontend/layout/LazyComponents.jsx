"use client";
import dynamic from "next/dynamic";

// Client component wrapper for lazy loading non-critical components
// This fixes the Next.js 15 error: ssr: false not allowed in Server Components
const ChatBot = dynamic(() => import("@/components/frontend/icons/ChatBot"), {
  ssr: false,
  loading: () => null,
});
const ScrollToTop = dynamic(() => import("@/components/frontend/scrollToTop/ScrollToTop"), {
  ssr: false,
  loading: () => null,
});
const TopLoadingBar = dynamic(() => import("@/components/frontend/topLoadingBar/TopLoadingBar"), {
  ssr: false,
  loading: () => null,
});
const FooterWrapper = dynamic(() => import("@/components/frontend/footer/FooterWrapper"), {
  ssr: false,
  loading: () => null,
});
const ZohoLoader = dynamic(() => import("@/components/frontend/ZohoLoader"), {
  ssr: false,
  loading: () => null,
});

export default function LazyComponents() {
  return (
    <>
      <ScrollToTop />
      <TopLoadingBar />
      <ChatBot />
      <FooterWrapper />
      <ZohoLoader />
    </>
  );
}

