import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
// import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'; 

const sidebarNavItems = [

  
    // {
    //     display: 'Dashboard',
    //     icon: <i className='bx bx-home'></i>,
    //     to: '/',
    //     section: ''
    // },
    {
        display: 'Dashboard',
        icon: <i class='bx bx-layout bx-rotate-270' ></i>,
        to: '/dashboard',
        section: 'Dashboard'
    },
    {
        display: 'Project',
        icon:<i class='bx bx-folder-plus ' ></i>,
        to: '/project',
        section: 'Project'
    },
    {
        display: 'Teams',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Profile',
        icon:<i class='bx bx-spreadsheet' ></i>,
        to: '/order',
        section: 'order'
    },
  
]

const Sidebar2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    // const { collapseSidebar } = useProSidebar();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
       
    }, []);

  

 

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return   <div className='sidebar' >
           
        <div className="sidebar__logo">
            EOV
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            {/* <div className="sidebar__menu__item__text">
                                {item.display}
                            </div> */}
                            <p style={{writingMode: 'vertical-lr', textOrientation: 'mixed'}}>
                                {item.display}
                            </p>
                        </div>
                        
                    </Link>
                ))
            }
        </div>
        
    </div>
  
    ;
};

export default Sidebar2;
