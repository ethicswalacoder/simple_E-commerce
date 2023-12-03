import React from 'react';
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import BlogCart from '../blogcart/BlogCart';

const data = [
    {
      id: 0,
        img:Blog1,
        title: "Healthy Food Healthy Life",
        date: "Aug 27, 2024",
        comment: 8,
    },
    {id:1,
        img:Blog2,
        title: "Healthy Food Healthy Life",
        date: "Aug 27, 2024",
        comment: 8,
    },
    {id:2,
        img:Blog3,
        title: "Healthy Food Healthy Life",
        date: "Aug 27, 2024",
        comment: 8,
    },
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consecteturquaerat voluptates eligendi ut consectetur voluptatum ratione rerum ex optio voluptatem.
        </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el)=> (
            <BlogCart
            key={el.id}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
            />
        ))}
      </div>
    </div>
  )
}

export default BlogSection
