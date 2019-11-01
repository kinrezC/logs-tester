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
        onClick={() => web3Provider.eth.getBlockNumber()}
        variant="contained"
        color="primary"
      >
        {name}
      </Button>
    </div>
  );
};

export default TestButton;
