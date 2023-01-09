const FBLoginPrompt = () => {
  const login = () => {
    if (window.FB) {
      window.FB.login(
        function (response: any) {
          if (response.authResponse) {
            console.log("Welcome!  Fetching your information.... ");
            window.FB.api("/me", function (response: any) {
              console.log("Good to see you, " + response.name + ".");
            });
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        },
        {
          scope:
            "email,name,age_range,birthday,gender,installed,location,friends{id,name,age_range,friends},languages",
        }
      );
    }
  };

  return (
    <p>
      <br />
      <button onClick={login}>Login to facebook</button>
    </p>
  );
};

export default FBLoginPrompt;
