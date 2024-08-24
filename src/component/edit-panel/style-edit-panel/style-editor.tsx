import { SIGNAL_NAME_LABEL_MAP, styleSignals } from '@storage/style-control'
import { For, JSX, Show } from 'solid-js'
import { fieldsStyle } from './index.css'
import { popAppearProgressiveStyle } from '@shade/theme.css'
import StyleFieldInput from '../../style-field-input'
import { editingPartSignal } from '@storage/editing-part'

const [getEditingPart] = editingPartSignal

function StyleEditor() {
    const getCurrentStyleSignal = () => styleSignals[getEditingPart()!]

    const getCurrentEditingStyle = () => getCurrentStyleSignal()[0]()
    const updateCurrentEditingStyle = (property: string, value: string) => {
        getCurrentStyleSignal()[1]({
            ...getCurrentEditingStyle(),
            [property]: value,
        })
    }

    return (
        <Show when={getEditingPart()}>
            {(editingPart) => (
                <sh-vert gap={3} data-fillx>
                    <sh-subtitle class={popAppearProgressiveStyle}>
                        {SIGNAL_NAME_LABEL_MAP[editingPart()]}
                    </sh-subtitle>
                    <div
                        classList={{
                            [fieldsStyle]: true,
                            [popAppearProgressiveStyle]: true,
                        }}
                    >
                        <sh-vert gap={4}>
                            <For
                                each={
                                    Object.keys(
                                        getCurrentEditingStyle()
                                    ) as (keyof JSX.CSSProperties)[]
                                }
                            >
                                {(property) => (
                                    <StyleFieldInput
                                        property={property}
                                        value={
                                            getCurrentEditingStyle()[property]!
                                        }
                                        onChange={updateCurrentEditingStyle}
                                    />
                                )}
                            </For>
                        </sh-vert>
                    </div>
                </sh-vert>
            )}
        </Show>
    )
}

export default StyleEditor
