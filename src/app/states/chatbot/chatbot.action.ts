import { createAction, props } from "@ngrx/store";

export const minimize = createAction('MINIMIZE');
export const maximize = createAction('MAXIMIZE');
export const updateStatus = createAction(
  'UPDATE_STATUS',
  props<{status: string}>()
);