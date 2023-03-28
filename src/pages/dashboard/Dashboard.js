import React from "react";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Grid from '@mui/material/Grid'; // Grid version 
import { Typography } from "@mui/material";
import { IoIosWarning } from 'react-icons/io';

const Dashboard = () => {
    let data = localStorage.getItem("user")
    console.log("- - - - - - - in blanks page",data)
    const percentage = 66;
   
    return <div>
      
  
  <Grid container spacing={12} style={{marginBottom: 20}}>
  <Grid item xs={8} md={8}>
    <Typography variant="h5">
    Good Morning Akash!
    </Typography>
  </Grid>

  
  <Grid item xs={4} md={4}>
  <Typography variant="subtitle2" style={{marginLeft: 60, color: '#464646'}}>
  Log in <br/>
<span style={{marginLeft: 0}}>21/May/2021 10.24am</span>
    </Typography>
  </Grid>

</Grid>




{/* <!----------------------------------------------------------------------------------->*/}
<div style={{backgroundColor: 'white', width: '90.5%', padding: 0, display: 'flex', flexDirection: 'row',}} >

<IoIosWarning color={'red'} size={30} style={{marginTop: 8, marginLeft: 10}}/> 
<p > 

<span style={{fontSize:16, color: '#464646', fontFamily: 'Lato'}}>You have still pending yesterday’s task </span>
<span style={{fontSize:16, color: '#EC5959', fontFamily: 'Lato'}}>(Ticket 24, Ticket 12) </span>
<span style={{fontSize:16, color: '#C9C9C9', fontFamily: 'Lato'}}>If you finished update worksheet</span>

</p>
</div> 



<div style={{borderBottom: '2px solid #0000001A', marginTop: 20, marginBottom: 20,width: '90.5%'}}>
  
  </div>


  <Grid container  style={{marginBottom: 20,}}>
  <Grid item xs={3} md={3} style={{background: 'white', width: '100%'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>

  <p>ss</p>
  <p>ddd</p>

    </div>


  </Grid>

  
  <Grid item xs={3} md={3}>
s
  </Grid>

    
  <Grid item xs={6} md={6}>
s
  </Grid>

</Grid>


    {/* <div style={{display: 'flex', flexDirection: 'row'}}>
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

    </div> */}


    </div>;
};

export default Dashboard;
