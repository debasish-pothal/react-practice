import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const setShow = (id, status) => {
    const updatedQuestions = questions.map((question) => {
      if (id === question.id) {
        question.show = status;
      } else {
        question.show = false;
      }

      return question;
    });

    setQuestions(updatedQuestions);
  };

  return (
    <main>
      <Questions questions={questions} setShow={setShow} />
    </main>
  );
};

export default App;
