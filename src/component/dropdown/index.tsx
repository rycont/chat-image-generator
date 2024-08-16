import { createSignal, For, JSX, Show, ValidComponent } from 'solid-js'
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
import { DOMElement } from 'solid-js/jsx-runtime'

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

type DivMouseEvent = MouseEvent & {
    currentTarget: HTMLDivElement
    target: DOMElement
}

type DivKeyboardEvent = KeyboardEvent & {
    currentTarget: HTMLDivElement
    target: DOMElement
}

const OPENING_KEYS = ['Enter', ' ']

export default function Dropdown(props: Props) {
    const [selectorOpen, setSelectorOpen] = createSignal(false)
    const [isClosing, setIsClosing] = createSignal(false)

    const isSelectorVisible = () => selectorOpen() || isClosing()

    function openSelector() {
        setSelectorOpen(true)
    }

    function closeSelector() {
        if (!selectorOpen()) return

        setIsClosing(true)
        setTimeout(() => {
            setSelectorOpen(false)
            setIsClosing(false)
        }, 300)
    }

    function onEdit(e: DivMouseEvent) {
        if (!props.onEdit) return

        e.stopPropagation()
        props.onEdit!(props.selected)
    }

    function onKeyDown(e: DivKeyboardEvent) {
        const isOpeningKey = OPENING_KEYS.includes(e.key)
        if (!isOpeningKey) return

        openSelector()
    }

    function onChange(id: string) {
        props.onChange(id)
        closeSelector()
    }

    return (
        <div
            class={wrapperStyle}
            onBlur={closeSelector}
            onClick={openSelector}
            onKeyDown={onKeyDown}
            tabIndex={0}
        >
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
                                [progressiveDropdown]: !isClosing(),
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
                                onClick={onChange.bind(null, id)}
                                classList={{
                                    [itemStyle]: true,
                                    [progressiveDropdown]: !isClosing(),
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
                                        onClick={onEdit}
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
