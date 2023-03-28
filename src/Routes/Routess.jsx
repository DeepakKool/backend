import React, { useLayoutEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import { DASHBOARD } from './Constants'
import DashboardRoutes from "./Dashboard/DashboardRoutes"

function Routess() {
    // useLayoutEffect(() => {
    //     document.body.style.backgroundColor = "#F1F0FA"
    //   });
    
  return (
    
        <DashboardRoutes/>
  )
}

export default Routess