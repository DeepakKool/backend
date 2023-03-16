
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../../pages/login/login'
// import Signup from '../../component/pages/AccessPage/SignUp/Signup'

import {
    REGISTER,
    LOGIN,
  } from "../Constants";
  

function AuthRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path={LOGIN} element={< Login />}/>
        {/* <Route exact path={`${REGISTER}`} element={< Signup />} /> */}
      </Routes>
    </div>
  )
}

export default AuthRoutes