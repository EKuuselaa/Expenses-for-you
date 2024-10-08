import React , { useState } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

 
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    console.log(props.item);

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );

}
export default Expenses;