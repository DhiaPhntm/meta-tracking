import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  isHydrated: boolean;
  FBStatus: any;
  FBProfile: any;
  FBPermissions: any;
  setFBProfile: any;
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
  const [FBPermissions, setFBPermissions] = useState();

  useEffect(() => {
    setIsHydrated(true);
    setTimeout(() => {
      if (window.FB) {
        window.FB.Event.subscribe(
          "auth.statusChange",
          function (response: any) {
            console.log("statusChangeCallback: " + response);
            setFBStatus(response);
            if (response.authResponse && response.authResponse.userID) {
              setFBUserID(response.authResponse.userID);
              //get public profile
              window.FB.api(
                response.authResponse.userID,
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
              console.log("fetch permissions");
              //get permissions list
              window.FB.api(
                `/${FBUserID}/permissions`,
                function (response: any) {
                  console.log(response);
                  if (response && !response.error) {
                    setFBPermissions(response);
                  } else {
                    setFBPermissions(undefined);
                  }
                }
              );
            }
          }
        );
      }
    }, 0);
  }, [FBUserID]);

  return (
    <FBAppStateContext.Provider
      value={{
        isHydrated,
        FBStatus,
        FBProfile,
        FBPermissions,
        setFBProfile,
      }}
    >
      {children}
    </FBAppStateContext.Provider>
  );
};

const useFBAppState = () => useContext(FBAppStateContext);

export { FBAppStateProvider, useFBAppState };
