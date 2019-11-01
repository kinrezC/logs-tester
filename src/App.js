import React from 'react';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import {
  TerminalHttpProvider,
  SourceType,
  EnvironmentTypes,
} from '@terminal-packages/sdk';
import TestButton from './TestButton';

import SendTx from './SendTx';
import { Bitski } from 'bitski';
import Portis from '@portis/web3';

const apiKey = 'T690K1sYaAVB+0bP7li2KQ==';

const bitski = new Bitski('d56192ce-8a28-4aaa-9b3e-66b83b3dbbca');

const bitskiWeb3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: bitski.getProvider(),
    apiKey: apiKey,
    source: 'BITSKI',
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
  }),
);

const portis = new Portis('my_id', 'mainnet');

const portistWeb3 = new Web3(
  new TerminalHttpProvider({
    apiKey: apiKey,
    source: 'PORTIS',
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
    customHttpProvider: portis.provider,
  }),
);

const web3 = new Web3(
  new TerminalHttpProvider({
    host: 'https://newly-relaxed-grackle.quiknode.io',
    apiKey: 'T690K1sYaAVB+0bP7li2KQ==',
    source: SourceType.Infura,
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
  }),
);

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    position: 'absolute',
    padding: 0,
    height: '100%',
    minHeight: 980,
    minWidth: '100%',
    top: 0,
    left: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    marginBottom: 30,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonWrapper: {
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();

  const getBlockNumber = () => {
    web3.eth.getBlockNumber().then(console.log);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Logs/Analytics Demo
        </Typography>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => getBlockNumber()}
            >
              Get Block Number
            </Button>
          </div>
          <div className={classes.buttonWrapper}>
            <SendTx />
          </div>
          <TestButton web3Provider={portistWeb3} name="Portis Test" />
          <TestButton web3Provider={bitskiWeb3} name="Bitski Test" />
        </div>
      </div>
    </div>
  );
};

export default App;
