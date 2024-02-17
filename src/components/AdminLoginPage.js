import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

import * as Components from '../style/admin';

function AdminLogInPage() {
    const [loginin] = React.useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");

      useEffect(() => {
        Axios.get("http://localhost:3001/adminlogin")
        .then((response) => {
          if (response.data && response.data.loggedIn === true && response.data.user && response.data.user.length > 0) {
            setLoginStatus(response.data.user[0].username);
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            console.error('Resource not found:', error.response.config.url);
          } else {
            console.error('An error occurred:', error);
          }
        });
      }, []);
      
      const adminlogin = () => {
        Axios.post("http://localhost:3001/adminlogin", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data && response.data.message) {
            setLoginStatus(response.data.message);
          } else if (response.data && response.data.length > 0) {
            setLoginStatus(response.data[0].username);
          }
        });
      };
    
  
     return(
         <Components.Container>
             <Components.LogInContainer loginin={loginin.toString()}>
                  <Components.Form>
                      <Components.Title>Log in</Components.Title>
                      <Components.Input type='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value);}} />
                      <Components.Input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value);}} />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={adminlogin}>Log In</Components.Button>
                      <h1>{loginStatus}</h1>
                  </Components.Form>
             </Components.LogInContainer>
         </Components.Container>
     )
}

export default AdminLogInPage;