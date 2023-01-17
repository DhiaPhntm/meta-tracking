import { useState } from "react";

import Spinner from "@/svg/circle-gradient.svg";
import { useFBAppState } from "@/contexts/FBAppState";
const FBRevokePermissions = () => {
  const { setFBPermissions, setFBProfile, setFBStatus } = useFBAppState();
  const [isRequesting, setIsRequesting] = useState(false);
  const logout = () => {
    if (window.FB) {
      setIsRequesting(true);
      window.FB.api("/me/permissions", "delete", function (response: any) {
        console.log(response);
        if (response.success) {
          setFBPermissions(undefined);
          setFBStatus(undefined);
          setFBProfile(undefined);
        }
        setIsRequesting(false);
      });
    }
  };

  return (
    <p>
      <button onClick={logout}>Revoke all permissions</button>
      {isRequesting && <Spinner className="spinner" />}
    </p>
  );
};

export default FBRevokePermissions;
