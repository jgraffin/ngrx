import { createAction, props } from '@ngrx/store';
import { DialogsItem } from './dialogs.state';

// ----------- Search
export const searchNodes = createAction(
  '[Search Nodes]',
  props<{ query: string }>()
);

// ----------- Dialogs
export const loadDialogs = createAction('[Load Dialogs list]');

// ----------- Size
export const increaseSize = createAction('[Button] Increase size');

export const decreaseSize = createAction('[Button] Decrease size');

export const sliderSize = createAction(
  '[Slider] Increase/Decrease size',
  props<{ fontSize: number }>()
);

export const inputSize = createAction(
  '[Input] Increase/Decrease size',
  props<{ fontSize: number }>()
);

// ----------- DropdownActions
export const dropdownActions = createAction(
  '[Button] dropdown action',
  props<{ show: boolean }>()
);
