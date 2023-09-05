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
      id: 'Cidades',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Serpro',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
    },
    {
      id: 'Manaus',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Serpro_1_Visualiza',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Cidades',
    },
    {
      id: 'Visualizar Sistema_',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'STANDARD',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Manaus',
    },
    {
      id: 'Visualizar Sistema 2',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'STANDARD',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Visualizar Sistema_',
    },
    {
      id: 'Visualizar Sistema 3',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Visualizar Sistema_',
    },
    {
      id: 'Visualizar Sistema 4',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'STANDARD',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Visualizar Sistema 3',
    },
    {
      id: 'Turismo',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Minha_cidade',
      type: 'STANDARD',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Manaus',
    },
    {
      id: 'Belo Horizonte',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Dicas_de_lugares_na_cida...',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Cidades',
    },
    {
      id: 'Endereços',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Endereço_mapa',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
      parent: 'Cidades',
    },
    {
      id: 'Diversão',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
    },
    {
      id: 'Perguntas',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Estou_com_dúvidas e #Ser...',
      type: 'FOLDER',
      created: '2023-09-04T17:43:55.106+0000',
      updated: '2023-09-04T17:43:55.106+0000',
    },
    {
      id: 'Visualizar Sistema',
      workspaceId: 'caed00fa-3798-4879-8e98-3f363e7ab3df',
      title: 'Test 1',
      description: 'Test 1',
      conditions: '#Como_vejo_meus_dados',
      type: 'STANDARD',
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
