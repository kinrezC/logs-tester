import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Typography, Grid } from '@material-ui/core';
import { TerminalHttpProvider } from '@terminal-packages/sdk';
import TestButton from './components/TestButton';
import RpcSubProvider from 'web3-provider-engine/subproviders/rpc';
import PopupButton from './components/Popup';
import {
  torusObject,
  torus,
  web3ProviderEngine,
  providers,
} from './constants/constants';

import useStyles from './styles';

const App = () => {
  const [torusWeb3, setTorusWeb3] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    await web3ProviderEngine.addProvider(
      new RpcSubProvider({
        rpcUrl: 'https://mainnet.infura.io/v3/d44c7ae787e4470499b9a8118db2f71e',
      }),
    );
    await web3ProviderEngine.start();

    await torus.init();
    await torus.login();
    setTorusWeb3(new Web3(new TerminalHttpProvider(torusObject)));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Logs/Analytics Demo
        </Typography>
        <div className={classes.buttonsContainer}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {providers.map(provider => (
              <Grid
                container
                xs={4}
                justify="center"
                alignContent="center"
                className={classes.testButtonContainer}
              >
                <TestButton
                  web3Provider={
                    new Web3(new TerminalHttpProvider(provider.input))
                  }
                  name={provider.name}
                />
              </Grid>
            ))}
            <Grid
              container
              xs={4}
              justify="center"
              alignContent="center"
              className={classes.testButtonContainer}
            >
              <TestButton web3Provider={torusWeb3} name={'Torus Test'} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default App;
