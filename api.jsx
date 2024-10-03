// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';  // Your Flask backend URL

export const createUser = (userData) => {
    return axios.post(`${API_URL}/users`, userData);
};

export const createExpense = (expenseData) => {
    return axios.post(`${API_URL}/expenses`, expenseData);
};

export const getExpenses = (userId) => {
    return axios.get(`${API_URL}/expenses/${userId}`);
};

export const getBudgets = (userId) => {
    return axios.get(`${API_URL}/budgets/${userId}`);
};

export const createBudget = (budgetData) => {
    return axios.post(`${API_URL}/budgets`, budgetData);
};
