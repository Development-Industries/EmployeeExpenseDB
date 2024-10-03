// src/components/ExpenseList.js
import React, { useEffect, useState } from 'react';
import { getExpenses } from '../services/api';

const ExpenseList = ({ userId }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await getExpenses(userId);
                setExpenses(response.data.expenses);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };

        fetchExpenses();
    }, [userId]);

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.category}: ${expense.amount} - {expense.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
