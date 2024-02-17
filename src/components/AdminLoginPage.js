import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

import * as Components from '../style/admin';

function AdminLogInPage() {
    const [loginin] = React.useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");

    const adminlogin = () => {
        Axios.post("http://localhost:3001/adminlogin", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
          }
        });
      };
    
      useEffect(() => {
        Axios.get("http://localhost:3001/login")
        .then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
          }
        })
        .catch(error => {
            if (error.response.status === 404) {
              // Handle 404 error
              console.error('Resource not found:', error.response.config.url);
            } else {
              // Handle other errors
              console.error('An error occurred:', error);
            }
          });
        
      }, []);
    
  
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