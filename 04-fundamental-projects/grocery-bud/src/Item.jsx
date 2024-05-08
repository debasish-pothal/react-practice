import React from "react";

const Item = ({ item, editItem, removeItem }) => {
  const { title, completed, id } = item;

  const handleCheckbox = () => {
    editItem(id);
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={completed} onChange={handleCheckbox} />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {title}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default Item;
