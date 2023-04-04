import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Profile.css'

const userProjects = [
    {
        id : 1,
        date : '04/May/2021',
        project : 'ERP Management',
        team : 'Team A',
        workingHours : '08:15h',
        break: '1:56h',
        status: 'Tasks Done'
    },
    {
        id : 2,
        date : '03/May/2021',
        project : 'ERP Management',
        team : 'Team A',
        workingHours : '08:36h',
        break: '1:47h',
        status: 'Tasks Done'
    },
    {
        id : 3,
        date : '02/May/2021',
        project : 'ERP Management',
        team : 'Team A',
        workingHours : '08:05h',
        break: '1:51h',
        status: 'Tasks Done'
    },
    {
        id : 4,
        date : '01/May/2021',
        project : 'BugDiscover',
        team : 'Team C',
        workingHours : '08:42h',
        break: '1:48h',
        status: 'Tasks Done'
    },
    {
        id : 5,
        date : '29/Apr/2021',
        project : 'BugDiscover',
        team : 'Team C',
        workingHours : '08:28h',
        break: '1:43h',
        status: 'In Process'
    },
    {
        id : 6,
        date : '28/Apr/2021',
        project : 'ERP Management',
        team : 'Team A',
        workingHours : '08:06h',
        break: '1:50h',
        status: 'Tasks Done'
    },
]

function Profile() {
    const columns = [
        { field: 'date', headerName: 'Date', flex: 2, },
        { field: 'project', headerName: 'Project', flex: 2,  },
        { field: 'team', headerName: 'Team', flex: 1, },
        { field: 'workingHours', headerName: 'Working Hours', flex: 2, },
        { field: 'break', headerName: 'Break', flex: 1,  },
        { field: 'status', headerName: 'Status', flex:2, },
    ]
    const [data, setData] = useState([])
    function getUserProjects() {
        setData(userProjects)
    }
    useEffect(()=> {
        getUserProjects()
    }, [])
    const rows = data.map((row)=> ({
        id : row.id,
        date : row.date,
        project : row.project,
        team : row.team,
        workingHours : row.workingHours,
        break : row.break,
        status : row.status
    }))
    return <div className='container'>
        <div className='row d-flex flex-row'>
            <div className='card d-inline-block p-3 flex-grow-1'><div className='d-inline-block'><h5>No of</h5> Projects Worked </div><h1 className='d-inline-block'> 15</h1></div>
            <div className='card d-inline-block p-3 flex-grow-1'><div className='d-inline-block'><h5>No of</h5> Teams Worked </div><h1 className='d-inline-block'> 07</h1></div>
            <div className='card d-inline-block p-3 flex-grow-1'><div className='d-inline-block'><h5>Performance</h5> Rating </div><h1 className='d-inline-block'> 84%</h1></div>
            <div className='card d-inline-block p-3 flex-grow-1'><div className='d-inline-block'><h5>Total</h5> Attendance Progress </div><h1 className='d-inline-block'> 07</h1></div>
        </div>
        <div className='row bg-secondary'>
            <DataGrid autoHeight rows={rows} columns={columns} />
        </div>
    </div>
}

export default Profile