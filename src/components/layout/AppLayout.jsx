import  Sidebark  from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Sidebar2 from "../sidebar/sidebar2";

const AppLayout = () => {
    return <div style={{
        padding: '150px 0px 0px 50px'
    }}>
        <Sidebar2 />
        <Outlet  style={{position: relative}}/>
        <Sidebark />
    </div>;
};

export default AppLayout;
