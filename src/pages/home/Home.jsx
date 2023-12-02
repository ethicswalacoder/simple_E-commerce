import React from 'react'
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

const Home = () => {
  return (
    <>
      <Header/>
      <MobNavbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruit/>
      <FeatureSectionBreackfast/>
      <Banner/>
      <BlogSection/>
      <NewsLatter/>
      <Feature/>
      <Footer/>
    </>
  )
}

export default Home
