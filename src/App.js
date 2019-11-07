import React, { useEffect } from 'react';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import {
  TerminalHttpProvider,
  SourceType,
  EnvironmentTypes,
  Web3Versions,
} from '@terminal-packages/sdk';
import TestButton from './TestButton';

import SendTx from './SendTx';
import { Bitski } from 'bitski';
import Portis from '@portis/web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubProvider from 'web3-provider-engine/subproviders/rpc';
import Fortmatic from 'fortmatic';

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

const portisWeb3 = new Web3(
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

const radarWeb3 = new Web3(
  new TerminalHttpProvider({
    host:
      'https://shared-parity-mainnet.nodes.deploy.radar.tech/?apikey=efc25932091f9925e2cd73814c76cebc8ad561e3cf040aab',
    apiKey: apiKey,
    source: 'RADAR',
    projectId: 'NYnLJDYjPAbBWpvA',
    environment: EnvironmentTypes.dev,
  }),
);

const e = new ProviderEngine();

const engineWeb3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: e,
    source: SourceType.Web3ProviderEngine,
    apiKey: apiKey,
    environment: EnvironmentTypes.dev,
    projectId: 'NYnLJDYjPAbBWpvA',
    web3Version: Web3Versions.one,
  }),
);

// const fm = new Fortmatic('');
// const fmProvider = fm.getProvider();

// const fortmaticWeb3 = new Web3(
//   new TerminalHttpProvider({
//     customHttpProvider: fmProvider,
//     apiKey: apiKey,
//     source: 'FORTMATIC',
//     environment: EnvironmentTypes.dev,
//     projectId: 'NYnLJDYjPAbBWpvA',
//   }),
// );

// const engineWeb3 = new Web3(e);

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

  useEffect(async () => {
    await e.addProvider(
      new RpcSubProvider({
        rpcUrl: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
      }),
    );

    await e.start();
    console.log(e);
  }, []);

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
            <SendTx />
          </div>
          <TestButton web3Provider={web3} name="Standard Endpoint" />
          <TestButton web3Provider={portisWeb3} name="Portis Test" />
          <TestButton web3Provider={bitskiWeb3} name="Bitski Test" />
          <TestButton web3Provider={radarWeb3} name="Radar Test" />
          <TestButton web3Provider={engineWeb3} name="Engine Test" />
          <TestButton web3Provider={fortmaticWeb3} name="Fortmatic Test" />
        </div>
      </div>
    </div>
  );
};

export default App;
