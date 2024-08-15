import { Speaker } from '@type/speaker'
import { createSignal } from 'solid-js'

export const DEMO_SPEAKERS = {
    fish: {
        avatar: {
            source: 'tossface',
            value: 'u1F90D.svg',
        },
        name: '물고기',
        id: crypto.randomUUID(),
    },
    cat: {
        avatar: {
            source: 'tossface',
            value: 'u1F431.svg',
        },
        name: '고양이',
        id: crypto.randomUUID(),
    },
} as const

export const speakersSignal = createSignal<Map<string, Speaker>>(
    new Map(Object.values(DEMO_SPEAKERS).map((value) => [value.id, value]))
)
