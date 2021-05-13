import React, { useEffect, useState } from "react";
import { Avatar } from "grommet";
import { useAuth0 } from "@auth0/auth0-react";
import ExternalApi from "../components/Auth/protected-api";

const Profile = () => {
  const { user } = useAuth0();
  const userRole = user["https://dressage-tests.herokuapp.com/roles"];

  console.log(user);

  return (
    <div className="fill-height">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col align-self-center"
            style={{ maxWidth: "130px", minWidth: "110px" }}
          >
            <Avatar src={user.picture} size="xlarge" />
          </div>
          <div className="col">
            Nickname: {user.nickname} <br />
            Name: {user.name} <br />
            Email: {user.email} <br />
            {userRole ? userRole : ""}
          </div>
        </div>
        <p>
          Sorry, you cannot yet change your profile info. It is planned for the
          future.{" "}
        </p>
        <p>
          To change your password (if you are not logged in via Google or
          Facebook), log out, click log in and click "forget your password".
        </p>

        {userRole.includes("Admin") ? <a> Go here to the Admin Site </a> : ""}
        {/* <ExternalApi /> */}
      </div>
    </div>
  );
};

export default Profile;
