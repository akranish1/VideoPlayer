import React from 'react';
import Crossicon from './Icons/crossicon';
import Homeicon from './Icons/Homeicon';
import Likeicon from './Icons/Likeicon';
import WatchLater from './Icons/WatchLater';
import Historyicon from './Icons/Historyicon';

export default function Sidebar(props) {
  const isOpen = props.isOpen;

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: isOpen ? '0' : '-200px',
    width: '200px',
    height: '100vh',
    backgroundColor: 'white',
    color: '#87cefa',
    padding: '20px',
    transition: 'left 0.3s ease',
    zIndex: 1000,
  };
  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
    textAlign: 'right',
    width: '100%',
  };
  const menuItemStyle = {
    padding: '7px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: 'white',
    width:'100%',
    transition: 'background-color 0.3s ease',
    marginBottom:'20px',
    border:'none',
   
  };
  const hoverStyle = {
    backgroundColor: '#87cefa',
  };

  return (
    <div style={sidebarStyle}>
      <button onClick={props.onClose} style={closeButtonStyle}><Crossicon/></button>
      <ul style={{ listStyle: 'none', padding: 0,}}>
        <li><button style={menuItemStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}><Homeicon/></button></li>
        <li><button style={menuItemStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}><Likeicon/></button></li>
        <li><button style={menuItemStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}><WatchLater/></button></li>
        <li><button style={menuItemStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}><Historyicon/></button></li>
      </ul>
      <hr style={{marginTop:'10px'}}></hr>
    </div>
  );
}

