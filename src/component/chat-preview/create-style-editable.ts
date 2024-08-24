import {
    EDITABLE_PARTS,
    SIGNAL_NAME_LABEL_MAP,
    StringStyleSheet,
    styleSignals,
} from '@storage/style-control'
import { overlayStyle, smoothTransition } from './style.css'
import { editingPartSignal } from '@storage/editing-part'
import { FIELD_TYPES, STYLE_FIELDS } from '@component/style-field-input/fields'

let hoveringStack: HTMLElement[] = []

const OVERLAY_ID_ATTR = 'data-overlay-id'
const OVERLAY_TEXT_ATTR = 'data-overlay-text'

function createStyleEditable(name: EDITABLE_PARTS) {
    const signal = styleSignals[name]

    return () => ({
        onMouseEnter: (e: MouseEvent) => {
            const thisTarget = e.target

            if (!(thisTarget instanceof HTMLElement)) return

            const lastHoveredElement = hoveringStack[hoveringStack.length - 1]
            const isChild = lastHoveredElement?.contains(thisTarget)

            if (isChild) {
                removeOverlay(lastHoveredElement)
            }

            hoveringStack.push(thisTarget)
            drawOverlay(thisTarget)
        },
        onMouseLeave: (e: MouseEvent) => {
            const thisTarget = e.target
            if (!(thisTarget instanceof HTMLElement)) return

            removeOverlay(thisTarget)
            hoveringStack.pop()

            const lastHoveredElement = hoveringStack[hoveringStack.length - 1]

            if (lastHoveredElement) {
                drawOverlay(lastHoveredElement)
            }
        },
        onClick: (e: MouseEvent) => {
            const thisTarget = e.currentTarget
            if (!(thisTarget instanceof HTMLElement)) return

            const lastHoveredElement = hoveringStack[hoveringStack.length - 1]
            if (lastHoveredElement !== thisTarget) return

            editingPartSignal[1](name)
        },
        style: {
            ...parseStringStyleSheet(signal[0]()),
        },
        class: smoothTransition,
        [OVERLAY_TEXT_ATTR]: SIGNAL_NAME_LABEL_MAP[name],
    })
}

function parseStringStyleSheet(style: StringStyleSheet) {
    const parsed = Object.fromEntries(
        Object.entries(style).map(([key, value]) => [
            key,
            FIELD_TYPES[STYLE_FIELDS[key].type].toStyleValue(value!),
        ])
    )

    return parsed
}

function drawOverlay(target: HTMLElement) {
    target.addEventListener('click', () => {})

    const rect = target.getBoundingClientRect()

    const overlay = document.createElement('div')
    const id = crypto.randomUUID()

    overlay.classList.add(overlayStyle)
    overlay.id = id

    overlay.style.top = `calc(${rect.top}px - 1rem)`
    overlay.style.left = `calc(${rect.left}px - 1rem)`
    overlay.style.width = rect.width + 'px'
    overlay.style.height = rect.height + 'px'

    const overlayText = target.getAttribute(OVERLAY_TEXT_ATTR)
    if (overlayText) {
        overlay.setAttribute(OVERLAY_TEXT_ATTR, overlayText)
    }

    document.body.appendChild(overlay)
    target.setAttribute(OVERLAY_ID_ATTR, id)
}

function removeOverlay(target: HTMLElement) {
    const id = target.getAttribute(OVERLAY_ID_ATTR)
    target.removeAttribute(OVERLAY_ID_ATTR)
    const overlay = document.getElementById(id!)

    overlay?.remove()
}

export default createStyleEditable
