import { createEffect, createSignal } from 'solid-js'
import { EDITABLE_PARTS } from './style-control'
import { currentEditPanelSignal, EDIT_PANEL } from './current-edit-panel'

export const editingPartSignal = createSignal<EDITABLE_PARTS | null>(null)

createEffect(() => {
    const part = editingPartSignal[0]()
    if (part === null) return

    currentEditPanelSignal[1](EDIT_PANEL.STYLE)
})
