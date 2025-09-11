import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import Call from "@/components/frontend/icons/Call";
import ChatBot from "@/components/frontend/icons/ChatBot";
import Whatsapp from "@/components/frontend/icons/Whatsapp";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
        <Call/>
        <Whatsapp/>
        <ChatBot/>
        {children}
      <Footer />
    </>
  );
};

export default layout;
