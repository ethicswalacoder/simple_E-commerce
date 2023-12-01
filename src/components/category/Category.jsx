import React from 'react';

import Fruits from "../../assets/fruits.png"
import Veg from "../../assets/veg.jpg"
import Goods from "../../assets/goods.jpg"
import Brades from "../../assets/brades.png"
import Fish from "../../assets/fish.png"
import Eggs from "../../assets/eggs.jpeg"
import Drinks from "../../assets/drinks.jpg"
import Chips from "../../assets/chips.png"

import CategoryCard from './CategoryCard';

const data = [
  {
    id:0,
    name: "Fresh Fruits",
    img: Fruits,
   count: 10,
  },
  {
    id:1,
    name: "Fresh Vegs",
    img: Veg,
   count: 10,
  },
  {
    id:2,
    name: "Canned Goods",
    img: Goods,
   count: 8,
  },
  {
    id:3,
    name: "Bread & Bakery",
    img: Brades,
   count: 12,
  },
  {
    id:4,
    name: "Fishes",
    img: Fish,
   count: 10,
  },
  {
    id:5,
    name: "Egg & Dairy",
    img: Eggs,
   count: 100,
  },
  {
    id:6,
    name: "Soft Drinks",
    img: Drinks,
   count: 50,
  },
  {
    id:7,
    name: "Chips",
    img: Chips,
   count: 500,
  },
 
  
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
          key={el.id}
          img={el.img}
          name={el.name}
          count = {el.count}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Category
