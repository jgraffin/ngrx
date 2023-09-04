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
      conditions: 'first folder -> level 0',
      type: 'FOLDER',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b948',
      conditions: 'first folder -> level 1',
      type: 'FOLDER',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b950',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b92382178271827',
      conditions: 'first file -> level 2',
      type: 'STANDARD',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b948',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
      conditions: 'first file -> level 2',
      type: 'FOLDER',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b948',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b9238217827212',
      conditions: 'first file -> level 2',
      type: 'STANDARD',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
      conditions: 'first file -> level 3',
      type: 'STANDARD',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b948',
    },
    {
      id: '123-292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
      conditions: 'folder -> level 0',
      type: 'FOLDER',
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
      conditions: 'first file -> level 1',
      type: 'STANDARD',
      parent: '123-292f637b-b33d-4d3d-bc96-8afc7ee1b923821782721',
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
