import { createEffect, createSignal, For, JSX, Show } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import {
    buttonAreaStyle,
    contentAreaStyle,
    currentItemStyle,
    itemStyle,
    optionsWrapperStyle,
    progressiveDropdown,
    wrapperStyle,
} from './style.css'
import editIcon from '@shade/icons/Pen.svg'

interface Props {
    items: string[]
    default: string
    onChange: (selected: string) => void
    children: (props: RenderProps) => JSX.Element
}

interface RenderProps {
    id: string
}

export default function Dropdown(props: Props) {
    const [selected, setSelected] = createSignal(props.default)
    const [selectorOpen, setSelectorOpen] = createSignal(false)

    createEffect(() => {
        props.onChange(selected())
    })

    return (
        <div class={wrapperStyle} onClick={() => setSelectorOpen((f) => !f)}>
            <div class={[itemStyle, currentItemStyle].join(' ')}>
                <div class={contentAreaStyle}>
                    <Dynamic component={props.children} id={selected()} />
                </div>
            </div>
            <Show when={selectorOpen()}>
                <div class={optionsWrapperStyle}>
                    <For each={props.items}>
                        {(id) => (
                            <div
                                onClick={() => setSelected(id)}
                                class={[itemStyle, progressiveDropdown].join(
                                    ' '
                                )}
                            >
                                <div class={contentAreaStyle}>
                                    <Dynamic
                                        component={props.children}
                                        id={id}
                                    />
                                </div>
                                <div class={buttonAreaStyle}>
                                    <img src={editIcon} alt="edit icon" />
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </Show>
        </div>
    )
}
