import React from "react";
import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />

      <span className="tour-price">{price}</span>

      <div className="tour-info">
        <h5>{name}</h5>
        {readMore ? (
          <p>
            {info}
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              Show Less
            </button>
          </p>
        ) : (
          <p>
            {info.substring(0, 200)}...{" "}
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              Read More
            </button>
          </p>
        )}

        <button
          type="button"
          className="btn btn-block"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
