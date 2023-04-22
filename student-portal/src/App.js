import { Typography } from "@mui/material";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 345.56,
      date: new Date(2022, 9, 20),
    },
    {
      title: "Life Insurance",
      amount: 785.56,
      date: new Date(2021, 9, 20),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("expense");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Welcome Anil</Typography>
        <NewExpenses onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
