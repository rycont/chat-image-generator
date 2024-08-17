import {
    EDITABLE_PARTS,
    SIGNAL_NAME_LABEL_MAP,
    styleSignals,
} from '@storage/style-control'
import { For } from 'solid-js'
import { fieldsStyle } from './index.css'

interface Props {
    editingPart: EDITABLE_PARTS
}

function StyleEditor(props: Props) {
    const getCurrentEditingStyle = () => styleSignals[props.editingPart][0]()
    return (
        <sh-vert gap={3} data-fillx>
            <sh-subtitle>
                {SIGNAL_NAME_LABEL_MAP[props.editingPart]}
            </sh-subtitle>
            <div class={fieldsStyle}>
                <sh-vert gap={4}>
                    <For each={Object.entries(getCurrentEditingStyle())}>
                        {([key, value]) => (
                            <sh-label attr:title={key}>
                                <sh-input attr:value={value} />
                            </sh-label>
                        )}
                    </For>
                </sh-vert>
            </div>
        </sh-vert>
    )
}

export default StyleEditor
