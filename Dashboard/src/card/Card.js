import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: { maxWidth: 345, },
  media: { height: 140, }, 
});

const CardsProps = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.media}>
        <Typography color="textSecondary" gutterBottom>
          <span className="card-title">
            {props.icon}
            {props.title}
          </span>
        </Typography>
        <Typography variant="h5">
          <span className="card-body">
            <span className="chart_container">{props.chart}</span>
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardsProps;
