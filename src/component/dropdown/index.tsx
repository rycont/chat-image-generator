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

const OPENING_KEYS_KEYS = ['Enter', ' ']

export default function Dropdown(props: Props) {
    let addItemRef!: HTMLElement

    const [selectorOpen, setSelectorOpen] = createSignal(false)
    const [isClosing, setIsClosing] = createSignal(false)
    const [focusingIndex, setFocusingIndex] = createSignal(-1)

    const isSelectorVisible = () => selectorOpen() || isClosing()

    createEffect(() => {
        const selectedIndex = props.items.indexOf(props.selected)

        if (selectedIndex === -1) {
            setFocusingIndex(0)
        } else {
            setFocusingIndex(selectedIndex)
        }
    })

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
        const IS_SELECTING_KEY = handleSelectingKey(e)
        if (IS_SELECTING_KEY) return

        const IS_ARROW_KEY = handleArrowKey(e)
        if (IS_ARROW_KEY) return
    }

    function handleSelectingKey(e: DivKeyboardEvent) {
        const isSelectingKey = OPENING_KEYS_KEYS.includes(e.key)
        if (!isSelectingKey) return false

        if (!selectorOpen()) {
            openSelector()
        } else {
            if (focusingIndex() === -1) {
                addItemRef.click()

                return true
            }

            onChange(props.items[focusingIndex()])
        }

        return true
    }

    function handleArrowKey(e: DivKeyboardEvent) {
        if (e.key === 'ArrowDown') {
            setFocusingIndex(
                Math.min(focusingIndex() + 1, props.items.length - 1)
            )
            return true
        } else if (e.key === 'ArrowUp') {
            const minIndex = props.addItem ? -1 : 0
            setFocusingIndex(Math.max(focusingIndex() - 1, minIndex))
            return true
        }

        return false
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
                            data-focused={focusingIndex() === -1 ? '' : null}
                            onMouseEnter={setFocusingIndex.bind(null, -1)}
                        >
                            <Dynamic
                                component={props.addItem}
                                ref={addItemRef}
                            />
                        </div>
                    </Show>
                    <For each={props.items}>
                        {(id, index) => (
                            <div
                                onClick={onChange.bind(null, id)}
                                classList={{
                                    [itemStyle]: true,
                                    [progressiveDropdown]: !isClosing(),
                                    [disappearStyle]: isClosing(),
                                }}
                                data-focused={
                                    index() === focusingIndex() ? '' : null
                                }
                                onMouseEnter={setFocusingIndex.bind(
                                    null,
                                    index()
                                )}
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
