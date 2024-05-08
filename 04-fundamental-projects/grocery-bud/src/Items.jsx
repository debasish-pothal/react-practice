import React from "react";
import Item from "./Item";

const Items = ({ items, editItem, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          editItem={editItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Items;
