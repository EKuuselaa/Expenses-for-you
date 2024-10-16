import React , { useState } from 'react';
//importataan useState hookki
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
//importataan ExpenseItem, Card, ExpensesFilter ja Expenses.css
 
const Expenses = (props) => {
//Expenses komponentti
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    console.log(props.item);
//määritellään filterChangeHandler funktio, joka saa parametrinaan valitun vuoden ja asettaa sen filteredYear muuttujaan
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
//määritellään filteredExpenses muuttuja, joka suodattaa props.items taulukosta vuoden mukaan
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
//palautetaan Card komponentti, joka sisältää ExpensesFilter komponentin ja map funktiolla käydään läpi filteredExpenses taulukko ja palautetaan ExpenseItem komponentti
}
export default Expenses;