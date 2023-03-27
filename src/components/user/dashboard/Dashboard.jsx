import React from "react";
import { ReactComponent as Polygon1 } from './assets/polygon.svg'
import { Typography, createTheme, ThemeProvider } from "@mui/material";
import './Dashboard.css'

const theme = createTheme({
  typography: {
    fontFamily: 'lato'
  }
})


const Dashboard = () => {
    let data = localStorage.getItem("user")
    console.log("- - - - - - - in blanks page",data)
    const percentage = 66;
   
    return <ThemeProvider theme={theme}>
      <div className="container-lg main bg-secondary">
        <div className="row">
          <Typography variant="h4"> Good Morning Akash!</Typography>
          <Typography variant="p">Log in 21/May/2021 10.24am</Typography>
        </div>
        <div className="row bg-white">
          <div className="col-xs-8">
            <Polygon1 /><Typography variant='p' className="m-1">You have still pending yesterday’s task <span className="text-danger">(Ticket 24, Ticket 12)</span> <span className="text-muted">If you finished update worksheet</span></Typography>
          </div>
        </div>
      </div>  
    </ThemeProvider>
};

export default Dashboard;
