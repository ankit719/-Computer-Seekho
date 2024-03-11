// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'

const LoginPage = () => {
    const [formData, setFormData] = useState({ });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(values => ({ ...values, [name]: value }))
    };


    const handleRoleNavigation = (role, name) => {
        sessionStorage.setItem("user",name);
        console.log(name);
        console.log(role.staff_id);
        sessionStorage.setItem("userID",role.staff_id);
        sessionStorage.setItem("Role",role.role);
        if (role.role === 'admin'|| role.role === 'Admin' ) {
            navigate(`/AdminDashBoard`);
        } else if (role.role === 'staff' || role.role === 'Staff') {
            navigate(`/StaffDashBoard`);
        } else {
            alert('Invalid username or password');
        }
    };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let demo = JSON.stringify(formData);
        console.log(JSON.parse(demo));
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: demo
            });
            
            if (response.ok) {
                let role = await response.json();
                let name = role.name.toString();
                console.log(role);
            
                alert(role);
                console.log(demo);
                handleRoleNavigation(role,name); // Call the function to navigate based on role
            } else {
                throw new Error('Failed to authenticate');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to authenticate. Please try again.');
        }
    };
    
            

    return (
        <div className="login-container">
            <br></br>
        <br></br>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input type="text" name="username"  onChange={handleChange} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
