import { useState } from 'react';
// import Layout from "./components/layout/AppLayout";
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/layout/login/login';
import Dashboard from './pages/dashboard/Dashboard'
import Projects from './pages/projects/Projects';
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
        <Route excat path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </div>
}

export default App;


