import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccessAlarm, BeachAccess, Brightness5 } from '@mui/icons-material';

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
    margin: 10,
  },
  icon: {
    fontSize: 48,
    color: '#1976d2', // you can customize the color
  },
});

const IconCard = ({ icon, title, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {icon}
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          Value: {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Cards = ({ budget }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconCard
        icon={<AccessAlarm />}
        title="Budget"
        value={budget}
      />
      <IconCard
        icon={<BeachAccess />}
        title="Beach Access"
      />
      <IconCard
        icon={<Brightness5 />}
        title="Brightness"
      />
    </div>
  );
};

export { Cards, IconCard };
