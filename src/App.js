import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Login from './pages/login/login';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
    return (
        <ProSidebarProvider>
        <BrowserRouter>
            <Routes>
                  <Route index element={<Login />} />
                {/* <Route path='/login' element={<Login />} /> */}
               
                <Route path='/' element={<AppLayout />}>
                    
                  
                   
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/user' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
               
            </Routes>
        </BrowserRouter>
        </ProSidebarProvider>
    );
}

export default App;
