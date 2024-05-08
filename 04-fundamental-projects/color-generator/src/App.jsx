import React, { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    console.log(color);

    setColors(new Values(color).all(10));
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};

export default App;
