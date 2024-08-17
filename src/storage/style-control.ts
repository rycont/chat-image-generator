import { createSignal, JSX } from 'solid-js'

const defaultStyles: Record<string, JSX.CSSProperties> = {
    speakerAvatar: {
        width: '36px',
        height: '36px',
        'background-color': 'white',
        'border-width': '1px',
        'border-color': '#d8dae5',
        'border-style': 'solid',
        'border-radius': '12px',
    },
    chatBubble: {
        'background-color': '#FFFFFF',
        'border-radius': '12px',
        'font-weight': '500',
        'font-size': '18px',
        padding: '12px',
        color: '#000000',
        width: 'fit-content',
    },
    chatWrapper: {
        'background-color': '#EBECF5',
        padding: '16px',
    },
    speakerText: {
        'font-weight': '800',
        'font-size': '16px',
    },
    timeText: {
        'font-size': '14px',
        color: '#8E8E93',
    },
}

export const chatWrapperStyleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.chatWrapper
)
export const chatBubbleStyleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.chatBubble
)
export const speakerTextStyleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.speakerText
)
export const speakerAvatarStyleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.speakerAvatar
)
export const timeTextStyleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.timeText
)
