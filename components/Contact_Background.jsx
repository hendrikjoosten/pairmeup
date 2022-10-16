{/* This integrates the gif in the landing page */}

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'

const Contact_Background = () => {
    return (
    <div className={'image-container'}>
        <motion.div
        className="Contact_Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/assets/contact.gif" layout='fill' className={'image'} alt="gif" />
        <div className="overlay">
            <div className="content">

                <h2>contact us by burning your keyboard and sending the appropriate smoke signals</h2>

            </div>
        </div>
        </motion.div>

    </div>
    )
}

export default Contact_Background