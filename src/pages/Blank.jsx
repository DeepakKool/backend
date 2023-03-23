import React, { useState, useEffect } from "react";
import {UserContext} from '../context';


const Blank = () => {
    const {user, setUser} = React.useContext(UserContext);
    console.log("- - - - - - - in blanks page",user)

    let data = localStorage.getItem("token")

    return <div>
        
       <p style={{fontSize: 30, }}> Good Morning {'user'}</p>

        {/* <p>kkdkdkdk{user}</p>

        <p>ksksksk{data?.user} </p> */}


    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 4, width: 20, height: 130, backgroundColor: '#E5E5E5'}}>
            
        <div style={{ width: 230, height: 130, backgroundColor: '#E5E5E5'}}>
            \dd
        </div>


        </div>

        <div style={{flex: 4}}>
            \dd
        </div>

        <div style={{flex: 4}}>
            \dd
        </div>

    </div>


    </div>;
};

export default Blank;
