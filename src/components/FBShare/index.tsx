
const FBShare = () => {

    const share = () => {
        if(window.FB) {
        window.FB.ui({
            method: 'share',
            href: window.location.href
          }, function(response:any){
            console.log(response)
          });
        }
    }

return (
  <button onClick={share}>Share this url</button>

)
}

export default FBShare;