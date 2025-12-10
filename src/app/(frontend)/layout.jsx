import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";
import ScrollToTop from "@/components/frontend/scrollToTop/ScrollToTop";
import TopLoadingBar from "@/components/frontend/topLoadingBar/TopLoadingBar";
import FrontendProvider from "@/providers/FrontendProvider";
import ZohoLoader from "@/components/frontend/ZohoLoader";

export default function RootLayout({ children }) {
  return (
    <>
      <FrontendProvider>
        <Header />
        <ScrollToTop/>
        <TopLoadingBar />
        {children}
        <ChatBot />
        <Footer />
        <ZohoLoader />
      </FrontendProvider>
    </>
  );
}
