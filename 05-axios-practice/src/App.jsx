import React from "react";
import FirstRequest from "./examples/FirstRequest";
import HeaderRequest from "./examples/HeaderRequest";
import PostRequest from "./examples/PostRequest";
import InterceptorRequest from "./examples/InterceptorRequest";

const App = () => {
  return (
    <main>
      <InterceptorRequest />
    </main>
  );
};

export default App;
