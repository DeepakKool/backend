import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import Sidebark from "../components/sidebar/Sidebar";
import Sidebar2 from "../components/sidebar/sidebar2";
import { LOGIN } from "./Constants";



function ProtectedRoutes({ component: Component, ...rest }) {
    let checkAuth = localStorage.getItem("token") ? true : false;
    console.log("------------------",localStorage.getItem("token"));

    return true ? <>
      <Sidebar2 />
        <Outlet />
        <Sidebark /></> : <Navigate to={LOGIN} />;
}

export default ProtectedRoutes;
