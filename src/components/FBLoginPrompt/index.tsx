
const FBLoginPrompt = () => {

    const login = () => {
        if(window.FB) {
        window.FB.ui({
            method: 'share',
            href: window.location.href
          }, function(response:any){
            if (response && !response.error_message) {
                alert('Posting completed.');
              } else {
                alert('Error while posting.');
              }
          });
        }
    }

return (

  <p>
    <br/>
  <button onClick={login}>Login to facebook</button>
  </p>
)
}

export default FBLoginPrompt;