import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles({
  buttonWrapper: {
    padding: 20
  }
});

const TestButton = ({ web3Provider, name }) => {
  const classes = useStyles();

  const sendTx = () => {
    web3Provider.eth.getBlockNumber().then(console.log);
    web3Provider.eth.getAccounts().then(res => {
      console.log(res);
      web3Provider.eth.sendTransaction({
        from: res,
        to: "0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297",
        value: web3Provider.utils.toWei("0.01")
      });
    });
  };
  return (
    <div className={classes.buttonWrapper}>
      <Button onClick={() => sendTx()} variant="contained" color="primary">
        {name}
      </Button>
    </div>
  );
};

export default TestButton;
