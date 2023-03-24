import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../pages/Singn';
import Register from '../pages/Register';
import Home from '../pages/Home/index';
import RegisterClient from '../pages/registerClient';

const RouterPage: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/RegisterClient" element={<RegisterClient />} />
        </Routes>
    );
}

export default RouterPage;