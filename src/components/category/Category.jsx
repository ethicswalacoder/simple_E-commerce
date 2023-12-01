import React from 'react';
// import Brick from "../../assets/brick.jpg";
import Brick from "../../assets/brick.jpg"

import CategoryCard from './CategoryCard';

const data = [
  {
    id:0,
    name: "Special Brick",
    img: Brick,
    price: 9999.00
  },
  {
    id:1,
    name: "NO1 Brick",
    img: Brick,
    price: 7999.00
  },
  {
    id:2,
    name: "NO2 Brick",
    img: Brick,
    price: 6999.00
  },
  {
    id:3,
    name: "NO3 Brick",
    img: Brick,
    price: 5999.00
  },
  {
    id:4,
    name: "NO3 Brick",
    img: Brick,
    price: 5999.00
  },
  {
    id:5,
    name: "NO3 Brick",
    img: Brick,
    price: 5999.00
  },
  {
    id:6,
    name: "NO3 Brick",
    img: Brick,
    price: 5999.00
  },
  {
    id:7,
    name: "NO3 Brick",
    img: Brick,
    price: 5999.00
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
          price = {el.price}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Category
