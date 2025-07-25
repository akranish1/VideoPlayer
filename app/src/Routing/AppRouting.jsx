import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import LandingPage from '../Pages/LandingPage';
import Home from '../Pages/Home';

const AppRouting = () => {
    return (

        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default AppRouting
