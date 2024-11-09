import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import "./index.css";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

const App = () => {

  const [user, setUser] = useState("");

  const handleLogin = (email, password) => {
    if(email == "admin@me.com" && password == "123"){
      console.log("This is admin");
      setUser("admin")
    }else if(email == "user@me.com" && password == "123"){
      console.log("This is user");
      setUser("user")
      setLocalStorage("userRole", "user");
    }
    else{
      alert("Invalid Credentials")
    }
  
  // handleLogin("admin@me.com", 123);
  

  return (
    <>
      {!user ? <Login onLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard />  */}
      {/* <AdminDashboard /> */}
    </>
  )
}
}

export default App