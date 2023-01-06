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
            "email, user_age_range, user_birthday, user_gender, user_friends",
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
