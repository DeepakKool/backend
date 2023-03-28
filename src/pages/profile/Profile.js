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
        { field: 'date', headerName: 'Date', flex: 2 },
        { field: 'project', headerName: 'Project', flex: 2 },
        { field: 'team', headerName: 'Team', flex: 1 },
        { field: 'workingHours', headerName: 'Working Hours', flex: 2 },
        { field: 'break', headerName: 'Break', flex: 1 },
        { field: 'status', headerName: 'Status', flex:2 },
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
    return <div className='container bg-secondary'>
            <DataGrid rows={rows} columns={columns} />
    </div>
}

export default Profile