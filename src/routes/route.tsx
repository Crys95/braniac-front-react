import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Sign from '../pages/Singn/login';

const RouterPage: React.FC = () => {
    return(
        <Routes>
              <Route path="/" element={<Sign />} />
        </Routes>
    );
}

export default RouterPage;