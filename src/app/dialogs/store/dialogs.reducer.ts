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
  total: 7,
  currentPage: 0,
  pageSize: 7,
  data: [
    {
      id: '4fee00fe-c521-4232-9f7f-b746543ba159',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'teste dialog STANDARD',
      description: 'string',
      conditions: '#intent teste_julioooo',
      type: 'STANDARD',
      outputs: [
        {
          id: 'be0ffc91-3d63-4d16-8ad8-8c82b42f587d',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['string'],
          type: 'TEXT',
        },
      ],
      created: '2023-08-31T13:30:55.159+0000',
      updated: '2023-08-31T13:30:55.159+0000',
      disambiguationEnabled: false,
    },
    {
      id: '5a732e37-259d-43e1-b773-00126cfa15bc',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'teste dialog',
      description: 'string',
      conditions: '#intent teste_julioooo',
      previousSibling: '4fee00fe-c521-4232-9f7f-b746543ba159',
      type: 'STANDARD',
      outputs: [
        {
          id: 'bd65af6d-f7dc-480e-8423-b35338233749',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['string'],
          type: 'TEXT',
        },
      ],
      created: '2023-08-31T13:24:23.630+0000',
      updated: '2023-08-31T13:24:23.630+0000',
      disambiguationEnabled: false,
    },
    {
      id: 'Bem-vindo',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Bem-vindo',
      conditions: 'welcome',
      previousSibling: 'node_99ea11cd-7901-446f-bb90-7a3575a958d2',
      type: 'FRAME',
      outputs: [
        {
          id: '4f2f8177-2e68-428b-94ba-0e8cbb32863b',
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
      id: 'd4039190-dc57-4158-9440-39958ecc5f37',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'teste dialog',
      description: 'string',
      conditions: '#intent',
      previousSibling: '5a732e37-259d-43e1-b773-00126cfa15bc',
      type: 'STANDARD',
      outputs: [
        {
          id: '17e06161-e456-4ddf-b358-87f9d1601619',
          selectionPolicy: 'SEQUENTIAL',
          delimiter: null,
          values: ['string'],
          type: 'TEXT',
        },
      ],
      created: '2023-08-31T13:18:19.869+0000',
      updated: '2023-08-31T13:18:19.869+0000',
      disambiguationEnabled: false,
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
          id: 'e7d5c5b8-b033-4b8e-a734-47df30a0bebc',
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
          id: '617205e2-4505-4000-b770-034232ecfbc1',
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
      previousSibling: 'd4039190-dc57-4158-9440-39958ecc5f37',
      type: 'STANDARD',
      outputs: [
        {
          id: '32e7821e-6fa2-4abc-98ce-1811268a9a37',
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
