import React from 'react';
import { Button } from '@material-ui/core';

const TestButton = ({ web3Provider, name }) => {
  return (
    <Button
      onClick={() => web3Provider.eth.getBlockNumber().then(console.log)}
      variant="contained"
      color="primary"
    >
      {name}
    </Button>
  );
};

export default TestButton;
