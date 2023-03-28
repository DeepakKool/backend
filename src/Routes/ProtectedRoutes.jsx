import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Sidebark from "../components/user/sidebar/Sidebar";
import Sidebar2 from "../components/user/sidebar/sidebar2";



function ProtectedRoutes({ component: Component, ...rest }) {
  let checkAuth = localStorage.getItem("token") ? true : false;
  console.log("------------------",localStorage.getItem("token"));

  return true ? <div style={{padding: '40px 150px 0px 150px'}}>
    <Sidebar2 />
    <SearchBar />
    <Outlet />
    <Sidebark />
  </div> : <Navigate to='/login' />
}

export default ProtectedRoutes;
