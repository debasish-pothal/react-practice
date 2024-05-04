import React, { useState } from "react";
import { data } from "../data";

function UseStateExample01() {
  const [users, setUsers] = useState(data);

  const deleteOne = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const deleteAll = () => {
    setUsers([]);
  };

  return (
    <React.Fragment>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button className="btn" onClick={() => deleteOne(user.id)}>
            Delete
          </button>
        </div>
      ))}

      <button className="btn" onClick={deleteAll}>
        Clear All
      </button>
    </React.Fragment>
  );
}

export default UseStateExample01;
