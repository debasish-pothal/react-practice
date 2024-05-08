import React from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Question = ({ id, title, info, show, setShow }) => {
  // const [show, setShow] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShow(id, !show)}>
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default Question;
