import { createReducer, on } from '@ngrx/store';
import { SizeState } from './dialogs.state';
import {
  decreaseSize,
  increaseSize,
  inputSize,
  loadDialogs,
  loadDialogsError,
  loadDialogsSuccess,
  sliderSize,
} from './dialogs.actions';

// -----------  States
export const initialDialogsState: any = {
  total: 2,
  currentPage: 0,
  pageSize: 2,
  data: [
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b950',
      conditions: 'string',
      type: 'FOLDER',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b948',
      conditions: 'string',
      type: 'STANDARD',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b950',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b129',
      conditions: 'string',
      type: 'STANDARD',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b221',
      conditions: 'string',
      type: 'FOLDER',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923',
      conditions: 'string',
      type: 'FOLDER',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b221',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b129',
      conditions: 'string',
      type: 'FOLDER',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b432',
      conditions: 'string',
      type: 'STANDARD',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b129',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b436',
      conditions: 'string',
      type: 'STANDARD',
    },
  ],
};

export const initialSizeState: SizeState = {
  fontSize: 100,
};

// ----------- Reducers
export const DialogsReducer = createReducer(
  initialDialogsState,
  on(loadDialogs, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadDialogsSuccess, (state, { payload }) => ({
    ...state,
    payload,
    isLoading: false,
  })),
  on(loadDialogsError, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export const SizeReducer = createReducer(
  initialSizeState,
  on(increaseSize, (state) => {
    state = {
      ...state,
      fontSize: state.fontSize + 1,
    };
    return state;
  }),
  on(decreaseSize, (state) => {
    state = {
      ...state,
      fontSize: state.fontSize - 1,
    };
    return state;
  }),
  on(sliderSize, (state, { fontSize }) => ({
    fontSize,
  })),
  on(inputSize, (state, { fontSize }) => ({
    fontSize,
  }))
);
