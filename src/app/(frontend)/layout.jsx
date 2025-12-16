import FrontendProvider from "@/providers/FrontendProvider";
import Header from "@/components/frontend/header/Header";
import LazyComponents from "@/components/frontend/layout/LazyComponents";

// Header ko direct import karo (SSR needed for SEO)
// Non-critical components ko LazyComponents wrapper mein rakho (client component)

export default function RootLayout({ children }) {
  return (
    <>
      <FrontendProvider>
        <Header />
        {children}
        <LazyComponents />
      </FrontendProvider>
    </>
  );
}
