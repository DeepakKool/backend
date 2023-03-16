


import React from 'react';
// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";
import { LOGIN, REGISTER } from "./Routes/Constants";
import Routess from "./Routes/Routess";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

const App = () => {
  return (
    <div>
        <Router>             
            <AuthRoutes /> 
            <ProSidebarProvider>
       
                <Routess />
     
            </ProSidebarProvider>
        </Router>
    </div>
);
}

export default App;


