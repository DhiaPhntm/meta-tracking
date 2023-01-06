const FBLogout = () => {
  const logout = () => {
    if (window.FB) {
      window.FB.logout(function (response: any) {
        console.log(response);
      });
    }
  };

  return (
    <p>
      <br />
      <button onClick={logout}>Logout of facebook</button>
    </p>
  );
};

export default FBLogout;
