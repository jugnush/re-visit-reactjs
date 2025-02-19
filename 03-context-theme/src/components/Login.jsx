import React, { useState, useContext } from "react";
import UseContextAnyName from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UseContextAnyName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName });
  };

  //   console.log(userName, password);
  return (
    <div>
      <h2>login</h2>
      <div>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
