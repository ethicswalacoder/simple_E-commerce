import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import CartCoBatz from "../cartcountbatch/CartCoBatz";

const Header = ({setShowCart}) => {
  return (
    <div className="sticky top-0 bg-white  z-10">
      <div className="container  hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium ">Logo</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              placeholder="Search Product..."
            />
            <BsSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>

          <div className="flex gap-4">
            <div className="icon__wrapper">
              <FaRegCircleUser className="text-gray-600" />
            </div>
            <div className="icon__wrapper1 relative cursor-pointer" onClick={()=> setShowCart(true)}>
              <BsCart4 className="text-gray-600" />
              <CartCoBatz size="w-[25px] h-[25px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
