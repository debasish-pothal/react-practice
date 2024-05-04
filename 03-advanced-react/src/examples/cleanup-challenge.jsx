import React, { useEffect, useState } from "react";

const RamdomComponent = () => {
  useEffect(() => {
    const intv = setInterval(() => {
      console.log("Random Component");
    }, 1000);

    return () => {
      clearInterval(intv);
    };
  }, []);

  return <h1>Hello</h1>;
};

function CleanupChallenge() {
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RamdomComponent />}
    </React.Fragment>
  );
}

export default CleanupChallenge;
