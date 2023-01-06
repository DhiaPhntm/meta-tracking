const FBShare = () => {
  const share = () => {
    if (window.FB) {
      window.FB.ui(
        {
          method: "share",
          href: window.location.href,
        },
        function (response: any) {
          if (response && !response.error_message) {
            alert("Posting completed.");
          } else {
            alert("Error while posting.");
          }
        }
      );
    }
  };

  return (
    <p>
      <button onClick={share}>Share this url</button>
    </p>
  );
};

export default FBShare;
