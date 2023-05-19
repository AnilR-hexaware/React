import { Typography } from "@mui/material";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Pagination from "./components/Pagination/Pagination";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 345.56,
    date: new Date(2022, 9, 20),
  },
  {
    id: "e2",
    title: "Life Insurance",
    amount: 785.56,
    date: new Date(2021, 9, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Welcome Anil</Typography>
        <NewExpenses onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
        <Pagination />
      </header>
    </div>
  );
};

export default App;
