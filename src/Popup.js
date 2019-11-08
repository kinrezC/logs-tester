import React from "react";
import Web3 from "web3";
import { Button } from "@material-ui/core";
import Popup from "reactjs-popup";
import contract from "./abi";
import { portisObject } from "./constants";
import { fmObject } from "./constants";
import { TerminalHttpProvider } from "@terminal-packages/sdk";
const web3 = new Web3(window.terminal.ethereum);
const portisWeb3 = new Web3(new TerminalHttpProvider(portisObject));
const fmWeb3 = new Web3(new TerminalHttpProvider(fmObject));
// const dai = new web3.eth.Contract(
//   contract,
//   web3.utils.toChecksumAddress("0x9103fFc81A842b6d99e2B80c8Ec625D4575569e8")
// );

const PopupButton = () => {
  const sendTransactionFm = () => {
    fmWeb3.eth.getAccounts().then(res => {
      console.log(res);
      fmWeb3.eth.sendTransaction({
        from: res,
        to: "0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297",
        value: fmWeb3.utils.toWei("0.1")
      });
    });
  };
  const sendTransactionPortis = () => {
    portisWeb3.eth.getAccounts().then(res => {
      console.log(res);
      portisWeb3.eth.sendTransaction({
        from: res,
        to: "0xE22FD0840d127E44557D5E19A0A9a52EAfc3e297",
        value: portisWeb3.utils.toWei("0.1")
      });
    });
  };
  const sendTransactionMM = () =>
    window.ethereum.selectedAddress === null
      ? window.ethereum.enable
      : web3.eth
          .sendTransaction({
            from: window.ethereum.selectedAddress,
            to: "0xeC1FEF973021d2eF6C4bC709b6f3eb1b4bbaB3aD",
            amount: web3.utils.toWei(".00001", "ether")
          })
          .then(console.log);

  return (
    <Popup
      variant="containted"
      color="primary"
      trigger={
        <Button variant="conatined" color="primary">
          Send Transaction
        </Button>
      }
    >
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendTransactionMM()}
        >
          Metamask
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendTransactionPortis()}
        >
          Portis
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendTransactionFm()}
        >
          Fortmatic
        </Button>
      </div>
    </Popup>
  );
};

export default PopupButton;
