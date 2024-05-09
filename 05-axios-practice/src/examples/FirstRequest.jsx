import React from "react";
import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>FirstRequest</div>;
};

export default FirstRequest;
