{/* This integrates the gif in the landing page */}

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/legacy/image'

const About_Background = () => {
    return (
    <div className={'image-container'}>
        <motion.div
        className="About_Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/assets/about.gif" layout='fill' className={'image'} alt="gif" />
        <div className="overlay">
            <div className="content">

                <h2>about</h2>
                <h5>what is this really about? </h5>

            </div>
        </div>
        </motion.div>

    </div>
    )
}

export default About_Background