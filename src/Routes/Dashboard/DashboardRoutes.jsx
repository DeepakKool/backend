import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Project from "../../pages/project/project";
import ProtectedRoutes from "../ProtectedRoutes";
import Profile from '../../pages/profile/Profile'

function DashboardRoutes() {
    return (
        <Routes>
            
            <Route element={<ProtectedRoutes />}>
                {/* <Route exact path={"/" } element={<Blank />} /> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/Project' element={<Project />} />
                <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default DashboardRoutes;
