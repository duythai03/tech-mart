import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

function TypeProductPage() {
  return (
    <div className="max-w-screen-xl mx-auto flex mt-4 justify-center">
      <div className="w-2/12 hidden lg:block mr-4 bg-white p-3 rounded-lg h-[636px]">
        <NavbarComponent />
      </div>
      <div className="w-10/12 bg-white p-4 rounded-lg">
        <div className="grid grid-cols-2 mb-4 md:grid-cols-3 xl:grid-cols-4 justify-items-center mt-4 gap-y-6">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default TypeProductPage;
