import React, { useState } from "react";

function ToggleChallenge() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <React.Fragment>
      {showAlert ? <p>This is an alert</p> : null}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Toggle
      </button>
    </React.Fragment>
  );
}

export default ToggleChallenge;
