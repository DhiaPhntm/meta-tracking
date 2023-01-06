import React, { createContext, useContext, useEffect, useState } from "react";

type ContextProps = {
  isHydrated: boolean;
  FBStatus: any;
};

interface AppStateProps {
  children?: React.ReactNode;
}

const FBAppStateContext = createContext<ContextProps>({} as ContextProps);

const FBAppStateProvider = ({ children }: AppStateProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [FBStatus, setFBStatus] = useState();
  const [FBUserID, setFBUserID] = useState();

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
    }
  };

  return (
    <FBAppStateContext.Provider
      value={{
        isHydrated,
        FBStatus,
      }}
    >
      {children}
    </FBAppStateContext.Provider>
  );
};

const useFBAppState = () => useContext(FBAppStateContext);

export { FBAppStateProvider, useFBAppState };
