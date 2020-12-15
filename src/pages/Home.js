import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/image-1.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "./../animations/index";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero
        image={Image}
        title="Jaguar"
        description="The jaguar is a large felid species and the only extant member of the genus Panthera native to the Americas. The jaguars present range extends from the extreme southwestern United States and Mexico in North America, across much of Central America, and south to Paraguay and northern Argentina in South America."
      />
    </motion.div>
  );
};

export default Home;
