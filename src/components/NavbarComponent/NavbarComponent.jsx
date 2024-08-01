import React from "react";

function NavbarComponent() {
  const renderContent = (type, option) => {
    switch (type) {
      case "text":
        return (
          <div className="">
            {option.map((option) => {
              return <div className="leading-8 text-xl">{option}</div>;
            })}
          </div>
        );
      case "checkbox":
        return (
          <div className="form-control">
            {option.map((option) => {
              return (
                <label className="label cursor-pointer">
                  <span className="label-text text-textColor text-xl">
                    {option.label}
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    value={option.value}
                  />
                </label>
              );
            })}
          </div>
        );
      case "star":
        return (
          <div className="flex">
            <div className="mr-2">Lọc theo Sao:</div>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        );
      case "price":
        return (
          <div className="">
            {option.map((option) => {
              return (
                <div className="rounded-lg bg-[#eee] text-[#38383d] inline-block px-3 mr-2 mb-2">
                  {option}
                </div>
              );
            })}
          </div>
        );
      default:
        return {};
    }
  };
  return (
    <div className="w-full my-4 text-textColor">
      <div className="text-2xl font-semibold">Danh mục</div>
      <div className="flex flex-col gap-6">
        {renderContent("text", ["Điện thoại", "Laptop", "Tablet", "Phụ kiện"])}
        {renderContent("checkbox", [
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ])}
        {renderContent("star")}
        {renderContent("price", [
          "0-100k",
          "100k-200k",
          "200k-300k",
          "300k-400k",
        ])}
      </div>
    </div>
  );
}

export default NavbarComponent;
