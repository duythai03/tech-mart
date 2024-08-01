import React, { useState } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

function TypeProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="max-w-screen-xl mx-auto flex mt-4 justify-center">
      <div className="w-2/12 hidden lg:block mr-4 bg-white p-3 rounded-lg h-[636px]">
        <NavbarComponent />
      </div>
      <div className="w-full md:w-10/12 bg-white p-4 rounded-lg">
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
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default TypeProductPage;
