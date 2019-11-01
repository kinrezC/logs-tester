import React from 'react';
import Web3 from 'web3';
import {
  TerminalHttpProvider,
  EnvironmentTypes,
  Web3Versions,
} from '@terminal-packages/sdk';
import { Button } from '@material-ui/core';

const web3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: window.ethereum,
    apiKey: 'T690K1sYaAVB+0bP7li2KQ==',
    source: 'DAPPER',
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
    web3Version: Web3Versions.one,
  }),
);

const DapperTest = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => web3.eth.getBlockNumber()}
      >
        Dapper Test
      </Button>
    </div>
  );
};

export default DapperTest;
