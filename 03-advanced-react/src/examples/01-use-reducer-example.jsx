import React, { useState, useReducer } from "react";
import { data } from "../data";

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      );

      return {
        people: newPeople,
      };
    case "CLEAR_LIST":
      return {
        people: [],
      };
    case "RESET_LIST":
      return defaultState;
    default:
      return defaultState;
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
    // setPeople([]);
  };

  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
    // setPeople(data);
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
