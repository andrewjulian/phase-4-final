import React from "react";

const Profile = ({ currentUser }) => {
  const { username, display_name } = currentUser;

  return (
    <>
      <h2>{display_name}</h2>
      <h4>{username}</h4>
    </>
  );
};

export default Profile;
