import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LayoutBase({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
