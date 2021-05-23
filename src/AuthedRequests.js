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
