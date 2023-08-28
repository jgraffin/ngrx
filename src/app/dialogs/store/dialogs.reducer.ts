import { createReducer, on } from '@ngrx/store';
import { SizeState, DialogsState } from './dialogs.state';
import {
  decreaseSize,
  increaseSize,
  inputSize,
  loadDialogs,
  loadDialogsError,
  loadDialogsSuccess,
  sliderSize,
} from './dialogs.actions';
import { DataMock } from './dataMock';

// -----------  States
export const initialDialogsState: DialogsState = {
  entities: DataMock,
  isLoading: false,
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
  on(loadDialogsSuccess, (state, { entities }) => ({
    ...state,
    entities,
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
