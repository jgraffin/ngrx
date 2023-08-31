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
      id: 'node_099a58c0-199e-4c5e-bf34-b0da3771c73e',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: ' ',
      description: '',
      conditions: 'teste julio 1',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b949',
      type: 'STANDARD',
      created: '2023-08-31T19:11:47.798+0000',
      updated: '2023-08-31T19:11:47.798+0000',
      disambiguationEnabled: true,
    },
    {
      id: 'node_099a58c0-199e-4c5e-bf34-b0da3771c73e',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: ' ',
      description: '',
      conditions: 'teste julio 1',
      parent: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b949',
      type: 'STANDARD',
      created: '2023-08-31T19:11:47.798+0000',
      updated: '2023-08-31T19:11:47.798+0000',
      disambiguationEnabled: true,
    },
    {
      id: 'node_292f637b-b33d-4d3d-bc96-8afc7ee1b949',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: ' ',
      description: '',
      conditions: '#Serpro',
      type: 'FOLDER',
      created: '2023-08-31T19:08:44.033+0000',
      updated: '2023-08-31T19:08:44.033+0000',
      disambiguationEnabled: true,
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
