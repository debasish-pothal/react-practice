import React, { useEffect, useState } from "react";

function UseEffectExample02() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const userResp = await fetch(
          "https://api.github.com/users/QuincyLarson"
        );

        if (!userResp.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        const userDetails = await userResp.json();
        setUser(userDetails);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>Error occurred!!</h1>;
  }

  return (
    <React.Fragment>
      <img src={user.avatar_url} />
      <h1>{user.name}</h1>
      <h3>Works {user.company}</h3>
      <p>{user.bio}</p>
    </React.Fragment>
  );
}

export default UseEffectExample02;
