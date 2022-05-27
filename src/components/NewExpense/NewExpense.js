import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //add ID
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className='new-expense'>
    {/* pointing the function NOT executing */}
        <ExpenseForm onSaveExpenseData = {onSaveExpenseData}/>
    </div>
};

export default NewExpense;

