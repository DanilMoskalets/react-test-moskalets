import React, { FC } from 'react';

import { Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import FavoriteIcon from '../../../../assets/image/liked-icon.svg';
import { productType } from '../../../../common/types/ResponseType';
import {
  addFavorites,
  dispatch,
  removeFavorites,
  useStoreState,
} from '../../productReducer';

import styles from './Product.module.scss';

type ProductPropsType = {
  item: productType;
};

export const Product: FC<ProductPropsType> = ({ item }) => {
  const favorites = useStoreState('favorites');
  const isFavorites = favorites.find(f => f.id === item.id);

  const onChangeLike = (): void => {
    if (!isFavorites) {
      dispatch(addFavorites(item));
    } else {
      dispatch(removeFavorites(item.id));
    }
  };

  return (
    <Grid item className={styles.Item}>
      <Link to={`/product/${item.id}`}>
        <img
          alt="Product"
          className={styles.ItemImg}
          src={`${process.env.REACT_APP_BASE_URL + item.src}`}
        />
      </Link>
      <Typography variant="body1">{item.name}</Typography>
      <div className={styles.ItemDescription}>
        <Typography variant="body2">${item.price}</Typography>
        <IconButton onClick={onChangeLike}>
          <img
            className={isFavorites ? styles.favoriteIconActive : styles.favoriteIcon}
            alt="Favorit"
            src={FavoriteIcon}
          />
        </IconButton>
      </div>
    </Grid>
  );
};
