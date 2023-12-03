import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MobNavbar from '../../components/header/MobNavbar'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import FeatureSectionFruit from '../../components/features/FeatureSectionFruit'
import FeatureSectionBreackfast from '../../components/features/FeatureSectionBreackfast'
import Banner from '../../components/banner/Banner'
import BlogSection from '../../components/blogsection/BlogSection'
import NewsLatter from '../../components/NewsLatter'
import Feature from '../../components/features/Feature'
import Footer from '../../components/Footer'
import { CartContextProvider } from '../../context/CartContext'
import Cart from '../../components/cart/Cart'

const Home = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <>
    <CartContextProvider>
      <Header setShowCart={setShowCart}/>
      <MobNavbar setShowCart={setShowCart}/>
      <Hero/>
      <Category/>
      <FeatureSectionFruit/>
      <FeatureSectionBreackfast/>
      <Banner/>
      <BlogSection/>
      <NewsLatter/>
      <Feature/>
      <Footer/>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </CartContextProvider>
    </>
  )
}

export default Home
