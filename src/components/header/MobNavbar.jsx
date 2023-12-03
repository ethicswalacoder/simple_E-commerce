import React from "react";
import { BsSearch } from "react-icons/bs";
import {IoIosMenu} from "react-icons/Io"
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import CartCoBatz from "../cartcountbatch/CartCoBatz";

const MobNavbar = ({setShowCart}) => {
  return (
    <div className="sticky top-0 bg-white  z-10">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center ">
            <div className="flex items-center gap-6">
                <IoIosMenu size={30}/>
                <BsSearch
             
              size={24}
            />
            </div>
          <h1 className="text-3xl  ">Logo</h1>
          <div className=" flex gap-4 text-[30px] ">
          <FaRegCircleUser className="text-gray-600" />
          <div className="relative cursor-pointer" onClick={()=> setShowCart(true)}>
          <BsCart4 className="text-gray-600" />
          <CartCoBatz size="w-[20px] h-[20px]" />
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;
