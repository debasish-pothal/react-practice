import React from "react";

const UserContainer = ({ user, logout, login }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user.name}</p>{" "}
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className="btn" onClick={login}>
          login
        </button>
      )}
    </div>
  );
};

export default UserContainer;
