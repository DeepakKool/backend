// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import AuthRoutes from "./Routes/AuthRoutes/AuthRoutes";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from 'react';
import './bootstrap.min.css'



const App = () => {
    const [user, setUser] = useState(null);
    

  return (
    <Router>             
      <AuthRoutes /> 
        <ProSidebarProvider>
          <Routes />
        </ProSidebarProvider>
    </Router>
);
}

export default App;


