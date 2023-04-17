import { Typography } from "@mui/material";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">Welcome Anil</Typography>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
      </header>
    </div>
  );
}

export default App;
