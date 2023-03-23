import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import Sidebark from "../components/sidebar/Sidebar";
import Sidebar2 from "../components/sidebar/sidebar2";
import { LOGIN } from "./Constants";



function ProtectedRoutes({ component: Component, ...rest }) {
    let checkAuth = localStorage.getItem("token") ? true : false;
    console.log("------------------",localStorage.getItem("token"));

    return true ? <div style={{
      padding: '0px 100px 0px 150px',
  }}>
      <Sidebar2 />
        <Outlet />
        <Sidebark /></div> : <Navigate to={LOGIN} />;
}

export default ProtectedRoutes;
