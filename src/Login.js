
import React, {useState} from 'react';

function FxnLogin()
{
    const [Logging, setLogging]=useState(0,1);

    function LoggedIn(){
        
            if (Logging==0 ){
                
                setLogging(Logging+1)

                
            }
            
                else{
                   
                    console.log("User Alreqdy Logged In")
                   
                    }
                   
                
                   
                }
         
    
    function LoggedOut(){
        if (Logging==1){
            setLogging(Logging-1)
        } 
        else{
            console.log("User Has Already Logged Out")
        }

         
    }
    return(
<div>
    <button onClick={LoggedIn}>Login</button><br></br>
    <p></p>
    <button onClick={LoggedOut}>LogOut</button>
</div>
    );
}


export default FxnLogin;