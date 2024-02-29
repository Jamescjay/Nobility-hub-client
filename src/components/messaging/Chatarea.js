import { useState } from "react";
import MessagePage from "./MessagingSectionAdmin";
import AuthPage from "./AdminAuth";



function Chatarea() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <MessagePage user={user} />;
  }
}

export default Chatarea;
