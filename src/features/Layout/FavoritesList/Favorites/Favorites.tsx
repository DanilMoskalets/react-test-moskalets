import React, { FC } from 'react';

import { Grid, IconButton, Typography } from '@mui/material';

import FavoriteIcon from '../../../../assets/image/liked-icon.svg';
import { productType } from '../../../../common/types/ResponseType';
import { dispatch, removeFavorites } from '../../productReducer';

import styles from './Favorites.module.scss';

type FavoritesPropsType = {
  item: productType;
};
export const Favorites: FC<FavoritesPropsType> = ({ item }) => {
  const onChangeLike = (): void => {
    dispatch(removeFavorites(item.id));
  };

  return (
    <Grid item className={styles.Item}>
      <div>
        <img
          className={styles.ItemImg}
          alt="Product"
          src={`${process.env.REACT_APP_BASE_URL + item.src}`}
        />
      </div>

      <div className={styles.itemInfo}>
        <Typography sx={{ fontSize: '14px' }} variant="body1">
          {item.name}
        </Typography>
        <div className={styles.ItemDescription}>
          <Typography variant="body2">${item.price}</Typography>
          <IconButton onClick={onChangeLike}>
            <img src={FavoriteIcon} alt="Favorite Icon" className={styles.favoriteIcon} />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};
