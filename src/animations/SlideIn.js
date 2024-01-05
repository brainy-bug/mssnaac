/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";

const SlideIn = ({ classNames, from, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: {
      translateX: 0,
      translateY: 0,
      opacity: 1,
    },
    hidden: {
      translateX: from === "left" ? -30 : 30,
      translateY: from === "top" ? -30 : from === "bottom" ? 30 : 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      className={classNames}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
