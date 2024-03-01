import { useState, useEffect } from "react";
import MessagePage from "./MessagingSectionAdmin";
import AuthPage from "./AdminAuth";



function Chatarea() {
  const [user, setUser] = useState();

  useEffect(() => {
    const authenticatedUser = localStorage.getItem("user");
    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  const handleAuth = (userData) => {
    setUser(userData);

    localStorage.setItem("user", JSON.stringify(userData));
  };

  return user ? <MessagePage user={user} /> : <AuthPage onAuth={handleAuth} />;
}

export default Chatarea;
