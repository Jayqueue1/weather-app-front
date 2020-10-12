import React, { useState } from 'react';
//import moment from "moment";
import Login from'./Login';
import props from 'prop-types';


function ShowHome(){
return(
 
<>
<div class="image"> 


<h1>Welcome To Weather Pro</h1>
<nav>
<ul>
<li><a href="Home">Home</a></li>
<li><a href="Login">Login</a></li>
 

</ul>
</nav> 
</div>  
  
     </>
);

}
export default ShowHome;