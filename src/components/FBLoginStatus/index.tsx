import { useFBAppState } from "../../contexts/FBAppState";

const FBLoginStatus = () => {
  const { FBStatus, FBProfile, FBPermissions } = useFBAppState();

  return (
    <div>
      <h1>Welcome User [{FBStatus?.authResponse?.userID}]</h1>
      <p style={{ maxWidth: "50vw", overflowWrap: "break-word" }}>
        {JSON.stringify(FBStatus)}
      </p>
      <p style={{ maxWidth: "50vw", overflowWrap: "break-word" }}>
        {JSON.stringify(FBProfile)}
      </p>
      <p style={{ maxWidth: "50vw", overflowWrap: "break-word" }}>
        {JSON.stringify(FBPermissions)}
      </p>
    </div>
  );
};

export default FBLoginStatus;
