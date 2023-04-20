import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <>
      <Card>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="caption">{title}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">{props.amount}</Typography>
          </Grid>
          <Grid item xs={3}>
            <ExpenseDate date={props.date} />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={clickHandler}>Change Title</Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ExpenseItem;
