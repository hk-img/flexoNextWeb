import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";
import ScrollToTop from "@/components/frontend/scrollToTop/ScrollToTop";
import TopLoadingBar from "@/components/frontend/topLoadingBar/TopLoadingBar";
import FrontendProvider from "@/providers/FrontendProvider";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <>
      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://salesiq.zoho.in" />
      <link rel="dns-prefetch" href="https://salesiq.zoho.in" />
      <link rel="preconnect" href="https://s3.ap-south-1.amazonaws.com" />
      <link rel="dns-prefetch" href="https://s3.ap-south-1.amazonaws.com" />
      
      <FrontendProvider>
        <Header />
        <ScrollToTop/>
        <TopLoadingBar />
        {children}
        <ChatBot />
        <Footer />
        {/* Zoho script - lazy load strategy for better performance */}
        <Script 
          id="zoho-salesiq" 
          strategy="lazyOnload"
        >
          {`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "0fc4dfe126a900d08cd66965a527bbcfebd987ea8870090a53afd7a22440aa53",
              values: {},
              ready: function () {}
            };
            var d = document;
            s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zsiqscript";
            s.defer = true;
            s.src = "https://salesiq.zoho.in/widget";
            t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `}
        </Script>
      </FrontendProvider>
    </>
  );
}
