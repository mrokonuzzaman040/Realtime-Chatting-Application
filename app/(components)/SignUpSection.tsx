"use client";
import { motion } from 'framer-motion'

const SignUpSection = () => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-white"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
                    <p className="text-lg mb-6">Sign up now and start connecting with your friends and family.</p>
                    <button className="px-6 py-3 bg-white text-cyan-500 hover:bg-gray-200 rounded-full text-lg">Sign Up Now</button>
                </motion.div>
            </div>
        </section>
    )
}

export default SignUpSection
