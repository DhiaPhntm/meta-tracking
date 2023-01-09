import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  isHydrated: boolean;
  FBStatus: any;
  FBProfile: any;
};

interface AppStateProps {
  children?: React.ReactNode;
}

const FBAppStateContext = createContext<ContextProps>({} as ContextProps);

const FBAppStateProvider = ({ children }: AppStateProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [FBStatus, setFBStatus] = useState();
  const [FBUserID, setFBUserID] = useState();
  const [FBProfile, setFBProfile] = useState();

  useEffect(() => {
    setIsHydrated(true);
    setTimeout(() => {
      if (window.FB && !FBUserID) {
        window.FB.getLoginStatus(function (response: any) {
          statusChangeCallback(response);
        });
      }
    }, 100);
  }, [FBUserID]);

  const statusChangeCallback = (result: any) => {
    console.log(result);
    setFBStatus(result);
    if (result.authResponse && result.authResponse.userID) {
      setFBUserID(result.authResponse.userID);
      //get public profile
      window.FB.api(
        result.authResponse.userID,
        {
          fields:
            "email,name,age_range,birthday,gender,installed,location,friends{id,name,age_range,friends},languages",
        },
        function (response: any) {
          if (response && !response.error) {
            setFBProfile(response);
            console.log(response);
          }
        }
      );
    }
  };

  return (
    <FBAppStateContext.Provider
      value={{
        isHydrated,
        FBStatus,
        FBProfile,
      }}
    >
      {children}
    </FBAppStateContext.Provider>
  );
};

const useFBAppState = () => useContext(FBAppStateContext);

export { FBAppStateProvider, useFBAppState };
