
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
    UserName <input type="text" name="UserName"/> 
    Password       <input type="text" name="Password" />
    Temperature <input type="text" name="Temperature" value ="26C"/>
    
   
    <button>Search</button>

    
</div>
    );
}


export default FxnLogin;