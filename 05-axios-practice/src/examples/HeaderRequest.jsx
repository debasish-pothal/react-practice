import axios from "axios";
import React, { useEffect } from "react";

const url = "https://icanhazdadjoke.com/";

const HeaderRequest = () => {
  const fetchJoke = async () => {
    try {
      const response = await axios.get(url, {
        headers: { Accept: "application/json" },
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return <div>HeaderRequest</div>;
};

export default HeaderRequest;
