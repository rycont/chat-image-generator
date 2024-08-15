import { createSignal } from 'solid-js'
import { ChatRecord } from '@type/chatRecord'
import { DEMO_SPEAKERS } from './speakers'

export const chatContentsSignal = createSignal<Partial<ChatRecord>[]>([
    {
        content: '멍멍',
        speaker: DEMO_SPEAKERS.cat,
        id: '1',
        time: '12:00',
    },
    {
        content: '야옹',
        speaker: DEMO_SPEAKERS.fish,
        id: '2',
        time: '12:01',
    },
])
