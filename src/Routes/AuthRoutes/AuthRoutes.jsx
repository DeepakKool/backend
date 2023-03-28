
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../../components/layout/login/login'
// import Signup from '../../component/pages/AccessPage/SignUp/Signup'
  

function AuthRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path='/login' element={< Login />}/>
        {/* <Route exact path={`${REGISTER}`} element={< Signup />} /> */}
      </Routes>
    </div>
  )
}

export default AuthRoutes