import React, { FC } from 'react';

import { Container, Typography } from '@mui/material';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

import { useStoreState } from '../productReducer';

import { Favorites } from './Favorites/Favorites';
import styles from './FavoritesList.module.scss';

export const FavoritesList: FC = () => {
  const favorites = useStoreState('favorites');

  return (
    <Container className={styles.favoritesContainer}>
      <Typography variant="h5"> Favorites </Typography>
      <div className={styles.favoritesList}>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              itemCount={favorites.length}
              itemSize={110}
              width={width}
              useIsScrolling={false}
            >
              {({ style, index }) => {
                const item = favorites[index];

                return (
                  <div style={style}>
                    <Favorites item={item} />
                  </div>
                );
              }}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </Container>
  );
};
