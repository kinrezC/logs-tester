import React from "react";
import Web3 from "web3";
import { Button } from "@material-ui/core";

import contract from "./abi";

const web3 = new Web3(window.terminal.ethereum);

const dai = new web3.eth.Contract(
  contract,
  web3.utils.toChecksumAddress("0x9103fFc81A842b6d99e2B80c8Ec625D4575569e8")
);

const SendTx = () => {
  const sendTransaction = () =>
    window.ethereum.selectedAddress === null
      ? window.ethereum.enable
      : // : web3.eth
        // .sendTransaction({
        //   from: window.ethereum.selectedAddress,
        //   to: '0xeC1FEF973021d2eF6C4bC709b6f3eb1b4bbaB3aD',
        //   amount: web3.utils.toWei('.00001', 'ether'),
        // })
        // .then(console.log);
        dai.methods
          .addNumbers("100", "101")
          .send({
            from: window.ethereum.selectedAddress
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
