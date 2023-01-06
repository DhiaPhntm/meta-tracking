import { useFBAppState } from "../../contexts/FBAppState";

const FBLoginStatus = () => {
  const { FBStatus } = useFBAppState();

  return (
    <div>
      <h1>Welcome User [{FBStatus?.authResponse?.userID}]</h1>
      <p style={{ maxWidth: "50vw", overflowWrap: "break-word" }}>
        {JSON.stringify(FBStatus)}
      </p>
    </div>
  );
};

export default FBLoginStatus;
