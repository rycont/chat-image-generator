import { createEffect, createSignal, JSX, Signal } from 'solid-js'

export enum EDITABLE_PARTS {
    CHAT_WRAPPER = 'chatWrapper',
    CHAT_BUBBLE = 'chatBubble',
    SPEAKER_TEXT = 'speakerText',
    SPEAKER_AVATAR = 'speakerAvatar',
    TIME_TEXT = 'timeText',
}

export type StringStyleSheet = Partial<Record<keyof JSX.CSSProperties, string>>

const defaultStyles = {
    [EDITABLE_PARTS.SPEAKER_AVATAR]: {
        width: '36',
        height: '36',
        'background-color': 'white',
        'border-width': '1',
        'border-color': '#d8dae5',
        'border-style': 'solid',
        'border-radius': '12',
    },
    [EDITABLE_PARTS.CHAT_BUBBLE]: {
        'background-color': '#FFFFFF',
        'border-radius': '12',
        'font-weight': '500',
        'font-size': '18',
        padding: '12',
        color: '#000000',
        width: 'fit-content',
    },
    [EDITABLE_PARTS.CHAT_WRAPPER]: {
        'background-color': '#EBECF5',
        padding: '16',
    },
    [EDITABLE_PARTS.SPEAKER_TEXT]: {
        'font-weight': '800',
        'font-size': '16',
        color: '#3d3f4a',
    },
    [EDITABLE_PARTS.TIME_TEXT]: {
        'font-size': '14',
        color: '#8E8E93',
    },
}

const chatWrapperSignal = createSignal<StringStyleSheet>(
    defaultStyles.chatWrapper
)
const chatBubbleSignal = createSignal<StringStyleSheet>(
    defaultStyles.chatBubble
)
const speakerTextSignal = createSignal<StringStyleSheet>(
    defaultStyles.speakerText
)
const speakerAvatarSignal = createSignal<StringStyleSheet>(
    defaultStyles.speakerAvatar
)
const timeTextSignal = createSignal<StringStyleSheet>(defaultStyles.timeText)

export const styleSignals = {
    [EDITABLE_PARTS.CHAT_WRAPPER]: chatWrapperSignal,
    [EDITABLE_PARTS.CHAT_BUBBLE]: chatBubbleSignal,
    [EDITABLE_PARTS.SPEAKER_TEXT]: speakerTextSignal,
    [EDITABLE_PARTS.SPEAKER_AVATAR]: speakerAvatarSignal,
    [EDITABLE_PARTS.TIME_TEXT]: timeTextSignal,
} as Record<EDITABLE_PARTS, Signal<StringStyleSheet>>

export const SIGNAL_NAME_LABEL_MAP: Record<EDITABLE_PARTS, string> = {
    chatWrapper: '배경',
    chatBubble: '말풍선',
    speakerText: '말 한 사람',
    speakerAvatar: '프로필 사진',
    timeText: '시간',
}
