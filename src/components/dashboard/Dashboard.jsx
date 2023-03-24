import React from "react";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
    let data = localStorage.getItem("user")
    console.log("- - - - - - - in blanks page",data)
    const percentage = 66;
   
    return <div>
       <p> Good Morning Akash!</p>

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

        <div style={{display: 'flex',flex: 4, flexDirection: 'row'}}>
            <div style={{width: '20%', margin:4}}>
        <CircularProgressbar value={percentage}
        
        text={`${percentage}%`}  
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(27, 223, 131, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        </div>

        <div style={{width: '20%', margin:4}}>
        <CircularProgressbar value={percentage}
        
        text={`${percentage}%`}  
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(255, 234, 43, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        </div>

        <div style={{width: '20%', margin:4}}>
        <CircularProgressbar value={percentage}
        
        text={`${percentage}%`}  
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(236, 89, 89, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
        </div>
        </div>

    </div>


    </div>;
};

export default Dashboard;
