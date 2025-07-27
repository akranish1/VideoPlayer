import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

import Home from '../Pages/Home';
import TitleManager from '../Components/Title/TitleManager';
import Sidebar from '../Components/Sidebar';
import Searchres from '../Pages/Searchres';

const AppRouting = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/search" element={<Searchres />} />
        </Routes>
    )
}

export default AppRouting
