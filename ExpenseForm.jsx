// src/components/ExpenseForm.js
import React, { useState } from 'react';
import { createExpense } from '../services/api';

const ExpenseForm = ({ userId }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expenseData = { amount, category, description, user_id: userId };
        try {
            await createExpense(expenseData);
            alert('Expense added successfully');
        } catch (error) {
            console.error('Error adding expense:', error);
            alert('Error adding expense');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
