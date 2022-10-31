import { createStore } from 'react-hooks-global-state';

import { RequestStatus } from '../common/enums/requestStatus';
import { AppReducerActionsType } from '../common/types/ActionTypes';
import { Nullable } from '../common/types/Nullable';

const initialState = {
  status: RequestStatus.IDLE,
  error: null as Nullable<string>,
  info: null as Nullable<string>,
};

export type InitialStateType = typeof initialState;

export const appReducer = (
  state = initialState,
  action: AppReducerActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
    case 'APP/SET-ERROR':
    case 'APP/SET-APP-INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAppStatus = (status: RequestStatus) =>
  ({ type: 'APP/SET-STATUS', payload: { status } } as const);
export const setAppError = (error: Nullable<string>) =>
  ({ type: 'APP/SET-ERROR', payload: { error } } as const);
export const setAppInfo = (info: Nullable<string>) =>
  ({ type: 'APP/SET-APP-INFO', payload: { info } } as const);

export const appStore = createStore(appReducer, initialState);

export const { useStoreState, dispatch } = appStore;
