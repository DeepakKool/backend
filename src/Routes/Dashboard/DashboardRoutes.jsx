import React from "react";
import { Routes, Route } from "react-router-dom";
import Blank from "../../pages/Blank";
import ProtectedRoutes from "../ProtectedRoutes";

import { DASHBOARD } from "../Constants";

function DashboardRoutes() {
    return (
        <Routes>
            
            <Route element={<ProtectedRoutes />}>
                {/* <Route exact path={"/" } element={<Blank />} /> */}
                <Route path={'/Blank'} element={<Blank />} />
            </Route>
        </Routes>
    );
}

export default DashboardRoutes;
