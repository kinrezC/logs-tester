import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Typography } from '@material-ui/core';
import { TerminalHttpProvider } from '@terminal-packages/sdk';
import SendTx from './SendTx';
import TestButton from './TestButton';
import RpcSubProvider from 'web3-provider-engine/subproviders/rpc';

import { torusObject, torus, web3ProviderEngine, providers } from './constants';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  useEffect(async () => {
    await web3ProviderEngine.addProvider(
      new RpcSubProvider({
        rpcUrl: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
      }),
    );
    await web3ProviderEngine.start();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Logs/Analytics Demo
        </Typography>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonWrapper}>
            <SendTx />
          </div>
          {providers.map(provider => (
            <TestButton
              web3Provider={new Web3(new TerminalHttpProvider(provider.input))}
              name={provider.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
