import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <Grid container sx={{ width: "100%", backgroundColor: "#f34576" }}>
        <Grid item xs={4}>
          <Typography variant="h5">{props.title}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">{props.amount}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">{(month, day, year)}</Typography>
          {/* <Typography variant="body2">{day}</Typography>
          <Typography variant="body2">{year}</Typography> */}
        </Grid>
      </Grid>
    </>
  );
}

export default ExpenseItem;
