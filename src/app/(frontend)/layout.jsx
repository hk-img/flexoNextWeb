import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default layout;
