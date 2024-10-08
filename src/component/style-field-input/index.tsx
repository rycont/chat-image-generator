import { Show } from 'solid-js'
import { FIELD_TYPES, STYLE_FIELDS } from './fields'
import { popAppearProgressiveStyle } from '@shade/theme.css'

interface Props {
    property: string
    value: string
    onChange: (name: string, value: string) => void
}

export default function StyleFieldInput(props: Props) {
    return (
        <Show when={STYLE_FIELDS[props.property]}>
            {(field) => (
                <sh-label
                    attr:title={field().label}
                    class={popAppearProgressiveStyle}
                >
                    <sh-input
                        attr:value={props.value}
                        attr:type={FIELD_TYPES[field().type].type}
                        attr:list={field().datalistId || null}
                        onInput={(e) =>
                            props.onChange(props.property, e.target.value)
                        }
                    />
                </sh-label>
            )}
        </Show>
    )
}
