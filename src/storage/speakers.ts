import { Speaker } from '@type/speaker'
import { createSignal } from 'solid-js'

export const DEMO_SPEAKERS = {
    fish: {
        avatar: {
            source: 'tossface',
            value: 'U+1F90D',
        },
        name: '물고기',
    },
    cat: {
        avatar: {
            source: 'tossface',
            value: 'U+1F431',
        },
        name: '고양이',
    },
} as const

export const speakersSignal = createSignal<Speaker[]>([
    DEMO_SPEAKERS.fish,
    DEMO_SPEAKERS.cat,
])
