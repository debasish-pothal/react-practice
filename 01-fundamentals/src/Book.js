import React from "react";
import "./App.css";

function Book(props) {
  const { id, num, name, author, thumbnail, getBook } = props;

  return (
    <div className="book">
      <span className="book-number">{num}</span>
      <img src={thumbnail} alt={name} />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{author}</p>

      <button onClick={() => getBook(id)}>Get Book</button>
    </div>
  );
}

export default Book;
