import React, { useEffect, useState } from 'react'
import Hamburgericon from './Icons/Hamburgericon';
import Logoicon from './Icons/Logoicon';
import Searchicon from './Icons/Searchicon';
import Usericon from './Icons/Usericon';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const { isSidebarOpen, toggleSidebar } = useSidebar();


  const navbarStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    backgroundColor: '#ffffffff',
    color: 'white',
    marginLeft: isSidebarOpen ? '10px' : '0',
    transition: 'margin-left 0.3s ease',

  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',

    gap: '20px',
    marginLeft: isSidebarOpen ? '200px' : '0',
    transition: 'margin-left 0.3s ease',
  };
  const centerStyle = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: '0 8px',
  };
  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  return (

    <div style={navbarStyle}>
      <div style={leftStyle}>
        {!isSidebarOpen && (<button
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        ><Hamburgericon /></button>)}

        <Logoicon />
      </div>
      <div style={centerStyle}>
        <Searchicon />
      </div>
      <div style={rightStyle}>
        {isMobile && <Searchicon />}
        {!isMobile && <Usericon />}
      </div>
    </div>
  );
}
