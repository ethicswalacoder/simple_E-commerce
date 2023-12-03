import { useState, createContext, useContext } from "react"

const CartContext = createContext({
  product: [],
  addToCart: () => {}
})

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([])

  const addToCart = (cart) => {
    //write login of add to cart
    setProduct(prevCart => [...prevCart, cart])
  }
  return (
    <CartContext.Provider value={{ product, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}
