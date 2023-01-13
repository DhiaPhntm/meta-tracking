import { useFBAppState } from "@/contexts/FBAppState";

const FBLogout = () => {
  const { setFBProfile } = useFBAppState();
  const logout = () => {
    if (window.FB) {
      window.FB.logout(function (response: any) {
        console.log(response);
        setFBProfile(response);
      });
    }
  };

  return (
    <p>
      <br />
      <button onClick={logout}>Logout of facebook</button>
    </p>
  );
};

export default FBLogout;
