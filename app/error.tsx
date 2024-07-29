"use client";
import { NextPageContext } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ErrorProps {
    statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
    const getMessage = (code: number) => {
        switch (code) {
            case 404:
                return "Page Not Found";
            case 500:
                return "Internal Server Error";
            default:
                return "An unexpected error occurred";
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg"
            >
                <motion.h1
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-6xl font-bold text-white mb-4"
                >
                    {statusCode}
                </motion.h1>
                <motion.p
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl text-white mb-8"
                >
                    {getMessage(statusCode)}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Link href="/">
                        <a className="text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg">
                            Go back to Home
                        </a>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
