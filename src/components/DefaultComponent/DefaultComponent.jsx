import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

function DefaultComponent({ children }) {
  return (
    <div className="">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}

export default DefaultComponent;
