import React, { useState } from 'react';


import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummy_expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2022 , 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 8, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2020, 1, 1) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 1, 9) },
];

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense =>  {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses]
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <p>Esko Kuusela / VAMK / BIT</p>
    </div>
  );
}

export default App;
