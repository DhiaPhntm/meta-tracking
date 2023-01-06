import { stringify } from "querystring";
import { useEffect, useState } from "react";



const FBLoginStatus = () => {

    const [userid, setUserid] = useState();
    const [response, setResponse] = useState("");


    const statusChangeCallback = (result: any) => {
        console.log(result);
        setResponse(JSON.stringify(result))
        if(result.authResponse && result.authResponse.userID ) {
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
  <div>
    <h1>
     Welcome User [{userid}]
    </h1>
    <p style={{maxWidth: "50vw", overflowWrap: "break-word"}}>
       {response} 
    </p>
    </div>
   
  )
}

export default FBLoginStatus;