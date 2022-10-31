import { FC, useEffect } from 'react';

import {
  AppBar,
  Box,
  LinearProgress,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';

import { themeMUI } from '../assets/theme/themeMUI';
import { RoutesPage } from '../common/components/RoutesPage/RoutesPage';
import { RequestStatus } from '../common/enums/requestStatus';
import { dispatch, getProduct } from '../features/Layout/productReducer';

import styles from './App.module.scss';
import { useStoreState } from './appReducer';

const App: FC = () => {
  const status = useStoreState('status');

  useEffect(() => {
    // @ts-ignore
    dispatch(getProduct());
  }, []);

  return (
    <ThemeProvider theme={themeMUI}>
      <Box className={styles.App}>
        <AppBar color="primary">
          <Toolbar className={styles.AppBar}>
            <Typography variant="h1">Product list Page</Typography>
          </Toolbar>
          {status === RequestStatus.LOADING && <LinearProgress color="secondary" />}
        </AppBar>

        <RoutesPage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
