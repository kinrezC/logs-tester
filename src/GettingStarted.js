import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { portisObject, fmObject, bitskiObject } from './constants';

const App = ({ bool }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (bool) {
      fetch(api).then(res => setState(res));
    }
  }, [bool]);

  return <Typography>{state}</Typography>;
};

export default GettingStarted;
