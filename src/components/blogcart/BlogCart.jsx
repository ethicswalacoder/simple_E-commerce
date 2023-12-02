import React from 'react'

const BlogCart = ({img, title, date, comment}) => {
  return (
    <div className="space-y-4">
        <img className="rounded-lg hover:scale-105 transition-transform w-full h-[300px]" src={img} alt="post" />
      <div className="text-accent font-medium">
        <span>{date} / </span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCart
