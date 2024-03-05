import {createReducer, on } from '@ngrx/store';
import { minimize, maximize, updateStatus } from './chatbot.action';

export interface IChatBotState {
  status: string;
  minimize: boolean;
}

const initialState: IChatBotState = {
  status: 'Get Started',
  minimize: true
};

export const chatbotReducer = createReducer(
  initialState,
  on(minimize, state=> ({...state, minimize: true })),
  on(maximize, state => ({ ...state, minimize: false })),
  on(updateStatus, (state, { status }) => ({
    ...state,
    status: status
  }))
)