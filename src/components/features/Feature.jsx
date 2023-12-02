import React from 'react';
import {LiaShippingFastSolid, LiaMoneyBillWaveSolid,LiaGiftSolid, LiaAdSolid} from "react-icons/lia";
import {FiPhoneCall} from "react-icons/fi";
import FeatureCard from './FeatureCard';

const data = [
    {
        id: 0,
        title: "Free Shipping",
        icons: <LiaShippingFastSolid/>,
    },
    {
        id:1,
        title: "Best Price Guarantee ",
        icons: <LiaMoneyBillWaveSolid/>,
    },
    {
        id:2,
        title: "Free Curbside Pickup",
        icons: <LiaGiftSolid/>,
    },
    {
        id:3,
        title: "FreeShipping",
        icons: <FiPhoneCall/>,
    },
];

const Feature = () => {
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {
                data.map((el)=> (
<FeatureCard
key={el.id}
title={el.title}
icons={el.icons}
/>
                ))
            }
        </div>
      
    </div>
  )
}

export default Feature
