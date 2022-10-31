import React, { FC, useEffect, useState } from 'react';

import { IconButton, Typography } from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';

import { productAPI } from '../../../api/productAPI';
import { appStore, setAppError, setAppStatus } from '../../../app/appReducer';
import FavoriteIcon from '../../../assets/image/liked-icon.svg';
import zoomIcon from '../../../assets/image/zoom-icon.svg';
import { RequestStatus } from '../../../common/enums/requestStatus';
import { productType } from '../../../common/types/ResponseType';
import {
  addFavorites,
  dispatch,
  removeFavorites,
  useStoreState,
} from '../productReducer';

import styles from './ProductPage.module.scss';

export const ProductPage: FC = () => {
  const [product, setProduct] = useState<productType | undefined>();
  const [isActiveZoom, setIsActiveZoom] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    appStore.dispatch(setAppStatus(RequestStatus.LOADING));
    productAPI
      .getSingleProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => appStore.dispatch(setAppError(err)))
      .finally(() => appStore.dispatch(setAppStatus(RequestStatus.SUCCEEDED)));
  }, [id]);
  const favorites = useStoreState('favorites');

  const isFavorites = favorites.find(f => f.id === Number(id));

  const onChangeLike = (): void => {
    if (product) {
      if (!isFavorites) {
        dispatch(addFavorites(product));
      } else dispatch(removeFavorites(Number(id)));
    }
  };

  const onZoomClick = (): void => {
    setIsActiveZoom(!isActiveZoom);
  };

  return (
    <div>
      {product && (
        <div className={styles.productContainer}>
          <div style={{ width: '437px', height: '437px' }} className={styles.imageBlock}>
            {isActiveZoom ? (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: `${process.env.REACT_APP_BASE_URL + product.src}`,
                    sizes: '',
                  },
                  largeImage: {
                    src: `${process.env.REACT_APP_BASE_URL + product.src}`,
                    width: 500,
                    height: 700,
                  },
                }}
              />
            ) : (
              <img
                alt="Product"
                className={styles.ImageProduct}
                src={`${process.env.REACT_APP_BASE_URL + product.src}`}
              />
            )}

            <IconButton onClick={onZoomClick}>
              <img className={styles.iconBtn} alt="Zoom Icon" src={zoomIcon} />
            </IconButton>
          </div>
          <div className={styles.productDescription}>
            <Typography sx={{ fontSize: '54px' }} variant="h1">
              {product.name}
            </Typography>
            <div className={styles.productDescriptionPrice}>
              <Typography variant="h1">${product.price}</Typography>
              <IconButton onClick={onChangeLike}>
                <img
                  src={FavoriteIcon}
                  alt="Favorite Icon"
                  className={
                    isFavorites ? styles.favoriteIconActive : styles.favoriteIcon
                  }
                />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
