import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
        {children}
        <ChatBot/>
      <Footer />
    </>
  );
};
