import { useState } from 'react';
// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/layout/login/login';
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/profile/Profile';
import './bootstrap.min.css'
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
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
}

export default App;


