import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Typography, Grid } from '@material-ui/core';
import { TerminalHttpProvider } from '@terminal-packages/sdk';
import TestButton from './components/TestButton';
import {
  torus,
  torusObject,
  initializeWeb3ProviderEngine,
  providers,
} from './constants/constants';

import useStyles from './styles';

const App = () => {
  const [torusWeb3, setTorusWeb3] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    initializeWeb3ProviderEngine();
    await torus.init();
    await torus.login();
    setTorusWeb3(new Web3(new TerminalHttpProvider(torusObject)));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.logoWrapper}>
        <img
          src="https://storage.cloud.google.com/terminal-assets/images/text-black-robot-light-face-black-horizontal.png?authuser=0&organizationId=1025847849015"
          alt="Hex logo"
          className={classes.logoContainer}
        />
      </div>
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Logs & Analytics
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Demo Dashboard
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
