import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/image-2.jpg";
import { motion } from "framer-motion";
import { animationTwo, transition } from "./../animations/index";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero
        image={Image}
        title="Pit Bull"
        description="The American Pit Bull Terrier is a dog breed recognized by the United Kennel Club and the American Dog Breeders Association, but not the American Kennel Club. It is a medium-sized, intelligent, short-haired dog, of a solid build, whose early ancestors came from the British Isles"
      />
    </motion.div>
  );
};

export default About;
