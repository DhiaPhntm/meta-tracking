import { useState } from "react";

import Spinner from "@/svg/circle-gradient.svg";

const FBLogout = () => {
  const [isRequesting, setIsRequesting] = useState(false);
  const logout = () => {
    setIsRequesting(true);
    if (window.FB) {
      window.FB.logout(function (response: any) {
        setIsRequesting(false);
        console.log(response);
      });
    }
  };

  return (
    <p>
      <button onClick={logout}>Logout of facebook</button>
      {isRequesting && <Spinner className="spinner" />}
    </p>
  );
};

export default FBLogout;
