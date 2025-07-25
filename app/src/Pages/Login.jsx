import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '400px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: '600',
        textAlign: 'center',
        margin: '10px 0',
    };

    const subheadingStyle = {
        fontSize: '14px',
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        marginBottom: '15px',
        fontSize: '14px',
    };

    const buttonStyle = {
        width: '100%',
        backgroundColor: '#7c3aed',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '15px',
    };

    const footerTextStyle = {
        fontSize: '14px',
        textAlign: 'center',
        color: '#6b7280',
    };

    const linkStyle = {
        color: '#7c3aed',
        textDecoration: 'none',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            navigate('/home')
        } else {
            alert('Invalid email or password');
        }
    };


    return (
        <div style={containerStyle}>
            <div style={cardStyle}>

                <h2 style={headingStyle}>Welcome back</h2>
                <p style={subheadingStyle}>Please enter your details to sign in</p>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" style={inputStyle} value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder="••••••••" style={inputStyle} value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} style={buttonStyle}>Sign in</button>
                <p style={footerTextStyle}>
                    Don't have an account? <Link to='./Signup'>Create Account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
