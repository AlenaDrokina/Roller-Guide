import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../helpers/Api";

function Profile(props) {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  let { userId } = useParams();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    let myresponse = await Api.getUser(userId);
    if (myresponse.ok) {
      setUser(myresponse.data);
      setErrorMsg("");
    } else {
      setUser(null);
      let msg = `Error ${myresponse.status}: ${myresponse.error}`;
      setErrorMsg(msg);
    }
  }

  if (errorMsg) {
    return <h2 style={{ color: "blue" }}>{errorMsg}</h2>;
  }

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Profile">
      <h1>Profile View</h1>
      ID: {user.id}
      <br />
      Username: {user.username}
      <br />
      Email: {user.email}
    </div>
  );
}

export default Profile;
