import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DialogsState } from './dialogs.state';

const getDialogsListState = createFeatureSelector<DialogsState>('');

export const getDialogsList = createSelector(
  getDialogsListState,
  (state: DialogsState) => state.entities
);

export const getDialogsListIsLoading = createSelector(
  getDialogsListState,
  (state: DialogsState) => state.isLoading
);
