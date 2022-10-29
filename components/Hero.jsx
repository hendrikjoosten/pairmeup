{/* This integrates the gif in the landing page */}

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/legacy/image'

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
        <div className="overlay">
            <div className="content">
                <h1>It`s like Bumble</h1>
                <h1>but for programmers</h1>
                <h2>logo placeholder</h2>
                <h2>Find your perfect partner today and contribute to one of over X open source projects.</h2>
                <button>Sign in with Github</button>
                <button>Browse Projects</button>
            </div>
        </div>
        </motion.div>

    </div>
    )
}

export default Hero