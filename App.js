import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    const [userId, setUserId] = useState(null);  // Holds the ID of the created user

    return (
        <div className="App">
            <header className="App-header">
                <h1>Expense Tracker</h1>
                <p>
                    Welcome to the Expense Tracker App. Please create a user, add expenses, and track your budget.
                </p>
            </header>

            <main>
                {/* User creation form */}
                <section className="section">
                    <h2>Create a User</h2>
                    <UserForm setUserId={setUserId} />
                </section>

                {/* Once the user is created, show the forms to add expenses */}
                {userId && (
                    <section className="section">
                        <h2>Add an Expense</h2>
                        <ExpenseForm userId={userId} />

                        <h2>Your Expenses</h2>
                        <ExpenseList userId={userId} />
                    </section>
                )}

                {/* Temporary input for setting user ID, if needed for testing */}
                <section className="section">
                    <h3>Set User ID (For Testing Purposes)</h3>
                    <input
                        type="number"
                        placeholder="Set User ID"
                        value={userId || ''}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </section>
            </main>
        </div>
    );
}

export default App;
