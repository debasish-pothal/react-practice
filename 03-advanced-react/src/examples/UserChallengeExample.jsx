import { useState } from "react";

const UserChallengeExample = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = users.length + 1;
    const newUser = {
      id,
      name,
    };

    setUsers((prevState) => {
      return [newUser, ...prevState];
    });

    setName("");
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button onClick={() => removeUser(user.id)} className="btn">
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserChallengeExample;
