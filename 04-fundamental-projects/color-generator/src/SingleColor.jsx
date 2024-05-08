import React, { useEffect, useState } from "react";

const SingleColor = ({ color, index }) => {
  const [status, setStatus] = useState(false);

  const { hex, weight } = color;

  const copyToClipboard = (color) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);

      setStatus(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={() => copyToClipboard(`#${hex}`)}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {status && <p>Copied</p>}
    </article>
  );
};

export default SingleColor;
