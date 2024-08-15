import { createSignal } from 'solid-js'
import { ChatRecord } from '@type/chatRecord'
import { DEMO_SPEAKERS } from '../service/speaker/storage'

export const chatContentsSignal = createSignal<Partial<ChatRecord>[]>([
    {
        content: '멍멍',
        speakerId: DEMO_SPEAKERS.cat.id,
        id: '1',
        time: '12:00',
    },
    {
        content: '야옹',
        speakerId: DEMO_SPEAKERS.fish.id,
        id: '2',
        time: '12:01',
    },
])
