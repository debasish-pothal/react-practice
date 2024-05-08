import React, { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <List people={people} />

        <button type="button" className="btn btn-block" onClick={clearList}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
