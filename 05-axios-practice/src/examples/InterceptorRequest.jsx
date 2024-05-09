import axios from "axios";
import React from "react";
import { useEffect } from "react";

const url = "https://www.course-api.com/react-store-products";

axios.interceptors.request.use(
  (request) => {
    console.log("request being sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("reponse received");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const InterceptorRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>InterceptorRequest</div>;
};

export default InterceptorRequest;
