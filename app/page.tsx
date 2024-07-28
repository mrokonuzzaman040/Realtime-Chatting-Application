import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from './(components)/Header'
import HeroSection from './(components)/HeroSection'
import FeaturesSection from './(components)/FeaturesSection'
import Footer from './(components)/Footer'
import TestimonialsSection from './(components)/TestimonialsSection'
import AboutSection from './(components)/AboutSection'
import SignUpSection from './(components)/SignUpSection'
import ContactSection from './(components)/ContactSection'


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Social Media App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <SignUpSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
