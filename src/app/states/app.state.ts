import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { chatbotReducer } from "./chatbot/chatbot.reducer";

export interface State {};

export const reducers: ActionReducerMap<State> = {
  chatbot: chatbotReducer
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];