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
      id: '0ead3097-f312-463d-a557-3d99f2286da9',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test Title 1',
      description: 'Test description 1',
      conditions: 'teste 01 - EMPTY FOLDER',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
    },
    {
      id: '36ca63b5-841f-4cbf-9f3b-1e8b23237c35',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test title 1 child',
      description: 'Test description 1 child',
      conditions: 'teste 02 - FILLED FOLDER',
      type: 'FOLDER',
      created: '2023-09-04T17:48:18.635+0000',
      updated: '2023-09-04T17:48:18.635+0000',
    },
    {
      id: '36ca63b5-841f-4cbf-9f3b-1e8b23237c358181',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test title 1 child',
      description: 'Test description 1 child opa',
      conditions: 'teste 03',
      type: 'STANDARD',
      created: '2023-09-04T17:48:18.635+0000',
      updated: '2023-09-04T17:48:18.635+0000',
      parent: '36ca63b5-841f-4cbf-9f3b-1e8b23237c35',
    },
    {
      id: '36ca63b5-841f-4cbf-9f3b-1e8b23237c12',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test dialog root',
      description: 'Test dialog root',
      conditions: 'teste 04',
      type: 'FOLDER',
      created: '2023-09-04T17:48:18.635+0000',
      updated: '2023-09-04T17:48:18.635+0000',
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
