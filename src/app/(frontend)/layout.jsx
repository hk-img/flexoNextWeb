import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";
import TopLoadingBar from "@/components/frontend/topLoadingBar/TopLoadingBar";
import FrontendProvider from "@/providers/FrontendProvider";

export default function RootLayout({ children }) {
  return (
    <>
      <FrontendProvider>
        <Header />
        <TopLoadingBar />
        {children}
        <ChatBot />
        <Footer />
      </FrontendProvider>
    </>
  );
}
