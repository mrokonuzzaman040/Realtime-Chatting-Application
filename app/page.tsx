import Head from 'next/head'
import HeroSection from './(components)/HeroSection'
import FeaturesSection from './(components)/FeaturesSection'
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
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <SignUpSection />
      <ContactSection />
    </div>
  )
}

export default Home
