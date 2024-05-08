import React from "react";
import Title from "./Title";
import menu from "./data";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    let filteredItems = [...menu];

    if (category !== "all") {
      filteredItems = filteredItems.filter(
        (item) => item.category === category
      );
    }

    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
