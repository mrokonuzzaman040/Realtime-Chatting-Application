"use client";
import { motion } from 'framer-motion'

const testimonials = [
    {
        quote: "This app changed the way I connect with friends!",
        author: "Happy User",
    },
    {
        quote: "The video call quality is amazing!",
        author: "Satisfied User",
    },
]

const TestimonialsSection = () => {
    return (
        <section className="bg-black bg-opacity-70 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <p className="text-lg italic mb-4">&apos;{testimonial.quote}&apos;</p>
                            <p className="text-sm font-bold">{testimonial.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
