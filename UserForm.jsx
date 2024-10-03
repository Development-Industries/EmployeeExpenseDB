// src/components/UserForm.js
import React, { useState } from 'react';
import { createUser } from '../services/api';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        try {
            await createUser(userData);
            alert('User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create User</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
