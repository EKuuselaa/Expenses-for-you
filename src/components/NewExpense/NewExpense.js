import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
//importataan ExpenseForm komponentti ja NewExpense.css
const NewExpense = (props) => {
//määrirrellään NewExpense komponentti, joka saa props parametrin
    const SaveExpenseDataHandler = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpense(expenseData);
        };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
    //palautetaan div elementti, joka sisältää ExpenseForm komponentin
};

export default NewExpense;