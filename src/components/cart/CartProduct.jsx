import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const CartProduct = ({img, name, price}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img src={img} className="h-[100px]" alt={name} />
            <div><h3 className="font-medium">{name}</h3>
            <p className="text-gray-600">1 x {price}</p>
            </div>
        </div>
      <RxCross1/>
    </div>
  )
}

export default CartProduct
