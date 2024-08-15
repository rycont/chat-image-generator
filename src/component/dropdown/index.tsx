import {
    createEffect,
    createSignal,
    For,
    JSX,
    Show,
    ValidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import {
    buttonAreaStyle,
    contentAreaStyle,
    currentItemStyle,
    disappearStyle,
    itemAdderStyle,
    itemStyle,
    optionsWrapperDisappearStyle,
    optionsWrapperStyle,
    progressiveDropdown,
    wrapperStyle,
} from './style.css'
import editIcon from '@shade/icons/Pen.svg'

interface Props {
    items: string[]
    selected: string
    onChange: (selected: string) => void
    onEdit?: (id: string) => void
    addItem?: ValidComponent
    children: (props: RenderProps) => JSX.Element
}

interface RenderProps {
    id: string
}

export default function Dropdown(props: Props) {
    const [selectorOpen, setSelectorOpen] = createSignal(false)
    const [isClosing, setIsClosing] = createSignal(false)

    createEffect(() => {
        const isSelectorOpen = selectorOpen()

        if (!isSelectorOpen) {
            return
        }
    })

    const isSelectorVisible = () => selectorOpen() || isClosing()

    const toggleSelectorOpen = () => {
        if (selectorOpen()) {
            setIsClosing(true)
            setTimeout(() => {
                setSelectorOpen(false)
                setIsClosing(false)
            }, 500)
        } else {
            setSelectorOpen(true)

            document.addEventListener('click', (e) => {
                const target = e.target as HTMLElement
                const isInside = target.closest(`.${wrapperStyle}`)

                if (isInside) {
                    return
                }

                setIsClosing(true)
                setTimeout(() => {
                    setSelectorOpen(false)
                    setIsClosing(false)
                }, 500)
            })
        }
    }

    return (
        <div class={wrapperStyle} onClick={() => toggleSelectorOpen()}>
            <div
                classList={{
                    [itemStyle]: true,
                    [currentItemStyle]: true,
                }}
            >
                <div class={contentAreaStyle}>
                    <Dynamic component={props.children} id={props.selected} />
                </div>
            </div>
            <Show when={isSelectorVisible()}>
                <div
                    classList={{
                        [optionsWrapperStyle]: true,
                        [optionsWrapperDisappearStyle]: isClosing(),
                    }}
                >
                    <Show when={props.addItem}>
                        <div
                            classList={{
                                [itemStyle]: true,
                                [contentAreaStyle]: true,
                                [progressiveDropdown]: true,
                                [itemAdderStyle]: true,
                                [disappearStyle]: isClosing(),
                            }}
                        >
                            <Dynamic component={props.addItem} />
                        </div>
                    </Show>
                    <For each={props.items}>
                        {(id) => (
                            <div
                                onClick={() => props.onChange(id)}
                                classList={{
                                    [itemStyle]: true,
                                    [progressiveDropdown]: true,
                                    [disappearStyle]: isClosing(),
                                }}
                            >
                                <div class={contentAreaStyle}>
                                    <Dynamic
                                        component={props.children}
                                        id={id}
                                    />
                                </div>
                                <Show when={props.onEdit}>
                                    <div
                                        class={buttonAreaStyle}
                                        onClick={props.onEdit!.bind(null, id)}
                                    >
                                        <img src={editIcon} alt="edit icon" />
                                    </div>
                                </Show>
                            </div>
                        )}
                    </For>
                </div>
            </Show>
        </div>
    )
}
