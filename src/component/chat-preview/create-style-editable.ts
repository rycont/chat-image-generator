import { EDITABLE_ELEMENTS, styleSignals } from '@storage/style-control'
import { overlayStyle, smoothTransition } from './style.css'

let hoveringStack: HTMLElement[] = []

const OVERLAY_ID_ATTR = 'data-overlay-id'
const OVERLAY_TEXT_ATTR = 'data-overlay-text'

const SIGNAL_NAME_LABEL_MAP: Record<EDITABLE_ELEMENTS, string> = {
    chatWrapper: '배경',
    chatBubble: '말풍선',
    speakerText: '말 한 사람',
    speakerAvatar: '프로필 사진',
    timeText: '시간',
}

function createStyleEditable(name: keyof typeof styleSignals) {
    const signal = styleSignals[name]

    return {
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
        style: {
            ...signal[0](),
        },
        class: smoothTransition,
        [OVERLAY_TEXT_ATTR]: SIGNAL_NAME_LABEL_MAP[name],
    }
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
