import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard";
import Project from "../../pages/project/project";
import ProtectedRoutes from "../ProtectedRoutes";

function DashboardRoutes() {
    return (
        <Routes>
            
            <Route element={<ProtectedRoutes />}>
                {/* <Route exact path={"/" } element={<Blank />} /> */}
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/Project' element={<Project />} />
            </Route>
        </Routes>
    );
}

export default DashboardRoutes;
