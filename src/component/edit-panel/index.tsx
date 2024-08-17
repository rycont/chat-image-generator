import { Match, Switch } from 'solid-js'

import { currentEditPanelSignal, EDIT_PANEL } from '@storage/current-edit-panel'

import ContentEditor from './content-edit-panel'
import StyleEditPanel from './style-edit-panel'

export default function EditPanel() {
    return (
        <Switch>
            <Match when={currentEditPanelSignal[0]() === EDIT_PANEL.CHAT}>
                <ContentEditor />
            </Match>
            <Match when={currentEditPanelSignal[0]() === EDIT_PANEL.STYLE}>
                <StyleEditPanel />
            </Match>
        </Switch>
    )
}
