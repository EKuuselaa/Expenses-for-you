import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
//importataan ExpenseDate, Card ja ExpenseItem.css

const ExpenseItem = (props) => {
//ExpenseItem komponentti
//määritellään ExpenseItem komponentti, joka saa props parametrin
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
//palautetaan Card komponentti, joka sisältää ExpenseDate komponentin ja div elementin, joka sisältää h2 elementin ja div elementin
}

export default ExpenseItem;
