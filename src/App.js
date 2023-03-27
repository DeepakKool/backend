// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Dashboard from './components/user/dashboard/Dashboard'
import './bootstrap.min.css'
import { useState } from 'react';
import AppLayout from './components/layout/AppLayout';



const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useState(false)
  function userLogin() {
    setIsLoggedIn(true)
  }
  return <div className='wrapper'>
    <Router>       
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/applayout" element={<AppLayout />} />
      </Routes>
    </Router>
  </div>
}

export default App;


