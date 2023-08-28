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
          id: 'ce2d87ac-aef8-42c5-93a6-d6c95d36fdf2',
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
    {
      id: 'Em outros casos',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Em outros casos',
      conditions: 'anything_else',
      previousSibling: 'Bem-vindo',
      type: 'STANDARD',
      outputs: [
        {
          id: 'db5b74d0-1fb1-448f-96ae-5ddab506136f',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: [
            'Eu não entendi. Você pode tentar reformular a frase.',
            'Você pode reformular sua afirmação? Eu não estou entendendo.',
            'Eu não entendi o sentido.',
          ],
          type: 'TEXT',
        },
        {
          id: 'ec1b5e74-75fe-447a-9176-7ddac71f0675',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: [],
          type: 'TEXT',
        },
      ],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T17:12:41.620+0000',
    },
    {
      id: 'node_10_1692205500130',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      parent: 'Em outros casos',
      type: 'STANDARD',
      created: '2023-08-16T17:05:00.793+0000',
      updated: '2023-08-16T17:05:00.793+0000',
    },
    {
      id: 'node_99ea11cd-7901-446f-bb90-7a3575a958d2',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Dialogo de teste',
      description: '',
      conditions: '',
      type: 'STANDARD',
      outputs: [
        {
          id: '3c0bae8f-7db1-49c3-b264-5be4224f94a0',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['teste'],
          type: 'TEXT',
        },
      ],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T17:18:02.002+0000',
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
