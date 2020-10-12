import React from 'react';
import ReactDOM, {BrowserRouter as Router,Route,Redirect,Switch} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShowHome from './Home';
import FxnLogin from './Login';




ReactDOM.render(
  <React.StrictMode>
    <App />
    
    <div>
    UserName <input type="text" name="UserName"/> 
    Password       <input type="text" name="Password" />

    
</div>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister();