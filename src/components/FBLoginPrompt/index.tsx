import { useState } from "react";

import Spinner from "@/svg/circle-gradient.svg";
import { useFBAppState } from "@/contexts/FBAppState";

import { BaseButton } from "./styles";

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
    <>
      <BaseButton
        onClick={login}
        className="fb-login-button"
        data-scope={scope}
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="true"
        data-use-continue-as="true"
      ></BaseButton>
      <p>{label}</p>
      {isRequesting && <Spinner className="spinner" />}
    </>
  );
};

export default FBLoginPrompt;
