import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    '& .MuiButton-outlined': {
      height: 1000,
    },
  },
});

const TestButton = ({ web3Provider, name }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={() => web3Provider.eth.getBlockNumber().then(console.log)}
      variant="outlined"
      className={classes.button}
    >
      <Typography variant="h6">{name}</Typography>
    </Button>
  );
};

export default TestButton;
