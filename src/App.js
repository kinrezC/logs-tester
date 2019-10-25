import React from 'react';
import Web3 from 'web3';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';

import { TerminalHttpProvider, EnvironmentTypes } from '@terminal-packages/sdk';

import SendTx from './SendTx';

const web3 = new Web3(
  new TerminalHttpProvider({
    host:
      'https://newly-relaxed-grackle.quiknode.io/e565e82e-0fe8-48ed-b8d6-99e7f91b54ea/kUsNv4sxZA6FJ1gEsLSxHA==/',
    source: 'QUICKNODE DEMO',
    apiKey: 'zYwDsCwqeD6Sg9plihI/xQ==',
    environment: EnvironmentTypes.dev,
    projectId: 'NPkEByjPkAbnldvp',
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
        </div>
      </div>
    </div>
  );
};

export default App;
