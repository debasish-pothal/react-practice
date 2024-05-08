import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItem = {
      id: nanoid(),
      title: item,
      completed: false,
    };

    setItems((prevItems) => [newItem, ...prevItems]);

    toast.success("item added to the list");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });

    setItems(newItems);
    toast.success("item updated in the list");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
    toast.success("item removed from the list");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-right" />
      <Form addItem={addItem} />

      <Items items={items} editItem={editItem} removeItem={removeItem} />
    </section>
  );
};

export default App;
