import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../pages/Singn';
import Register from '../pages/Register';
import Home from '../pages/Home/index';

const RouterPage: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

export default RouterPage;