import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './(components)/Header'
import HeroSection from './(components)/HeroSection'
import FeaturesSection from './(components)/FeaturesSection'
import Footer from './(components)/Footer'

const Home = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default Home
