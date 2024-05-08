import React from "react";
import Question from "./Question";

const Questions = ({ questions, setShow }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question key={question.id} {...question} setShow={setShow} />
      ))}
    </section>
  );
};

export default Questions;
