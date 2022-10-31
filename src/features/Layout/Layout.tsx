import React, { FC } from 'react';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { FavoritesList } from './FavoritesList/FavoritesList';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <Box className={styles.body}>
      <FavoritesList />
      <Outlet />
    </Box>
  );
};
