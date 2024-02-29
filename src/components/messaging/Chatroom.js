import { useState, useEffect } from "react";
import ChatsPage from "./Chatpage";
import AuthPage from "./Authpage";

function Chatroom() {
  const [user, setUser] = useState(null);

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

  return user ? <ChatsPage user={user} /> : <AuthPage onAuth={handleAuth} />;
}

export default Chatroom;