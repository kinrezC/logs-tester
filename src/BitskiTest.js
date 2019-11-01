import React from 'react';
import { TerminalHttpProvider, EnvironmentTypes } from '@terminal-packages/sdk';
import { Button } from '@material-ui/core';
import Web3 from 'web3';
import { Bitski } from 'bitski';

const bitski = new Bitski('d56192ce-8a28-4aaa-9b3e-66b83b3dbbca');

const web3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: bitski.getProvider(),
    apiKey: 'T690K1sYaAVB+0bP7li2KQ==',
    source: 'BITSKI',
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
  }),
);

const BitskiTest = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => web3.eth.getBlockNumber().then(console.log)}
      >
        BITSKI TEST
      </Button>
    </div>
  );
};

export default BitskiTest;
