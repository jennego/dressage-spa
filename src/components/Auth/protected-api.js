import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const clientId = process.env.REACT_APP_AUTH0_API_CLIENT_ID;

  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: "https://rails-secure-api",
        clientId: { clientId },
      });
      console.log(token);

      const response = await fetch(
        `http://localhost:3000/api/v1/dressage_tests`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          Get secured api
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;