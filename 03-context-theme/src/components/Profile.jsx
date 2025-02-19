import React, { useContext } from "react";
import UseContextAnyName from "../context/UserContext";

function Profile() {
  const { user } = useContext(UseContextAnyName);

  console.log(user);
  return (
    <div>
      <div>
        {user ? (
          <p className="text-2xl text-amber-300">
            Hi {user.userName} you loged in
          </p>
        ) : (
          <p>Please login</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
