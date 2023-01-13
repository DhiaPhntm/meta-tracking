import { useFBAppState } from "@/contexts/FBAppState";

interface Props {
  scope: string;
  label: string;
}

const FBLoginPrompt = ({ scope, label }: Props) => {
  const { setFBProfile } = useFBAppState();
  const login = () => {
    if (window.FB) {
      window.FB.login(
        function (response: any) {
          setFBProfile(response);
          if (response.authResponse && response.authResponse.userID) {
            console.log("Welcome!  Fetching your information.... ");
            window.FB.api(
              response.authResponse.userID,
              {
                fields:
                  "email,name,age_range,birthday,gender,installed,location,friends{id,name,age_range,friends},languages",
              },
              function (response: any) {
                console.log("Good to see you, " + response.name + ".");
                setFBProfile(response);
              }
            );
          } else {
            console.log("User cancelled login or did not fully authorize.");
            setFBProfile(response);
          }
        },
        {
          scope: scope,
        }
      );
    }
  };

  return (
    <p>
      <br />
      <button onClick={login}>{label}</button>
    </p>
  );
};

export default FBLoginPrompt;
