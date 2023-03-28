import { useEffect, useRef, useState } from 'react';

// import './sidebar.scss';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Typography } from '@mui/material';

const SearchBar = () => {
    
    
    return <div
    id="app"
    // style={

    //   ( { marginTop: 20,})
    // }
  >
{/* 
<div style={{width: '89%', backgroundColor: 'white', height: 60,  marginBottom: 20}}>

</div>

<div style={{position: 'absolute', background: 'black', top: 40, right: 60}}>
<p>

    Meeting With Vinod
</p>
</div> */}

<Grid container spacing={2} style={{ marginLeft: 0, marginBottom: 40}}>
  <Grid item xs={2} style={{background: 'white', height: 60 }} >
    <p></p>
  </Grid>
  <Grid item xs={8} style={{background: 'white'}} >
    <p></p>
  </Grid>
  <Grid item xs={2}>

    <div style={{position: 'absolute', right: 60, top: 30}}>

    <div style={{display: 'flex', flexDirection: 'row'}}>
    <i class='bx bxs-calendar' style={{fontSize: 52, color: '#595A5A80'} }></i>

{/* <Typography variant="caption" style={{marginLeft: 10}} >
Today 5:15 pm <br/>
Meeting with Vinod <br/>
Client Meeting
</Typography> */}
<p style={{fontSize: '0.80rem', marginLeft: 10}}>Today 5:15 pm <br/>
Meeting with Vinod <br/>
<span style={{fontSize: '0.75rem', color: '#21212130'}}>Client Meeting</span>
</p>



</div>
        </div>

   
  </Grid>

</Grid>

  </div>;
};

export default SearchBar;
