"use client";
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="relative h-[550px] bg-hero-pattern bg-cover bg-center flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"></div>
            <motion.div
                className="relative text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-4">Welcome to Social Media App</h2>
                <h3 className="text-2xl">Connect with friends and the world around you.</h3>
            </motion.div>
        </section>
    )
}

export default HeroSection
