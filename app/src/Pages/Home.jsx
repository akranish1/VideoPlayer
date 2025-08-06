// src/Pages/Home.jsx

import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Feed from './Feed';
import Sidebar from '../Components/Sidebar';
import { SidebarProvider } from '../context/SidebarContext';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <SidebarProvider>
      <Navbar />
      <Sidebar />
      <div style={{ paddingTop: '60px' }}></div>
        <Feed />
    </SidebarProvider>
  );
};

export default Home;