import React, { useEffect, useState } from 'react';
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
import FortmaticButton from './FortmaticButton';
import PortisButton from './PortisButton';
import SendTx from './SendTx';
import { Bitski } from 'bitski';
import Portis from '@portis/web3';
import ProviderEngine from 'web3-provider-engine';
import RpcSubProvider from 'web3-provider-engine/subproviders/rpc';
import Torus from '@toruslabs/torus-embed';
import SafeProvider from 'safe-web3-provider';
import Fortmatic from 'fortmatic';

const apiKey = 'Z0CsA9B5xAkCjfw0kcKh6g==';
const projectID = 'bYzPZdjZezVQKvLA';

// SKALE
let schainEndpoint = 'http://sip1.skalenodes.com:10046';

const skaleWeb3 = new Web3(
  new TerminalHttpProvider({
    apiKey: apiKey,
    source: 'SKALE',
    host: schainEndpoint,
    projectId: projectID,
    environment: EnvironmentTypes.live,
    //web3Version: Web3Versions.one
  }),
);

// FORTMATIC
const fm = new Fortmatic('pk_test_62CB7F9DC2ABF2E9', 'rinkeby');
const fmProvider = fm.getProvider();
window.web3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: fmProvider,
    apiKey: apiKey,
    projectId: projectID,
    source: 'Fortmatic',
  }),
);

// GNOSIS SAFE -- NOT WORKING CURRENTLY
const gProvider = new SafeProvider({
  rpcUrl: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
});
const gnosisWeb3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: gProvider,
    apiKey: apiKey,
    source: 'GNOSIS',
    projectId: projectID,
    environment: EnvironmentTypes.live,
    web3Version: Web3Versions.one,
  }),
);
//const gnosisWeb3 = new Web3(gProvider);

/// BITSKI
const bitski = new Bitski('d56192ce-8a28-4aaa-9b3e-66b83b3dbbca');

const bitskiWeb3 = new Web3(
  new TerminalHttpProvider({
    customHttpProvider: bitski.getProvider(),
    apiKey: apiKey,
    source: 'BITSKI',
    projectId: projectID,
    environment: EnvironmentTypes.live,
  }),
);

// PORTIS
const portis = new Portis('486b2a54-3e4a-43fe-be5e-827a33750d0e', 'mainnet');

const portisWeb3 = new Web3(
  new TerminalHttpProvider({
    apiKey: apiKey,
    source: 'PORTIS',
    projectId: projectID,
    environment: EnvironmentTypes.live,
    customHttpProvider: portis.provider,
  }),
);

// INFURA
const infuraWeb3 = new Web3(
  new TerminalHttpProvider({
    host: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
    apiKey: apiKey,
    source: SourceType.Infura,
    projectId: projectID,
    environment: EnvironmentTypes.live,
    web3Version: Web3Versions.one,
  }),
);

// RADAR
const radarWeb3 = new Web3(
  new TerminalHttpProvider({
    host:
      'https://shared-parity-mainnet.nodes.deploy.radar.tech/?apikey=efc25932091f9925e2cd73814c76cebc8ad561e3cf040aab',
    apiKey: apiKey,
    source: 'RADAR',
    projectId: projectID,
    environment: EnvironmentTypes.live,
  }),
);

//WEB3-PROVIDER-ENGINE
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

// TORUS
const torus = new Torus();

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
  const [torusWeb3, setTorusWeb3] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    // SETUP for Web3-provider-engine
    await e.addProvider(
      new RpcSubProvider({
        rpcUrl: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
      }),
    );

    await e.start();
    console.log(e);

    //Setup for TORUS
    await torus.init();
    await torus.login();
    setTorusWeb3(
      new Web3(
        new TerminalHttpProvider({
          apiKey: apiKey,
          source: 'TORUS',
          customHttpProvider: torus.provider,
          projectId: projectID,
          web3Version: Web3Versions.one,
        }),
      ),
    );
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
          <TestButton web3Provider={web3} name="Standard Endpoint" />
          <TestButton web3Provider={skaleWeb3} name="Skale Test" />
          <PortisButton web3Provider={portisWeb3} name="Portis Trx" />
          <TestButton web3Provider={gnosisWeb3} name="Gnosis Test" />
          <TestButton web3Provider={torusWeb3} name="Torus Test" />
          <TestButton web3Provider={infuraWeb3} name="Infura Test" />
          <TestButton web3Provider={portisWeb3} name="Portis Test" />
          <TestButton web3Provider={bitskiWeb3} name="Bitski Test" />
          <TestButton web3Provider={radarWeb3} name="Radar Test" />
          <TestButton web3Provider={engineWeb3} name="Engine Test" />
          <TestButton web3Provider={fortmaticWeb3} name="Fortmatic Test" />
          <FortmaticButton web3Provider={window.web3} name="Fortmatic Test" />
        </div>
      </div>
    </div>
  );
};

export default App;
