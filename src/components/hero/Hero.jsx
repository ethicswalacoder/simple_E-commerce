import React from 'react';
import HeroImg from "../../assets/hero.jpg";
import HeroImg1 from "../../assets/hero1.jpg";
import HeroImg2 from "../../assets/hero2.jpg";
import {BsArrowRight} from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">

        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
            <img className="w-full h-full object-cover rounded-lg" src={HeroImg} alt="hero image" />

            <div className="absolute max-w-[500px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block">100% Original Bricks</p>
                <h2 className="text-2xl sm:text-4xl md:text-6xl  font-extrabold">
                Dried Fruits Best Healthy
                </h2>
                <p className="text-blue-800 text-xl pt-4 sm:pt-8 font-bold">Starting At</p>
                <div className="font-medium text-red-700 text-2xl sm:text-4xl pb-4 sm:pb-8 font-bold">
                ₹3999.00
                </div>
                <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-3 cursor-pointer">
                    Shop Now
                    <BsArrowRight/>
                </div>
            </div>
        </div>

<div className="relative">
    <img src={HeroImg2} alt="hero image" className="h-full object-cover rounded-lg"/>
</div>
<div className="relative">
    <img src={HeroImg1} alt="hero image" className="h-full object-cover rounded-lg"/>
</div>


      </div>
    </div>
  )
}

export default Hero;
