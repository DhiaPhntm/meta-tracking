import { useState } from "react";

import Spinner from "@/svg/circle-gradient.svg";
import { useFBAppState } from "@/contexts/FBAppState";

interface Props {
  scope: string;
  label: string;
}

const FBLoginPrompt = ({ scope, label }: Props) => {
  const { FBAccessToken, setFBStatus, setFBPermissions } = useFBAppState();
  const [isRequesting, setIsRequesting] = useState(false);
  const login = () => {
    if (window.FB) {
      setIsRequesting(true);
      window.FB.login(
        function (response: any) {
          setFBStatus(response);
          setFBPermissions(response.authResponse.grantedScopes);
          setIsRequesting(false);
          console.log("LoginResponse:" + JSON.stringify(response));
        },
        {
          scope: scope,
          return_scopes: true,
          access_token: FBAccessToken,
        }
      );
    }
  };

  return (
    <p>
      <button onClick={login}>{label}</button>
      {isRequesting && <Spinner className="spinner" />}
    </p>
  );
};

export default FBLoginPrompt;
