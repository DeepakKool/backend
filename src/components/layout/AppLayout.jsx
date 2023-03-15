import { Outlet } from "react-router-dom";
import Sidebar2 from "../sidebar/sidebar2";

const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 150px'
    }}>
        <Sidebar2 />
        <Outlet />
    </div>;
};

export default AppLayout;
