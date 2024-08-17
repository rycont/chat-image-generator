import { currentEditPanelSignal, EDIT_PANEL } from '@storage/current-edit-panel'
import ContentEditor from './content-editor'
import { Match, Switch } from 'solid-js'

export default function EditPanel() {
    return (
        <Switch>
            <Match when={currentEditPanelSignal[0]() === EDIT_PANEL.CHAT}>
                <ContentEditor />
            </Match>
            <Match when={currentEditPanelSignal[0]() === EDIT_PANEL.STYLE}>
                <div>Style</div>
            </Match>
        </Switch>
    )
}
