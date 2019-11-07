import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
  buttonWrapper: {
    padding: 20,
  },
});

const TestButton = ({ web3Provider, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      <Button
        onClick={() => {
          // web3Provider.eth
          //   .getTransaction(
          //     "0x3f4cc688280cbdaf5b7d98733ee8b0784907a0d392e11940d9e2c098c44af1e5"
          //   )
          //   .then(console.log);
          web3Provider.eth.getBlockNumber().then(console.log);
        }}
        variant="contained"
        color="primary"
      >
        {name}
      </Button>
    </div>
  );
};

export default TestButton;
