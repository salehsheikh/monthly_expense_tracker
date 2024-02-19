import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  PaymentOutlined,
  PaymentsOutlined,
  CreditScore,
} from "@mui/icons-material";

const useStyles = makeStyles({
  cardContainer: {
    margin: 20,
    display: "flex",
   flexWrap:"wrap",
    justifyContent: "center",
    gap: "10px",
    // Adjust the gap between cards
  },
  card: {
    width: "calc(100% / 3)", // Equal width for each card
    maxWidth: "300px", // Max width for responsiveness
    margin: "0 5px", // Adjust the margin between cards
    height: "150px", // Set the height for each card
    transition: "transform 0.3s ease", // Add transition effect for hover
    "&:hover": {
      transform: "scale(1.05)", // Scale up the card on hover
    },
  },
  icon: {
    fontSize: 48,
    color: "#b1d8e9",

  },
  title: {
    color: "#bad5e1", // Set title color to red
  },
});

const IconCard = ({ icon, title, value }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      sx={{ bgcolor: "#FCFCFC", color: "background.paper", p: 2 }}
    >
      <CardContent>
        {icon}
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" color='#bad5e1'>
          Value: {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Cards = ({ budget, expense, remainingBudget }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <IconCard icon={<PaymentOutlined  className={classes.icon} /> } title="Budget" value={budget}  />
      <IconCard icon={<PaymentsOutlined className={classes.icon} />} title="Expense" value={expense} />
      <IconCard
        icon={<CreditScore  className={classes.icon}/>}
        title="Remaining Budget"
        value={remainingBudget}
      />
    </div>
  );
};

export { Cards, IconCard };
