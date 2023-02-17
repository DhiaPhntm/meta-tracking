import { BaseButton } from "@/components/FBLoginPrompt/styles";

const FBShare = () => {
  const share = () => {
    if (window.FB) {
      window.FB.ui(
        {
          method: "share",
          href: "https://meta-tracking-vercel.app/flavours/12345",
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
    <>
      <BaseButton
        className="fb-share-button"
        data-href="https://meta-tracking-vercel.app/flavours/12345"
        data-layout="button_count"
        data-size="large"
        onClick={share}
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
          rel="noreferrer"
        >
          Share
        </a>
      </BaseButton>
      <p>Share this url</p>
    </>
  );
};

export default FBShare;
