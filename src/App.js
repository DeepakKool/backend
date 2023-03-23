


import React from 'react';
// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";
import { LOGIN, REGISTER } from "./Routes/Constants";
import Routess from "./Routes/Routess";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import {UserContext} from './context';



const App = () => {
    const [user, setUser] = React.useState(null);
    

  return (
    <UserContext.Provider
    value={{
   
      setUser,
   
    }}>
        <Router>             
            <AuthRoutes /> 
            <ProSidebarProvider>
       
                <Routess />
     
            </ProSidebarProvider>
        </Router>
    </UserContext.Provider>
);
}

export default App;


