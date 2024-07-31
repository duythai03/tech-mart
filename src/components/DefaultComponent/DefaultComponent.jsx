import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

function DefaultComponent({ children }) {
  return (
    <div className="">
      <HeaderComponent />
      {children}
    </div>
  );
}

export default DefaultComponent;
