import { createReducer, on } from '@ngrx/store';
import { SizeState } from './dialogs.state';
import {
  decreaseSize,
  dropdownActions,
  increaseSize,
  inputSize,
  loadDialogs,
  searchNodes,
  sliderSize,
} from './dialogs.actions';
import { DataMock } from './dataMock';

// -----------  States
export const initialSearchNodesState: {} = {
  querySearch: '',
};

export const initialDialogsState: any = DataMock;

export const initialSizeState: SizeState = {
  fontSize: 100,
};

export const initialDropdownActions: any = {
  show: false,
};

// ----------- Reducers
export const SearchNodeReducer = createReducer(
  initialSearchNodesState,
  on(searchNodes, (state, { query }) => ({
    query,
  }))
);

export const DialogsReducer = createReducer(
  initialDialogsState,
  on(loadDialogs, (state) => ({
    ...state,
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

export const DropDownActionsReducer = createReducer(
  initialDropdownActions,

  on(dropdownActions, (state, { show }) => ({
    show,
  }))
);
