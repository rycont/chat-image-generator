import { editingPartSignal } from '@storage/editing-part'
import { styleSignals } from '@storage/style-control'
import { Match, Switch } from 'solid-js'
import StyleEditor from './style-editor'

const [getEditingPart] = editingPartSignal

function StyleEditPanel() {
    return (
        <Switch
            fallback={
                <sh-vert>
                    <sh-text>왼쪽 화면에서 수정할 부분을 선택해주세요</sh-text>
                </sh-vert>
            }
        >
            <Match when={getEditingPart()}>
                {(editingPart) => <StyleEditor editingPart={editingPart()} />}
            </Match>
        </Switch>
    )
}

export default StyleEditPanel
