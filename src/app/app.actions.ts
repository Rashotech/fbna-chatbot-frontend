import { createAction } from '@ngrx/store';

export const updateDynamicButtonText = createAction('[Chat] Update Dynamic Button Text', (newText: string) => ({ newText }));
export const closeChatModal = createAction('[Modal] Close Chat Modal');
export const minimizeChatModal = createAction('[Modal] Minimize Chat Modal');
export const refreshModalData = createAction('[Modal] Refresh Modal Data');
export const toggleModalResize = createAction('[Modal] Toggle Modal Resize');
