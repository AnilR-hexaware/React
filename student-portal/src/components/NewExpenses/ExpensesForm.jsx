import { Button, FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";

const ExpensesForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     newTitle: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, newTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expensesData = {
      title: newTitle,
      amount: amount,
      date: new Date(date),
    };
    console.log(expensesData);
    setNewTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={submitHandler} sx={{ alignItems: "center" }}>
        <TextField
          className="mb-50"
          type="name"
          size="small"
          label="Name"
          value={newTitle}
          onChange={titleChangeHandler}
        />
        <TextField
          type="amount"
          min="0.01"
          steps="0.01"
          size="small"
          label="Amount"
          value={amount}
          onChange={amountChangeHandler}
        />
        <TextField
          type="date"
          min="2022-1-31"
          max="2022-12-31"
          size="small"
          value={date}
          onChange={dateChangeHandler}
        />
        <Button type="submit">Add Expenses</Button>
      </form>
    </>
  );
};

export default ExpensesForm;
