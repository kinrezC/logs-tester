import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    '& .MuiButton-contained': {
      height: '100%',
      minHeight: '100%',
      width: '40%',
      minWidth: '40%',
      backgroundColor: 'white',
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
      {name}
    </Button>
  );
};

export default TestButton;
