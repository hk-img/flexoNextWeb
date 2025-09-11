import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import ChatBot from "@/components/frontend/icons/ChatBot";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
        <ChatBot/>
      <Footer />
    </>
  );
};

export default layout;
