import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Helvetica solarpunk leggings deep v shoreditch, kogi hexagon. Yr
            blog actually, squid tumeric four loko tilde vegan. Normcore etsy
            pickled food truck. Ramps umami tofu fashion axe vexillologist
            portland mumblecore.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Hero Image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
