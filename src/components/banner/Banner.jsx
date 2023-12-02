import React from 'react';
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg h-[200px]">
          <img className="hover:scale-105 transition-transform w-full " src={Banner1} alt="banner" />
        </div>
        <div className="overflow-hidden rounded-lg h-[200px]">
          <img className="hover:scale-105 transition-transform w-full h-full" src={Banner2} alt="banner" />
        </div>
      </div>
      
    </div>
  )
}

export default Banner
