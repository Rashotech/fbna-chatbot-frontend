import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IChatBotState } from "./chatbot.reducer";

export const selectChatbotState = createFeatureSelector<IChatBotState>('product');

export const selectStatus = createSelector(
  selectChatbotState,
  (state: IChatBotState) => state.status
)