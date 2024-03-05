import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export interface AppState {
  dynamicButtonText: string;
  isChatModalOpen: boolean;
  isChatModalMinimized: boolean;
  isModalResized: boolean;
}

const initialState: AppState = {
  dynamicButtonText: 'Get Started',
  isChatModalOpen: false,
  isChatModalMinimized: false,
  isModalResized: false,
};

const appReducer = createReducer(
  initialState,
  on(AppActions.updateDynamicButtonText, (state, { newText }) => ({ ...state, dynamicButtonText: newText })),
  on(AppActions.closeChatModal, state => ({ ...state, isChatModalOpen: false,  dynamicButtonText: 'Get Started' })),
  on(AppActions.minimizeChatModal, state => ({ ...state, isChatModalMinimized: true })),
  on(AppActions.toggleModalResize, state => ({ ...state, isModalResized: !state.isModalResized })),
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
