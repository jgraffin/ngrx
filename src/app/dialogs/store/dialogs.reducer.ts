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
  total: 4,
  currentPage: 0,
  pageSize: 4,
  data: [
    {
      id: 'Bem-vindo',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Bem-vindo',
      conditions: 'welcome',
      previousSibling: 'node_99ea11cd-7901-446f-bb90-7a3575a958d2',
      type: 'FRAME',
      outputs: [
        {
          id: '554b1adb-bc85-4138-9161-9a762cfc9ac5',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['Olá. Como posso te ajudar?'],
          type: 'TEXT',
        },
      ],
      slots: [],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T16:50:34.454+0000',
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
