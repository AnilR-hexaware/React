import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <>
      <Card sx={{ width: "100%", backgroundColor: "#f34576" }}>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="caption">{props.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">{props.amount}</Typography>
          </Grid>
          <Grid item xs={4}>
            <ExpenseDate date={props.date} />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ExpenseItem;
