import React from "react";
import { useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    setInterval(() => {
      nextSlide();
    }, 2000);
    // return () => {
    //   clearInterval(timer);
    // };
  });

  const prevSlide = () => {
    const prevPerson = (currentPerson - 1 + people.length) % people.length;

    setCurrentPerson(prevPerson);
  };

  const nextSlide = () => {
    const nextPerson = (currentPerson + 1) % people.length;

    setCurrentPerson(nextPerson);
  };

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button className="prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
