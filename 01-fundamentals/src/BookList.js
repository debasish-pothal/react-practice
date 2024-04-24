import React from "react";
import Book from "./Book";
import "./App.css";

function BookList() {
  const books = [
    {
      id: 1,
      name: "Maktub",
      author: "Paulo Coelho",
      thumbnail: "/images/book1.jpg",
    },
    {
      id: 2,
      name: "Knife",
      author: "Salman Rushdie",
      thumbnail: "/images/book2.jpg",
    },
    {
      id: 3,
      name: "She'll Never Make It",
      author: "Masoom Minawala",
      thumbnail: "/images/book3.jpg",
    },
  ];

  const getBook = (id) => {
    const book = books.find((b) => b.id === id);
    console.log(book);
  };

  return (
    <div className="book-container">
      {books.map((book, index) => (
        <Book key={book.id} num={index + 1} {...book} getBook={getBook} />
      ))}
    </div>
  );
}

export default BookList;
