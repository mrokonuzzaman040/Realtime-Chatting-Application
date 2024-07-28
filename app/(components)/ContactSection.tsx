"use client";
import { motion } from 'framer-motion'

const ContactSection = () => {
    return (
        <section className="container mx-auto py-20">
            <motion.div
                className="text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-lg mb-4">We&apos;d love to hear from you. Reach out to us with any questions or feedback.</p>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            className="w-full p-3 bg-gray-800 text-white rounded-lg"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="w-full p-3 bg-gray-800 text-white rounded-lg"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <textarea
                            className="w-full p-3 bg-gray-800 text-white rounded-lg"
                            placeholder="Your Message"
                            rows={4}
                        ></textarea>
                    </div>
                    <button type="submit" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-lg">Send Message</button>
                </form>
            </motion.div>
        </section>
    )
}

export default ContactSection
