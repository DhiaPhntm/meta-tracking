import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  isHydrated: boolean;
  FBStatus: any;
  FBProfile: any;
  FBPermissions: any;
  setFBProfile: any;
  setFBStatus: any;
  setFBPermissions: any;
  FBAccessToken: string | undefined;
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
  const [FBAccessToken, setFBAccessToken] = useState();

  const getProfile = (FBUserID: string) => {
    //get public profile
    window.FB.api(
      FBUserID,
      {
        fields:
          "email,name,age_range,birthday,gender,installed,location,friends{id,name,age_range,friends},languages",
      },
      function (response: any) {
        if (response && !response.error) {
          setFBProfile(response);
          console.log("getProfile: " + JSON.stringify(response));
        }
      }
    );
  };

  const getPermissionsList = (FBUserID: string) => {
    //get permissions list
    window.FB.api(`/${FBUserID}/permissions`, function (response: any) {
      console.log("getPermissions: " + JSON.stringify(response));
      if (response && !response.error) {
        setFBPermissions(response);
      } else {
        setFBPermissions(undefined);
      }
    });
  };

  useEffect(() => {
    setIsHydrated(true);
    if (window.FB) {
      let isFBLoading = false;

      const getLoginStatus = () => {
        if (!isFBLoading) {
          isFBLoading = true;
          window.FB.getLoginStatus((response: any) => {
            statusHandler(response);
            isFBLoading = false;
          });
        }
      };

      const statusHandler = (response: any) => {
        console.log("StatusChange: " + JSON.stringify(response));
        setFBStatus(response);
        if (response.status === "unknown") {
          setFBProfile(undefined);
          setFBUserID(undefined);
          setFBPermissions(undefined);
        } else if (response.status === "connected") {
          setFBAccessToken(response.authResponse.accessToken);
          getProfile(response.authResponse.userID);
          if (response.authResponse.grantedScopes) {
            setFBPermissions(response.authResponse.grantedScopes);
          } else {
            getPermissionsList(response.authResponse.userID);
          }
        }
      };
      getLoginStatus();
      window.FB.Event.subscribe("auth.statusChange", statusHandler);
      return () => {
        window.FB.Event.unsubscribe("auth.statusChange", statusHandler);
      };
    }
  }, []);

  return (
    <FBAppStateContext.Provider
      value={{
        isHydrated,
        FBStatus,
        FBProfile,
        FBPermissions,
        setFBProfile,
        setFBStatus,
        setFBPermissions,
        FBAccessToken,
      }}
    >
      {children}
    </FBAppStateContext.Provider>
  );
};

const useFBAppState = () => useContext(FBAppStateContext);

export { FBAppStateProvider, useFBAppState };
