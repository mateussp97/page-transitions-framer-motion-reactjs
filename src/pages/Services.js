import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/image-3.jpg";
import { motion } from "framer-motion";
import { animationThree, transition } from "./../animations/index";

const Services = () => {
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animationThree}
    >
      <Header />
      <Hero
        image={Image}
        title="Giant Panda"
        description="The giant panda, also known as the panda bear or simply the panda, is a bear native to south central China. It is characterised by large, black patches around its eyes, over the ears, and across its round body. The name giant panda is sometimes used to distinguish it from the red panda, a neighboring musteloid."
      />
    </motion.div>
  );
};

export default Services;
