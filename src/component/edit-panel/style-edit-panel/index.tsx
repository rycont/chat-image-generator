import { editingPartSignal } from '@storage/editing-part'
import { Match, Switch } from 'solid-js'
import StyleEditor from './style-editor'

const [getEditingPart] = editingPartSignal

function StyleEditPanel() {
    return (
        <Switch
            fallback={
                <sh-vert data-fillx>
                    <sh-text>왼쪽 화면에서 수정할 부분을 선택해주세요</sh-text>
                </sh-vert>
            }
        >
            <Match when={getEditingPart()}>
                <StyleEditor />
            </Match>
        </Switch>
    )
}

export default StyleEditPanel
