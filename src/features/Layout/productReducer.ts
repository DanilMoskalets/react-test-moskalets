import { createStore } from 'react-hooks-global-state';

import { productAPI } from '../../api/productAPI';
import { appStore, setAppError, setAppStatus } from '../../app/appReducer';
import { RequestStatus } from '../../common/enums/requestStatus';
import { ProductActionsType } from '../../common/types/ActionTypes';
import { productType } from '../../common/types/ResponseType';

const initialState = {
  product: [] as productType[],
  favorites: [] as productType[],
};

type InitialStateType = typeof initialState;

const productReducer = (
  state = initialState,
  action: ProductActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'SET-PRODUCT':
      return { ...state, product: [...action.payload] };
    case 'ADD-FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      };
    case 'REMOVE-FAVORITES':
      return { ...state, favorites: state.favorites.filter(s => s.id !== action.id) };
    default:
      return state;
  }
};

export const setProduct = (payload: productType[]) =>
  ({ type: 'SET-PRODUCT', payload } as const);

export const addFavorites = (payload: productType) =>
  ({ type: 'ADD-FAVORITES', payload } as const);

export const removeFavorites = (id: number | undefined) =>
  ({ type: 'REMOVE-FAVORITES', id } as const);

export const getProduct = async (): Promise<void> => {
  appStore.dispatch(setAppStatus(RequestStatus.LOADING));
  try {
    const res = await productAPI.getProduct();

    dispatch(setProduct(res.data));
  } catch (error) {
    // @ts-ignore
    appStore.dispatch(setAppError(error));
  } finally {
    appStore.dispatch(setAppStatus(RequestStatus.SUCCEEDED));
  }
};

const productStore = createStore(productReducer, initialState);

export const { useStoreState, dispatch } = productStore;
