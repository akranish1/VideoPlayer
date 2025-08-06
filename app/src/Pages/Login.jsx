import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './css/Login.css';

const Login = () => {
     useEffect(() => {
    document.title = 'Login';
  }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate('/home')
            toast.success("Login successful!");
        } else {
            toast.warn("Please check your credentials.");
        }
    };

    return (
        <div className='logincontainerStyle'>
            <div className='logincardStyle'>

                <h2 className='loginheadingStyle'>Welcome back</h2>
                <p className='loginsubheadingStyle'>Please enter your details to sign in</p>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" className='logininputStyle'value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder="••••••••" className='logininputStyle' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} className='loginbuttonStyle'>Sign in</button>
                <p className='loginfooterTextStyle'>
                    Don't have an account? <Link to='./Signup'>Create Account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
