import { createSignal } from 'solid-js'

export enum EDIT_PANEL {
    CHAT = 'chat',
    STYLE = 'style',
}

export const currentEditPanelSignal = createSignal(EDIT_PANEL.CHAT)
