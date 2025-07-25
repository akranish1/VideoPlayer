import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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


    const navigate = useNavigate();

    // (optional) form state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({ email, password }));
        navigate('/');
    };

    return (

        <div style={containerStyle}>
            <div style={cardStyle}>

                <h2 style={headingStyle}>Sign Up</h2>
                <p style={subheadingStyle}>Please enter your details to sign up</p>
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" style={inputStyle} required />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" style={inputStyle} required value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder="••••••••" style={inputStyle} required value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' onClick={handleSignup} style={buttonStyle}>Sign Up</button>

            </div>
        </div>

    )
}

export default Signup
