import React, { useState } from 'react';
import Login from './components/Auth/Login'
import "./index.css";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      console.log("This is admin");
    }else if(email == "user@me.com" && password == "123"){
      setUser("user")
      console.log("This is user");
    }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login onLogin={handleLogin} /> : ''}
      {/* <AdminDashboard /> */}
      {/* <EmployeeDashboard /> */}
    </>
  )

}

export default App
