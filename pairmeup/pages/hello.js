// this renders the hero section of the page
// uses framer motion for animation

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hello">
      <motion.div
        className="hello__hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hello__hero__text">
          <h1>PairMeUp</h1>
          <p>Like tinder for pair programming.</p>
        </div>
        <div className="hello__hero__image">
          <img src="/assets/dance.gif" alt="hero" />
        </div>
      </motion.div>
      <h1 className="title"> Read <Link href="/driver">this page!</Link> </h1>
    </div>
  );
}



