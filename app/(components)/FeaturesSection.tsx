"use client";

import { motion } from 'framer-motion'

const features = [
    {
        title: 'Real-time Chat',
        description: 'Communicate with your friends instantly.',
        icon: '💬',
    },
    {
        title: 'Voice & Video Calls',
        description: 'Stay connected with high-quality calls.',
        icon: '📞',
    },
    {
        title: 'File Sharing',
        description: 'Share photos, videos, and documents with ease.',
        icon: '📁',
    },
]

const FeaturesSection = () => {
    return (
        <section className="container mx-auto py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="relative p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg text-center border border-transparent transition-colors duration-500 ease-in-out hover:border-cyan-500 hover:border-opacity-50 hover:shadow-cyan-500/50"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="neon-border absolute inset-0 z-[-1] rounded-lg"></div>
                        <div className="text-6xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection
