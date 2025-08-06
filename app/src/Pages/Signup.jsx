import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/Signup.css';

const Signup = () => {
     useEffect(() => {
    document.title = 'Signup';
  }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({ email, password }));
        navigate('/');
    };

    return (

        <div className='containerStyle'>
            <div className='cardStyle'>

                <h2 className='headingStyle'>Sign Up</h2>
                <p className='subheadingStyle'>Please enter your details to sign up</p>
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" className='inputStyle' required />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" className='inputStyle' required value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder="••••••••" className='inputStyle' required value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' onClick={handleSignup} className='buttonStyle'>Sign Up</button>

            </div>
        </div>

    )
}

export default Signup
