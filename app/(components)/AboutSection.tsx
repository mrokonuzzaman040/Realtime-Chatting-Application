"use client";
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section className="container mx-auto py-20">
            <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-lg mb-4">
                    We are a passionate team dedicated to connecting people around the world.
                    Our mission is to provide a seamless and secure platform for communication and sharing.
                </p>
                <p className="text-lg">
                    Join us on this journey and experience the future of social media.
                </p>
            </motion.div>
        </section>
    )
}

export default AboutSection
