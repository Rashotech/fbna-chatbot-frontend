import { createAction, props } from "@ngrx/store";

export const minimize = createAction('MINIMIZE');
export const maximize = createAction('MAXIMIZE');
export const reset = createAction('RESET');
export const close = createAction('CLOSE');
export const updateStatus = createAction(
  'UPDATE_STATUS',
  props<{status: string}>()
);