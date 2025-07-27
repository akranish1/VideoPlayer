import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Iconimg=()=>{
return (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>)
}
const containerStyle = {
    display: 'flex',
    border: '1px solid #333',
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#f1efefff',
     width: '500px',
     maxWidth: '80vw',
    transition: 'width 0.3s ease',
  };

  const inputStyle = {
    padding: '8px 12px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    flex: 1,
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#f7f2f2ff',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0 24px 24px 0',
  };

const Searchicon = () => {

  
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  return (
   <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={containerStyle}>
        <input
          type="text"
          placeholder="Search"
          style={inputStyle}
           value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleSearch}>
          <Iconimg/>
        </button>
      </div>
    </div>
  )
}

export default Searchicon
