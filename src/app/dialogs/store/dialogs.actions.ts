import { createAction, props } from '@ngrx/store';
import { DialogsItem } from './dialogs.state';

// ----------- Dialogs
export const loadDialogs = createAction('[Dialogs list]');
export const loadDialogsSuccess = createAction(
  '[Dialogs loadDialogsSuccess]',
  props<{ entities: DialogsItem[] }>()
);
export const loadDialogsError = createAction('[Dialogs loadDialogsError]');

// -----------  Size
export const increaseSize = createAction('[button] Increase size');
export const decreaseSize = createAction('[button] Decrease size');
export const sliderSize = createAction(
  '[slider] Increase/Decrease size',
  props<{ fontSize: number }>()
);
export const inputSize = createAction(
  '[input] Increase/Decrease size',
  props<{ fontSize: number }>()
);
