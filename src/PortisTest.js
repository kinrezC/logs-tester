import React from "react";
import Portis from "@portis/web3";
import Web3 from "web3";
import { Button } from "@material-ui/core";
import { TerminalHttpProvider, EnvironmentTypes } from "@terminal-packages/sdk";

const portis = new Portis("my_id", "mainnet");

const web3 = new Web3(
  new TerminalHttpProvider({
    apiKey: "T690K1sYaAVB+0bP7li2KQ==",
    source: "PORTIS",
    projectId: "NYnLJDYjPAbBWpvA",
    environment: EnvironmentTypes.dev,
    customHttpProvider: portis.provider
  })
);

const PortisTest = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => web3.eth.getBlockNumber().then(console.log)}
      >
        Portis
      </Button>
    </div>
  );
};

export default PortisTest;
