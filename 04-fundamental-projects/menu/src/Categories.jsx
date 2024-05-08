import React from "react";

const Categories = ({ categories, filterCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          className="btn"
          onClick={() => filterCategories(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
