import React, { useEffect, useState } from "react";

function UseEffectExample01() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="users">
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.avatar_url} />
          <div>
            <h5>{user.login}</h5>
            <a href={user.html_url}>Profile</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UseEffectExample01;
