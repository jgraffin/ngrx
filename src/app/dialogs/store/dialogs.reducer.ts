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
          id: 'bb68d40e-f738-451c-9261-1cd93067642a',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['Olá. Como posso te ajudar?'],
          type: 'TEXT',
        },
      ],
      slots: [],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T16:50:34.454+0000',
      disambiguationEnabled: true,
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
          id: 'b3fcf38e-4889-4ee8-ae76-e13ae120f0c1',
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
          id: '93362bb3-733f-4e75-8108-71fac84117ff',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: [],
          type: 'TEXT',
        },
      ],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T17:12:41.620+0000',
      disambiguationEnabled: false,
    },
    {
      id: 'node_10_1692205500130',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      parent: 'Em outros casos',
      type: 'STANDARD',
      created: '2023-08-16T17:05:00.793+0000',
      updated: '2023-08-16T17:05:00.793+0000',
      disambiguationEnabled: true,
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
          id: 'dcc62e6a-3685-4e7b-9cfe-a1946154df5f',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['teste'],
          type: 'TEXT',
        },
      ],
      created: '2023-08-16T15:45:19.649+0000',
      updated: '2023-08-16T17:18:02.002+0000',
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
