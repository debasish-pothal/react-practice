import axios from "axios";
import React from "react";

const url = "https://dummyjson.com/posts/add";

const data = {
  title: "blah blah...",
  userId: 5,
};

const PostRequest = () => {
  const postData = async () => {
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePost = () => {
    postData();
  };

  return (
    <div>
      PostRequest
      <button className="btn" onClick={handlePost}>
        POST
      </button>
    </div>
  );
};

export default PostRequest;
