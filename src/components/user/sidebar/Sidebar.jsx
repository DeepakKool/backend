import { useEffect, useRef, useState } from 'react';

import './sidebar.scss';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";


const Sidebark = () => {
    
    const { collapseSidebar } = useProSidebar();
    return <div
    id="app"
    style={
//add flexDirection: "row-reverse" here
      ( { display: "flex", position: 'absolute', right: 3, top: 145})
    }
  >
    <Sidebar rtl={true}>
    <Menu 
     menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}

   
    
    
    >
         <MenuItem onClick={() => {
                collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
      <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
      <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
      <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
    </Menu>
  </Sidebar>
  </div>;
};

export default Sidebark;
