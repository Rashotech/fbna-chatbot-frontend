import {createReducer, on } from '@ngrx/store';
import { minimize, maximize, updateStatus, reset, close } from './chatbot.action';

export interface IChatBotState {
  status: string;
  minimize: boolean;
  hidden: boolean
}

const initialState: IChatBotState = {
  status: 'Get Started',
  minimize: true,
  hidden: true
};

export const chatbotReducer = createReducer(
  initialState,
  on(minimize, (state)=> ({...state, minimize: true, status: "Continue" })),
  on(close, (state)=> ({...state, hidden: true, minimize: true, status: 'Get Started' })),
  on(maximize, (state) => ({ ...state, minimize: false, hidden: false })),
  on(reset, (state) => ({ ...state, minimize: true, hidden: true, status: 'Get Started'})),
  on(updateStatus, (state , { status }) => ({
    ...state,
    status: status
  }))
)