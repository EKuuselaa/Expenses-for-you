import React, { useState } from 'react';
//importataan useState hookki

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
//importataan NewExpense ja Expenses komponentit
const dummy_expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2022 , 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 8, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2020, 1, 1) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 1, 9) },
];
//määritellään dummy_expenses taulukko, joka sisältää 4 objektia
function App() {
//App komponentti
  const [expenses, setExpenses] = useState(dummy_expenses);
//määritellään expenses muuttuja, joka saa arvokseen dummy_expenses taulukon ja setExpenses funktion
  const addExpenseHandler = expense =>  {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses]
    });
  };
//määritellään addExpenseHandler funktio, joka saa parametrinaan expense olion

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      <p>Esko Kuusela / VAMK / BIT</p>
    </div>
  );
}
//palautetaan div elementti, joka sisältää NewExpense ja Expenses komponentit sekä p elementin, joka sisältää nimen
export default App;
