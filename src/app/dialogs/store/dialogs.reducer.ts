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
      id: '16',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY FOLDER',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: '14',
    },
    {
      id: '11',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY FOLDER',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: '14',
    },
    {
      id: '12',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY DIALOG',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
    },
    {
      id: '14',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY STANDARD',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: '12',
    },
    {
      id: '17',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY STANDARD',
      type: 'STANDARD',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: '16',
    },
    {
      id: '13',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: 'Test 1 - EMPTY FOLDER',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
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
