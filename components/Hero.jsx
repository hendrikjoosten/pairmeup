{/* This integrates the gif dance.gif in the landing page */}

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'

const Hero = () => {
    return (
    <div className={'image-container'}>
        <motion.div
        className="hello__hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/assets/dance.gif" layout='fill' className={'image'} alt="gif" />
        <div className="overlay"></div>
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
        </motion.div>

    </div>
    )
}

export default Hero