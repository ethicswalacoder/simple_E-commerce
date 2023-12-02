import React from 'react';
import Noodles from "../../assets/noodles.jpg";
import Item1 from "../../assets/item1.jpg";
import Item5 from "../../assets/item5.png";
import Item6 from "../../assets/item6.png";
import Item4 from "../../assets/item4.png";
import Productcard from '../products/Productcard';

const data = [
    {
        id: 0,
        img:Item1 ,
        name: "Dried Mango",
        price: 500,
    },
    {
        id: 1,
        img:Item5 ,
        name: "Crunchy Crisps",
        price: 500,
    },
    {
        id: 2,
        img:Item6 ,
        name: "Jweel Cranberries",
        price: 500,
    },
    {
        id: 3,
        img: Item4,
        name: "Almod organic",
        price: 500,
    },
];

const FeatureSectionBreackfast = () => {
  return (
    <div>
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className="font-medium text-2xl"> Breakfast & Dairy </h3>
                <p className="text-gray-600 mt-2">
                    Buy farm fresh fruits and vegetables online at the  best price.
                </p>
            </div>

            <div className="space-x-4 mt-8 lg:mt-0">
            <button className='feature_btn'>Egg & Dairy</button>
            <button className="text-gray-600 hover:text-accent">
              Pizza
            </button>
            <button className="text-gray-600 hover:text-accent">
               Snacks
            </button>
            </div>
        </div>
     

<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
    <div className="">
        <img className="w-full h-full object-cover " src={Noodles} alt="banner" />
    </div>

    {data.map((el)=> (
        <Productcard key={el.id}
        img={el.img}
        name={el.name}
        price={el.price}/>
    ))}
</div>

    </div>
    </div>
  )
}

export default FeatureSectionBreackfast
