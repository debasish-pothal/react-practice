import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    const newIndex = (index + 1) % people.length;

    setIndex(newIndex);
  };

  const prevPerson = () => {
    const newIndex = (index - 1 + people.length) % people.length;

    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />

          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={() => prevPerson()}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextPerson()}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};

export default App;
