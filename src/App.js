import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogInPage from "./components/AdminLoginPage";


function App() {
    return(
      <Router>
        <Routes>
          <Route path="/adminlogin" element={<AdminLogInPage />} />
        </Routes>
      </Router>
    )
  
}

export default App;
