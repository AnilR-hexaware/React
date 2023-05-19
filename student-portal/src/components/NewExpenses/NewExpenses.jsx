import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import { Button } from "@mui/material";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <>
      {!isEditing ? (
        <Button onClick={startEditingHandler}>Add Expense</Button>
      ) : (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </>
  );
};

export default NewExpenses;
