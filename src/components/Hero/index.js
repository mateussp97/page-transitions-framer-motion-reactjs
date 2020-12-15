import React from "react";
import { Container, Section } from "./HeroElements";

const Hero = ({ image, title, description }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Learn more</button>
      </Container>
    </Section>
  );
};

export default Hero;
