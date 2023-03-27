import  Sidebark  from "../user/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../user/sidebar/sidebar2";

const AppLayout = () => {
    return <div style={{
        padding: '150px 0px 0px 50px'
    }}>
        <Sidebar2 />
        <Outlet  />
        <Sidebark />
    </div>;
};

export default AppLayout;
