import BottomBar from "@/components/frontend/bottomBar/BottomBar";
import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";
import FrontendProvider from "@/providers/FrontendProvider";

export default function RootLayout({ children }) {
  return (
    <>
      <FrontendProvider>
        <Header />
        {children}
        <ChatBot />
        <BottomBar />
        <Footer />
      </FrontendProvider>
    </>
  );
}
