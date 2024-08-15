import { Avatar } from '@type/avatar'
import tossfaceIconsRaw from './tossface-icons.txt?raw'

const tossfaceIcons = tossfaceIconsRaw
    .split('\n')
    .filter((line) => line.length > 0)

export default function getRandomIconAvatar(): Avatar {
    const randomIndex = Math.floor(Math.random() * tossfaceIcons.length)

    return {
        source: 'tossface',
        value: tossfaceIcons[randomIndex],
    }
}
