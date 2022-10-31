import { setAppError, setAppInfo, setAppStatus } from '../../app/appReducer';
import {
  addFavorites,
  removeFavorites,
  setProduct,
} from '../../features/Layout/productReducer';

export type ProductActionsType =
  | ReturnType<typeof setProduct>
  | ReturnType<typeof addFavorites>
  | ReturnType<typeof removeFavorites>;

export type AppReducerActionsType =
  | ReturnType<typeof setAppStatus>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setAppInfo>;
