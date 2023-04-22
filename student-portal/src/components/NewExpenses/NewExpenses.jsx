import React from "react";
import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  return (
    <>
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
    </>
  );
};

export default NewExpenses;
