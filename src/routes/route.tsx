import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../pages/Singn';
import Register from '../pages/Register';

const RouterPage: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Sign />} />
            <Route path="/Register" element={<Register />} />
        </Routes>
    );
}

export default RouterPage;