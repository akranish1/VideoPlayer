import React,{ useEffect, useState }from 'react'
import Hamburgericon from './Icons/Hamburgericon';
import Logoicon from './Icons/Logoicon';
import Searchicon from './Icons/Searchicon';
import Usericon from './Icons/Usericon';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navbarStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 16px',
    backgroundColor: '#ffffffff',
    color: 'white',
  };

  const leftStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px' };
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
    gap: '16px' };

  return (
    <div style={navbarStyle}>
      <div style={leftStyle}>
        <Hamburgericon />
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
