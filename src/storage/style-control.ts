import { createSignal, JSX, Signal } from 'solid-js'

export enum EDITABLE_PARTS {
    CHAT_WRAPPER = 'chatWrapper',
    CHAT_BUBBLE = 'chatBubble',
    SPEAKER_TEXT = 'speakerText',
    SPEAKER_AVATAR = 'speakerAvatar',
    TIME_TEXT = 'timeText',
}

const defaultStyles = {
    [EDITABLE_PARTS.SPEAKER_AVATAR]: {
        width: '36px',
        height: '36px',
        'background-color': 'white',
        'border-width': '1px',
        'border-color': '#d8dae5',
        'border-style': 'solid',
        'border-radius': '12px',
    },
    [EDITABLE_PARTS.CHAT_BUBBLE]: {
        'background-color': '#FFFFFF',
        'border-radius': '12px',
        'font-weight': '500',
        'font-size': '18px',
        padding: '12px',
        color: '#000000',
        width: 'fit-content',
    },
    [EDITABLE_PARTS.CHAT_WRAPPER]: {
        'background-color': '#EBECF5',
        padding: '16px',
    },
    [EDITABLE_PARTS.SPEAKER_TEXT]: {
        'font-weight': '800',
        'font-size': '16px',
    },
    [EDITABLE_PARTS.TIME_TEXT]: {
        'font-size': '14px',
        color: '#8E8E93',
    },
}

const chatWrapperSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.chatWrapper
)
const chatBubbleSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.chatBubble
)
const speakerTextSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.speakerText
)
const speakerAvatarSignal = createSignal<JSX.CSSProperties>(
    defaultStyles.speakerAvatar
)
const timeTextSignal = createSignal<JSX.CSSProperties>(defaultStyles.timeText)

export const styleSignals = {
    [EDITABLE_PARTS.CHAT_WRAPPER]: chatWrapperSignal,
    [EDITABLE_PARTS.CHAT_BUBBLE]: chatBubbleSignal,
    [EDITABLE_PARTS.SPEAKER_TEXT]: speakerTextSignal,
    [EDITABLE_PARTS.SPEAKER_AVATAR]: speakerAvatarSignal,
    [EDITABLE_PARTS.TIME_TEXT]: timeTextSignal,
} as Record<EDITABLE_PARTS, Signal<JSX.CSSProperties>>

export const SIGNAL_NAME_LABEL_MAP: Record<EDITABLE_PARTS, string> = {
    chatWrapper: '배경',
    chatBubble: '말풍선',
    speakerText: '말 한 사람',
    speakerAvatar: '프로필 사진',
    timeText: '시간',
}
