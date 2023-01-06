import { stringify } from "querystring";
import { useEffect, useState } from "react";



const FBLoginStatus = () => {

    const [userid, setUserid] = useState();

    const statusChangeCallback = (result: any) => {
        console.log(result);
        if(result.authResponse && result.authResponse.userid ) {
        setUserid(result.authResponse.userID)
        }
      }
      
      useEffect(() => {
          setTimeout(() => {
        if(window.FB && !userid) {
        window.FB.getLoginStatus(function(response: any) {
          statusChangeCallback(response);
      });
        }
    }, 100);
      }, [userid]);

return (
  
    <h1>
     Welcome User {userid}
    </h1>
   
  )
}

export default FBLoginStatus;