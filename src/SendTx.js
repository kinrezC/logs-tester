import React from 'react';
import Web3 from 'web3';
import { Button } from '@material-ui/core';

const web3 = new Web3(window.terminal.ethereum);

const SendTx = () => {
  const sendTransaction = () =>
    window.ethereum.selectedAddress === null
      ? window.ethereum.enable
      : web3.eth
          .sendTransaction({
            from: window.ethereum.selectedAddress,
            to: '0xeC1FEF973021d2eF6C4bC709b6f3eb1b4bbaB3aD',
            amount: web3.utils.toWei('.00001', 'ether'),
          })
          .then(console.log);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => sendTransaction()}
    >
      Send Transaction
    </Button>
  );
};

export default SendTx;
